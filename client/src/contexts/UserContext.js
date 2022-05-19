import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { isExpired, decodeToken } from "react-jwt"


export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [userType, setUserType] = useState(null)
    
    const config = { header: { "Content-Type": "application/json" } }

    useEffect(() => {

        const loggedInUser = localStorage.getItem("CodekraftUser")

        if (loggedInUser !== null) {
            const foundUser = decodeToken(loggedInUser)
            
            setUser(foundUser)
            setUserType(foundUser.userType)
            setToken(loggedInUser)
        }

    }, [])

    const handleLogin = async (formData) => {
        try {
            const { data } = await axios.post('/api/auth/login', formData, config)

            setToken(data)

            const decodedToken = decodeToken(data.token)
            // const isExpiredToken = isExpired(data.token)

            

            setToken(data.token)
            setUser(decodedToken)

            localStorage.setItem('CodekraftUser', data.token)

            return data

        } catch (error) {
            console.log(error)
            return {
                success: false,
                error
            }
        }
    }

    const handleSignup = async (formData) => {

        try {
            const { data } = await axios.post('/api/auth/register', formData, config)

            const decodedToken = decodeToken(token)
            // const isExpiredToken = isExpired(token)

            setToken(data.token)
            setUser(decodedToken)

            localStorage.setItem('CodekraftUser', data.token)

            return data

        } catch (err) {
            console.error(err)
            return { success: false, error: err }
        }

    }


    const handleLogout = async () => {
        setToken(null)
        setUser(null)
        localStorage.clear()
    }

    const contextValue = {
        token,
        user,
        userType,
        setUser,
        handleLogin,
        handleSignup,
        handleLogout,
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext