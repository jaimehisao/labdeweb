import React, { useContext } from 'react'
import { Route, Navigate, Outlet, useLocation } from "react-router-dom";
import UserContext from './contexts/UserContext';


const PrivateRoute = () => {

    const currentUser = []
    const location = useLocation()

    const { user } = useContext(UserContext)

    return (
        user
            ? <Outlet />
            : <Navigate to='/' state={{ from: location }} replace />
    )
}

export default PrivateRoute