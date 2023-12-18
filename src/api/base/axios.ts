import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getAccessToken } from '@/utils/cookies'
import authService from '../services/authService'

const api = axios.create({
    baseURL: process.env.API_ENDPOINT
})

type InternalAxiosRequestConfigCustom = {
    _retry?: boolean
} & InternalAxiosRequestConfig

// Add a request interceptor
api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const accessToken = getAccessToken()
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfigCustom

        if (error.response && error.response.status === 401 && !originalRequest?._retry) {
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
