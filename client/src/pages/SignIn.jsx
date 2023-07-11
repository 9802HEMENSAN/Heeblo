import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  export default function Signin() {
    const [form, setform] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate();
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setform({ ...form, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        axios
          .post("http://127.0.0.1:8080/user/login", form)
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.username);
            alert("Login Successfull");
            navigate("/heeblo");
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const { email, password } = form;

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}  
      bg='teal.200'

      >
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <form onSubmit={handleSubmit}> 
          <Stack spacing={4} w={'full'} maxW={'md'}
          
          >
            <Heading fontSize={[20,35,45]} color="red.400" >Welcome get</Heading>
            <Heading fontSize={[20,30,45]} color="black">let's get to work!</Heading><br/>
            
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"  name="email" value={email}  
              onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={password} 
              onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'teal.500'}>Forgot password?</Link>
              </Stack>
              <Button  type="submit" bg={'teal.400'} variant={'solid'} _hover={{
                    bg: 'teal.500',
                  }} >
                Login
              </Button>
            </Stack>

          </Stack>
          </form>
        </Flex>

      </Stack>
    );
  }