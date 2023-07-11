import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../pages/SignIn'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import Heeblo from '../pages/Heeblo'
import Writer from '../pages/Writer'
import Hiring from '../pages/Hiring'
import Thanks from '../pages/Thanks'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {

  return (
    <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup"  element={<Signup/>}></Route>
        <Route path="/heeblo"  element={<Heeblo/>}></Route>

        <Route path="/writer"  element={
         <PrivateRoute> 
           <Writer/>
        </PrivateRoute> 
        }></Route>

        <Route path="/hiring"  element={<Hiring/>}></Route>
        <Route path="/thanks"  element={<Thanks/>}></Route>
    </Routes>
  )
}

export default AllRoutes