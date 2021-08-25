import { RequestQueryBuilder, CondOperator } from '@nestjsx/crud-request'
import {
  fetchUtils,
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  UPDATE_MANY,
  DELETE,
  DELETE_MANY,
} from 'react-admin'
import { BASE_URL, API_ENTRYPOINT } from 'config/api'

const apiUrl = BASE_URL + API_ENTRYPOINT

const httpClient = (url, options = {}) => {
  const token = localStorage.getItem('token')
  const formatOptions = options

  if (!formatOptions.headers) {
    formatOptions.headers = new Headers({ Accept: 'application/json' })
  }

  formatOptions.headers.set('Authorization', `Bearer ${token}`)
  return fetchUtils.fetchJson(url, formatOptions)
}

export default () => {
  const composeFilter = paramsFilter => {
    let formatParamsFilter = paramsFilter

    if (formatParamsFilter === '' || (typeof formatParamsFilter.q !== 'undefined' && formatParamsFilter.q === '')) {
      formatParamsFilter = {}
    }

    const flatFilter = fetchUtils.flattenObject(formatParamsFilter)

    const filter = Object.keys(flatFilter).map(key => {
      const splitKey = key.split('||')
      const operator = splitKey[1] ? splitKey[1] : 'cont'
      let field = splitKey[0]
      const value = flatFilter[key]

      if (field.indexOf('_') === 0 && field.indexOf('.') > -1) {
        // eslint-disable-next-line prefer-destructuring
        field = field.split(/\.(.+)/)[1]
      }

      return { field, operator, value }
    })

    return filter
  }

  const convertDataRequestToHTTP = (type, resource, params) => {
    let url = ''
    const options = {}
    switch (type) {
      case GET_LIST: {
        const { page, perPage } = params.pagination

        const query = RequestQueryBuilder.create({
          filter: composeFilter(params.filter, resource),
        })
          .setLimit(perPage)
          .setPage(page)
          .sortBy(params.sort)
          .setOffset((page - 1) * perPage)
          .query()

        url = `${apiUrl}/${resource}?${query}`

        break
      }
      case GET_ONE: {
        url = `${apiUrl}/${resource}/${params.id}`
        break
      }
      case GET_MANY: {
        const query = RequestQueryBuilder.create()
          .setFilter({
            field: 'id',
            operator: CondOperator.IN,
            value: `${params.ids}`,
          })
          .query()

        url = `${apiUrl}/${resource}?${query}`

        break
      }
      case GET_MANY_REFERENCE: {
        const { page, perPage } = params.pagination
        const filter = composeFilter(params.filter)

        filter.push({
          field: params.target,
          operator: CondOperator.EQUALS,
          value: params.id,
        })

        const query = RequestQueryBuilder.create({
          filter,
        })
          .sortBy(params.sort)
          .setLimit(perPage)
          .setOffset((page - 1) * perPage)
          .query()

        url = `${apiUrl}/${resource}?${query}`

        break
      }
      case UPDATE: {
        url = `${apiUrl}/${resource}/${params.id}`
        options.method = 'PATCH'
        options.body = JSON.stringify(params.data)
        break
      }
      case CREATE: {
        url = `${apiUrl}/${resource}`
        options.method = 'POST'
        options.body = JSON.stringify(params.data)
        break
      }
      case DELETE: {
        url = `${apiUrl}/${resource}/${params.id}`
        options.method = 'DELETE'
        break
      }
      default:
        throw new Error(`Unsupported fetch action type ${type}`)
    }
    return { url, options }
  }

  const convertHTTPResponse = (response, type, resource, params) => {
    const { json } = response

    switch (type) {
      case GET_LIST:
      case GET_MANY:
      case GET_MANY_REFERENCE:
        return {
          data: json.data,
          total: json.total,
        }
      case CREATE:
        return { data: { ...params.data, id: json.id } }
      case DELETE:
        return { data: { id: params.id } }
      default:
        return { data: json }
    }
  }

  return (type, resource, params) => {
    if (type === UPDATE_MANY) {
      return Promise.all(
        params.ids.map(id =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
          })
        )
      ).then(responses => ({
        data: responses.map(response => response.json),
      }))
    }
    if (type === DELETE_MANY) {
      return Promise.all(
        params.ids.map(id =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: 'DELETE',
          })
        )
      ).then(responses => ({
        data: responses.map(response => response.json),
      }))
    }

    const { url, options } = convertDataRequestToHTTP(type, resource, params)
    return httpClient(url, options).then(response => convertHTTPResponse(response, type, resource, params))
  }
}
