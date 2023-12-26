import Cookies from 'js-cookie'

const setAuthToken = (token: string | null) => {
    if (token) {
        Cookies.set('accessToken', token, { path: '/' })
    } else {
        Cookies.remove('accessToken', { path: '/' })
    }
}

const getAccessToken = (): string | null => {
    return Cookies.get('accessToken') || null
}

export { setAuthToken, getAccessToken }
