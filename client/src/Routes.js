import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import PrivateRoute from './PrivateRoute'

// IMPORTS
import App from './App'
import Register from './components/auth/Register'
import HomeStudent from './components/student/Home'
import HomeAdmin from './components/admin/Home'
import Upload from './components/admin/Upload'
import VisualizeAll from './components/admin/VisualizeAll'
import FileList from './components/student/FileList'

const Routes = () => {
    return (
        <UserProvider>
            <Switch>
                <Route path='/' element={<App />} />

                {/* Private Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path='/home/student' element={<HomeStudent />} />
                    <Route path='/home/admin' element={<HomeAdmin />} />
                    <Route path='/auth/register' element={<Register />} />
                    <Route path='/home/admin/upload' element={<Upload />} />
                    <Route path='/home/admin/visualizeall' element={<VisualizeAll />} />
                    <Route path='/documentos/:type' element={<FileList />} />
                </Route>

            </Switch>
        </UserProvider>
    )
}

export default Routes