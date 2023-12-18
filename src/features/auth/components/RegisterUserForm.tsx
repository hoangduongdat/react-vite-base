import { RegisterUserInput, userSchema } from '@/api/validation/userValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface RegisterUserFormProps {
    onSubmit: SubmitHandler<RegisterUserInput>
}

const RegisterUserForm: React.FC<RegisterUserFormProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterUserInput>({
        resolver: zodResolver(userSchema),
        mode: 'onChange'
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input {...register('firstName')} />
                <FormError error={errors.firstName} />
            </div>

            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input {...register('lastName')} />
                <FormError error={errors.lastName} />
            </div>

            <div>
                <label htmlFor='email'>Email</label>
                <input {...register('email')} />
                <FormError error={errors.email} />
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' {...register('password')} />
                <FormError error={errors.password} />
            </div>

            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='password' {...register('confirmPassword')} />
                <FormError error={errors.confirmPassword} />
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

const FormError: React.FC<{ error: any }> = ({ error }) => {
    return <span>{error?.message}</span>
}

export default RegisterUserForm
