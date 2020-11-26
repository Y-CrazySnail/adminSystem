import Cookies from 'js-cookie'

const TokenKey = 'sso_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getClientToken() {
  return 'Basic Y2xpZW50LXBhc3N3b3JkOmNsaWVudC1wYXNzd29yZA=='
}
