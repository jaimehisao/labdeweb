import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom'

// IMPORTS
import App from './App'
import Register from './components/auth/Register'
import HomeStudent from './components/student/Home'
import HomeAdmin from './components/admin/Home'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' element={<App />} />
            <Route path='/auth/register' element={<Register />} />

            <Route path='/home/student' element={<HomeStudent />} />
            <Route path='/home/admin' element={<HomeAdmin />} />

        </Switch>
    )
}

export default Routes