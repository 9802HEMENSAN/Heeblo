import { Box, Button, Flex, Grid, GridItem, Heading,Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Hiring = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [data, setdata] = useState([]);
  const handleDownload = async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/file/files/${id}`,
        {
          responseType: "blob",
          type: "application/pdf"
        } 
      );

      const file = new Blob([response.data], { type: "application/pdf" });
      const fileUrl = URL.createObjectURL(file);
      setFileUrl(fileUrl);
    } catch (error) {
      console.error(error);
      alert("Error downloading file.");
    }
  };
  const fetchResume = async () => {
    try {
      const requestdata = await axios.get("http://127.0.0.1:8080/file/files");
      setdata(requestdata.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchResume();
  });

  return (
    <Box> 
     {
       (!fileUrl) ?
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      {data?.map((item) => (
        <GridItem w="100%" h="10" p={4}>
          {fileUrl ? (
            <embed
              src={fileUrl}
              width="100%"
              height="700px"
              type="application/pdf"
            />
          ) : (
            <Flex h={100} >               
                <Button mt={4} colorScheme="teal" onClick={() => handleDownload(item._id)}>
                 Download PDF
               </Button> 
               <Text m={4} fontSize={20}>{item?.filename}</Text> 
            </Flex>
          )}
        </GridItem>
      ))}
    </Grid>
     :  (
            <embed
              src={fileUrl}
              width="100%"
              height="700px"
              type="application/pdf"
            />
      )
      }
  </Box>
  )
};

export default Hiring;
