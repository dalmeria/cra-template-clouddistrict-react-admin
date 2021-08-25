// import jwtDecode from 'jwt-decode'
// import _find from 'lodash/find'
// import _get from 'lodash/get'
// import _isNil from 'lodash/isNil'
// import { roles } from '../config/api'
// import * as api from '../api'

//REMOVE
export default {
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkError: () => Promise.resolve(),
  checkAuth: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
}

// const isAdminUser = permissions => {
//   const isRoleAdmin = _find(permissions, permission => permission === roles.ROLE_ADMIN)
//   return !_isNil(isRoleAdmin)
// }

// export default {
//   login: async ({ username, password }) => {
//     try {
//       const response = await api.login({ username, password })
//       const token = _get(response, 'token', '')

//       if (token) {
//         const decoded = jwtDecode(token)
//         const permissions = _get(decoded, 'roles')
//         const isRoleAdmin = isAdminUser(permissions)

//         if (isRoleAdmin) {
//           localStorage.setItem('token', token)
//           return Promise.resolve()
//         }
//       }
//       return Promise.reject()
//     } catch {
//       return Promise.reject()
//     }
//   },
//   logout: () => {
//     localStorage.removeItem('token')
//     return Promise.resolve()
//   },
//   checkError: ({ status }) => {
//     if (status === 401 || status === 403) {
//       localStorage.removeItem('token')
//       return Promise.reject()
//     }
//     return Promise.resolve()
//   },
//   checkAuth: () => (localStorage.getItem('token') ? Promise.resolve() : Promise.reject()),
//   getPermissions: () => {
//     const token = localStorage.getItem('token')

//     if (token) {
//       const decoded = jwtDecode(token)
//       const permissions = _get(decoded, 'roles')
//       return permissions ? Promise.resolve(permissions) : Promise.reject()
//     }
//     return Promise.reject()
//   },
// }
