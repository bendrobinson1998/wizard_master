import React from "react";
import { chakra, Box, Flex, Stack, Icon, Image, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { BsChevronDoubleDown } from "react-icons/bs";


const Hero = () => {
  return (
    <chakra.header>
      <Box
        w="full"
        h="100vh"
        backgroundImage="url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
        bgPos="center"
        bgSize="cover"
        id="hero"
        bg={'transparent'}
      >
        <Navbar />
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          opacity={1}
        >
          <Stack mt={-20} textAlign="center" alignItems="center" spacing={6}>
            <Image
              px={4}
              src= './wizlogo.png'
              w="700px"
              alt="Mystic Mages Logo"
              
            ></Image>

            <Text>Discover Mystic Mages</Text>
            <a href="#legendary-start">
              <Icon
                w={9}
                h={9}
                px={1}
                as={BsChevronDoubleDown}
                id="hero-button"
                color={"white"}
              />
            </a>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};

export default Hero;
