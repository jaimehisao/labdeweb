import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom'

// IMPORTS
import App from './App'
import HomeStudent from './components/student/Home'
import HomeAdmin from './components/admin/Home'
import Upload from './components/admin/Upload'
import VisualizeAll from './components/admin/VisualizeAll'
import VisualizeFile from './components/admin/VisualizeFile'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' element={<App />} />
            <Route path='/home/student' element={<HomeStudent />} />
            <Route path='/home/admin' element={<HomeAdmin />} />
            <Route path='/home/admin/upload' element={<Upload />} />
            <Route path='/home/admin/visualizeall' element={<VisualizeAll />} />
            <Route path='/home/admin/visualizefile' element={<VisualizeFile />} />
        </Switch>
    )
}

export default Routes