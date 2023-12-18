import { useDispatch } from 'react-redux'

import RegisterUserForm from '../components/RegisterUserForm'
import { User, UserRegisterForm } from '@/interfaces/user'
import { register } from '@/reducers/slices/authSlice'

export default function RegisterUserPage() {
    const dispatch = useDispatch()
    const onSubmit = (data: UserRegisterForm) => {
        // Add logic to handle form submission (e.g., API request)

        const userResponse: User = {
            ...data,
            permissions: []
        }
        dispatch(register(userResponse))
    }

    return <RegisterUserForm onSubmit={onSubmit} />
}
