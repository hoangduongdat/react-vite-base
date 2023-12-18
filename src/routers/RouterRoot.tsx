import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'
import HomePage from '@/features/home/pages/HomePage'
import RegisterUserPage from '@/features/auth/pages/RegisterUserPage'
import LoginPage from '@/features/auth/pages/LoginPage'
import BookingPage from '@/features/bookings/pages/BookingPage'
import ROUTER_URL from '@/constants/routerUrl'

export default function RouterRoot() {
    return (
        <Routes>
            <Route path='*' element={<>Not Found</>} />
            <Route index element={<HomePage />} />
            <Route path={ROUTER_URL.HOME} element={<HomePage />} />
            <Route path={ROUTER_URL.REGISTER} element={<RegisterUserPage />} />
            <Route path={ROUTER_URL.LOGIN} element={<LoginPage />} />

            {/*authentication */}
            <Route element={<ProtectedRoute />}>
                <Route path={ROUTER_URL.BOOKING} element={<BookingPage />} />
            </Route>

            {/* permission */}
            <Route
                path='analytics'
                element={
                    <ProtectedRoute redirectPath='/home' permission='analyze'>
                        <BookingPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}
