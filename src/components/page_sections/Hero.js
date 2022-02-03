import React from "react";
import { chakra, Box, Flex, Stack, Icon, Image } from "@chakra-ui/react";

import { BsChevronDoubleDown } from "react-icons/bs";

const Hero = () => {
  return (
    <chakra.header>
      <Box
        className="hero-image"
        w="full"
        h="100vh"
        backgroundImage="./background_mages.png"
        bgPos="center"
        bgSize="cover"
        id="hero"
        /* bg={"transparent"} */
      >
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
              src="./wizlogo.png"
              w="700px"
              alt="Mystic Mages Logo"
            ></Image>

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
