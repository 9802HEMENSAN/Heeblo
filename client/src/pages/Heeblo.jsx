import { Button, Box, Img, Flex,  Heading  } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from "react-router-dom"
 
 
const Heeblo = () => {
  return (
    <Box bg="teal.600" minH={"100vh"}> 
        <Flex direction={'column'} align={'center'} justify={'center'} > 
        <Img src="https://cdn.dribbble.com/users/2320116/screenshots/6462375/img_3933_4x.jpg?compress=1&resize=1000x750&vertical=center" width="40%"
        height="400px"/>
       </Flex>
       <Heading color="orange.200"
        fontFamily={"sans-serif"} textAlign={["center","center"]} 
        fontSize={["4xl","5xl","6xl"]} >Heeblo</Heading>
       <Heading 
        fontFamily={"sans-serif"} textAlign={["center","center"]} 
        fontSize={["2xl","3xl","3xl"]} 
        color="orange.400">We help to find you quality writers</Heading>
       <Flex direction={'column'} justifyContent={"center"}
       align={'center'}  > 
        <RouterLink to="/writer"> 
            <Button w={[300,400,500]} m={3}>
                I am a Writer
            </Button>
        </RouterLink>
        <RouterLink to="/hiring"> 
            <Button w={[300,400,500]} m={3}>
                Im Hiring 
            </Button>
        </RouterLink>
        </Flex>
    </Box>
  )
}

export default Heeblo