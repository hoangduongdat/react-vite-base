export interface UserRegisterForm {
    firstName: string
    lastName: string
    email: string
}

export interface User {
    firstName: string
    lastName: string
    email: string
    permissions: string[]
}
