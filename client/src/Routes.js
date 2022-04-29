import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom'

// IMPORTS
import App from './App'
import HomeStudent from './components/student/home'
import HomeAdmin from './components/admin/home'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' element={<App />} />
            <Route path='/home/student' element={<HomeStudent />} />
            <Route path='/home/admin' element={<HomeAdmin />} />

            {/* 

            <Route path='/home/student' element={<HomeStudent />} />
            <Route path='/home/admin' element={<HomeAdmin />} />

            */}
        </Switch>
    )
}

export default Routes