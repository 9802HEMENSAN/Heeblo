import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Flex, Heading, Img } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Writer = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate=useNavigate()
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleFileUpload = async () => {
      if (selectedFile) {
        try {
          const formData = new FormData();
          formData.append('file', selectedFile);
  
          await axios.post('http://localhost:8080/file/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization' : localStorage.getItem("token") && localStorage.getItem("token")
            },
          });
  
          alert('File uploaded successfully!');
          navigate("/thanks")
        } catch (error) {
          console.error(error);
          alert('Error uploading file.');
        }
      } else {
        alert('Please select a file to upload.');
      }
    };


  return (
    <Box p={4}  bg="teal.600" minH={"100vh"}>
    <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
      <Img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrir-Tp_TXMLDCJg6BJYqz2vJvqzmOT_1xw&usqp=CAU" /><br/>
        <Heading  color="white"fontSize={45}>You're almost there</Heading>
    </Flex><br/><br/>
     <Heading  color="white" textAlign={["center","center"]} fontSize={["2xl","3xl","3xl"]}>___________________ or _______________________</Heading><br/><br/> 
     <Flex direction={["column","row"]} alignItems={"center"} justifyContent={"center"} > 
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <Button mt={4} colorScheme="teal" onClick={handleFileUpload}  _hover={{
             bg: 'teal.400',
          }}>
         Upload Resume 
      </Button> 
      </Flex><br/>
     <Flex direction={["column","row"]} alignItems={"center"} justifyContent={"center"} > 
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <Button mt={4} colorScheme="teal" onClick={handleFileUpload}
       _hover={{
             bg: 'teal.400',
          }}>
         Upload Your Work
      </Button> 
      </Flex>
    </Box>
  )
}

export default Writer