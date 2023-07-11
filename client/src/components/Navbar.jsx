 
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 
const Navbar = () => {
  const navigate=useNavigate()
  const [token ] = useState(localStorage.getItem("token"))
  const LogOut=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
     alert("Log Out Successful !")
     navigate("/")
  }
 
  return (
    <Flex direction={"row"} color="green.800"  bg="green.100" minH={'50px'} justifyContent={"space-evenly"}>
        <Link to="/"> 
          <Heading m={5} color="red.900">Heeblo</Heading> 
         </Link>
         <Link to="/writer" > 
             <Heading m={5} >Writers</Heading>
          </Link> 
         
        <Link to="/hiring" > 
          <Heading m={5}  >Hirings</Heading>
        </Link>
        <Heading  m={5} color="orange.300">{ localStorage.getItem("username") ? `Welcome ${localStorage.getItem("username")}` : "Guest" }</Heading>
           <Button m={5} color="red.300" onClick={()=> LogOut()}>Log Out</Button>
 
 
    </Flex>
  )
}

export default Navbar