import { z } from 'zod'

export const userSchema = z
    .object({
        firstName: z.string().min(2).max(50),
        lastName: z.string().min(2).max(50),
        email: z.string().email(),
        password: z.string().min(6),
        confirmPassword: z.string()
    })
    .refine((values) => values.password === values.confirmPassword, {
        message: 'Passwords must match!',
        path: ['confirmPassword']
    })

export type RegisterUserInput = z.infer<typeof userSchema>
