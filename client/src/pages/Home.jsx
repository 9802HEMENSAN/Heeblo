import { Box, Button, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    // <div>
    //     <Heading>Heeblo</Heading>
    //   <Heading>Your hub for all things talent !</Heading>

    
    // </div>
    <Box bg="teal.600" minH={"100vh"}>
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Img
          src="https://media.istockphoto.com/id/1268744208/vector/literature-fan-stylish-young-man-sits-on-a-park-bench-reads-a-book-and-drinks-coffee.jpg?s=612x612&w=0&k=20&c=onG3ZTQSTVk2lMoYqBeZP6_ODGiwx7kQxJQeRbhDkTI="
          width="40%"
          height="400px"
        />
      </Flex>
      <Heading
        color="orange.200"
        fontFamily={"sans-serif"}
        textAlign={["center", "center"]}
        fontSize={["4xl", "5xl", "6xl"]}
      >
        Heeblo
      </Heading>
      <Heading
        fontFamily={"sans-serif"}
        textAlign={["center", "center"]}
        fontSize={["2xl", "3xl", "4xl"]}
        color={"white"}
      >
        Your hub for all things talent ! 
      </Heading>
      <Flex direction={"column"} justifyContent={"center"} align={"center"}>
        <RouterLink to="/signup">
          <Button w={[300, 400, 500]} m={3}>Sign Up</Button>
        </RouterLink>
        <RouterLink to="/signin">
          <Button w={[300, 400, 500]} m={3}>Sign In</Button>
        </RouterLink>
      </Flex>
    </Box>
  );
};

export default Home;
