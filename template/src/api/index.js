import * as api from 'config/api'

export const login = async ({ username, password }) => {
  const request = new Request(`${api.BASE_URL}/api/login_check`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  })
  const response = await fetch(request)
  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText)
  }

  return response.json()
}
