import Cookies from 'js-cookie'
import API_URL from '../../constants/apiUrl'
import api from '../base/axios'
import { setAuthToken } from '@/utils/cookies'

type AuthResponse = {
    accessToken: string
    refreshToken: string
}

const loginUser = async (credentials: { username: string; password: string }): Promise<AuthResponse> => {
    try {
        const response = await api.post<AuthResponse>(API_URL.LOGIN, credentials)
        const { accessToken, refreshToken } = response.data

        setAuthToken(accessToken)
        Cookies.set('refreshToken', refreshToken, { path: '/' })

        return response.data
    } catch (error) {
        throw error
    }
}

const refreshToken = async (): Promise<string> => {
    try {
        const refreshToken = Cookies.get('refreshToken')

        if (!refreshToken) {
            throw new Error('Refresh token not found')
        }

        const response = await api.post<AuthResponse>(API_URL.REFETCH_TOKEN, { refreshToken })
        const newAccessToken = response.data.accessToken

        setAuthToken(newAccessToken)

        return newAccessToken
    } catch (error) {
        throw error
    }
}

const authService = {
    refreshToken,
    loginUser
}

export default authService
