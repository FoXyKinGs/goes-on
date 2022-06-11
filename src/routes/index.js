import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from '../views/welcomePage'
import NotFoundPage from '../views/notFoundPage'
import ManagementPage from '../views/managementPage'

const index = () => {
  return (
    <Routes>
      <Route exact path='/' element={<WelcomePage/>} />
      <Route path='/manage' element={<ManagementPage/>} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default index