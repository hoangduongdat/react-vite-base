import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig, CancelTokenSource } from 'axios'
import { getAccessToken } from '@/utils/cookies'
import authService from '../services/authService'

const api = axios.create({
    baseURL: process.env.API_ENDPOINT
})

type InternalAxiosRequestConfigCustom = {
    _retry?: boolean
    cancelTokenSource?: CancelTokenSource
} & InternalAxiosRequestConfig

// Add a request interceptor
api.interceptors.request.use(
    async (config: InternalAxiosRequestConfigCustom) => {
        const accessToken = getAccessToken()
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        const { CancelToken } = axios
        const source = CancelToken.source()
        config.cancelToken = source.token
        config.cancelTokenSource = source

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Add a cancel request interceptor
api.interceptors.request.use(
    (config: InternalAxiosRequestConfigCustom) => {
        if (config.cancelTokenSource) {
            // Cancel the request
            config.cancelTokenSource.cancel('Request canceled by interceptor')
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Add a response interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfigCustom

        if (error && error.response && error.response.status === 401 && !originalRequest?._retry) {
            originalRequest._retry = true
            try {
                const newAccessToken = await authService.refreshToken()
                api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`

                return api(originalRequest)
            } catch (refreshError) {
                throw new Error('Token refresh failed')
            }
        }

        return Promise.reject(error)
    }
)

export default api
