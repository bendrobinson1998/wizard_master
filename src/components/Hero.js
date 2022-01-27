import React from "react";
import {
  chakra,
  Box,
  Flex,
  Button,
  Stack,
  Icon,
  Image,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import { BsChevronDoubleDown } from "react-icons/bs";
import logotest from "../images/logo-test.png";

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
            <Image px={8} src={logotest} w="700px" alt="Mystic Mages Logo"></Image>

            <Button
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
              class="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Start project
            </Button>
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
