import { Box, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from "react-router-dom"
const Thanks = () => {
  
  return (
    <RouterLink to="/"> 
    <Box  bg="orange.100" minH={'100vh'} >
        <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
 
        <Img  src="https://cdn.dribbble.com/users/1194387/screenshots/3279027/media/67599b477330c05296cb864bad06a93f.jpg?compress=1&resize=400x300&vertical=top" width="50%" height="100vh" />
        </Flex>
   </Box>
   </RouterLink>
  )
}

export default Thanks