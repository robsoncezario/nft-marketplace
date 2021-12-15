import axios from 'axios'
import store from '../store/index'
import ToastyService from './ToastyService/service'
import { REMOVE_AUTH_TOKEN } from '../store/auth/types'

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL  + '/api/v1'
})

baseAPI.interceptors.request.use(
  function handleRequest(config) {
    const token = localStorage.getItem('@xproAdmin/auth')
		
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }

    config.headers['Content-Type'] = 'application/json'
    return config
  },

  function handleError(error) {
    return Promise.reject(error)
  }
)

baseAPI.interceptors.response.use(
  function handleResponse(response) {
    return response
  },

  function handleError(error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 403: 
          ToastyService.error(error.message)
          store.dispatch({ type: REMOVE_AUTH_TOKEN })
          window.location.href = '/login'
          break;
        default:
          break;
      }
    }

    return Promise.reject(error)
  }
)

export default baseAPI