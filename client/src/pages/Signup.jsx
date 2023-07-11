import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  import { Link as RouterLink, useNavigate } from "react-router-dom";
 import axios from "axios";
  const initstate={
    username : "",
    email : "",
    password : ""
  }
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setform] = useState(initstate)
    const navigate=useNavigate()
   const handleChange = (e)=>{
       const {name,value} = e.target
       setform({...form,[name]:value})
   }
    const handleSubmit= (e)=>{
        e.preventDefault()
      console.log(form)
      axios
      .post("http://127.0.0.1:8080/user/register", form)
      .then((res) => {
        console.log(res);
        alert("registered");
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
    setform({
      name: "",
      email: "",
      password: "",
    });
       
    }
    const { username, email, password} = form;

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('teal.200', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <form onSubmit={handleSubmit}> 
            <Stack spacing={4} >
            <FormControl id="username" w={[300,400]} isRequired>
                <FormLabel>username</FormLabel>
                <Input type="text" name={"username"} value={username}  
                onChange={handleChange}
                />
              </FormControl>
              <FormControl id="email"  >
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={email} 
                onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  name={"password"} value={password}
                  onChange={handleChange}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'teal.500'}
                  color={'white'}
                  _hover={{
                    bg: 'teal.400',
                  }}
                type="submit"
                  >
                  Sign up
                </Button>
              </Stack>

              <Stack pt={6}>
                
                <Text align={'center'}>
                  Already a user? 
                  <RouterLink to="/signin">  
                     <Link color={'blue.200'}>Login</Link>
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    );
  }