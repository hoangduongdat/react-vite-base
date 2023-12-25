import { RootStoreState } from '@/reducers/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

type ProtectedRouteProps = {
    redirectPath?: string
    children?: React.ReactNode
    permission?: string
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ permission, children, redirectPath = '/login' }) => {
    const location = useLocation()
    const { isAuthenticated, user } = useSelector((state: RootStoreState) => state.auth)

    const isAllowedPermission = permission ? user?.permissions.includes(permission) : true

    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace state={{ from: location }} />
    }

    if (!isAllowedPermission) {
        return <Navigate to='/404' replace state={{ from: location }} />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute
