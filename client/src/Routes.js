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
import Delete from './components/admin/DeleteFile'
import VisualizeAll from './components/admin/VisualizeAll'
import FileList from './components/student/FileList'
import ViewFile from './components/general/ViewFile'
import ViewFileAdmin from './components/general/ViewFileAdmin'

const Routes = () => {
    return (
        <UserProvider>
            <Switch>
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<App />} />

                {/* Private Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path='/home/student' element={<HomeStudent />} />
                    <Route path='/home/admin' element={<HomeAdmin />} />
                    <Route path='/home/admin/upload' element={<Upload />} />
                    <Route path='/home/admin/delete' element={<Delete />} />
                    <Route path='/home/admin/visualizeall' element={<VisualizeAll />} />
                    <Route path='/documentos/:type' element={<FileList />} />
                    <Route path='/documento/:id' element={<ViewFile />} />
                    <Route path='/documentoAdmin/:id' element={<ViewFileAdmin />} />

                </Route>

            </Switch>
        </UserProvider>
    )
}

export default Routes