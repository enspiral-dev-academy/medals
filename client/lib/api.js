import request from 'superagent'

import {isAuthenticated, getEncodedToken} from './auth'

const baseUrl = '/api/v1'

export default function consume (method = 'get', endpoint, data = {}) {
  const payloadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const token = getEncodedToken()
  const headers = {
    Accept: 'application/json'
  }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request[method](baseUrl + endpoint)
    .set(headers)[payloadMethod](data)
    .then(res => res)
    .catch(err => {
      throw err
    })
}
