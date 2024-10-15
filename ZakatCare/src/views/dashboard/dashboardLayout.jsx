import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard'
import DonorList from './donorList'

const DashboardLayout = () => {
  return (
    <div>
        <h1>Sidebar</h1>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/donor-list' element={<DonorList/>}/>
        </Routes>
    </div>
  )
}

export default DashboardLayout