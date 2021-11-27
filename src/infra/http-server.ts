import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.apiURL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})
