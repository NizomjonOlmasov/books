import React from 'react'
import AuthRoutes from '../components/route/AuthRoutes';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../components/route/ProtectedRoutes';

function AllPages() {
  return (
    <div>
      <Routes>
        <Route  path='/auth' element={<AuthRoutes/>} />
        <Route path='/' element={<ProtectedRoutes/>} />
        </Routes>
    </div>
  )
}

export default AllPages;