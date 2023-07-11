import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
 
  const [token] = useState(localStorage.getItem("token"))
   
   
  return token ? children : <Navigate to="/signin"/> 
}

export default PrivateRoute