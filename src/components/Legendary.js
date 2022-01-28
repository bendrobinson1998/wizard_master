import React from "react";

import {
  Box,
  chakra,
  Flex,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Legendary() {
  return (
    <Flex
      px={5}
      py={10}
      w="full"
      justifyContent="center"
      alignItems="center"
      id="legendary-start"
    >
      <Box px={8} py={20} mx="auto">
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={40}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
            >
              3900 Genesis Mystic Mages
            </chakra.h2>
            <chakra.p
              mt={4}
              mb={5}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Mint a Genesis Mystic Mage and reap the rewards of earning passive $AMULET tokens daily. Only the Genesis supply will earn rewards, and only the genesis supply will have access to our sandbox metaverse.
            </chakra.p>
          </Box>
          <Box m="auto" alignSelf={"center"} justifyContent={"center"}>
            <Image src="./fire_mage.png" w="250px" alt="Mystic Mages Logo" />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "none", md: 2 }}>
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
            >
              30 Animated Elite Mages
            </chakra.h2>
            <chakra.p
              mt={4}
              mb={5}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </chakra.p>
          </Box>
          <Box m="auto" alignSelf={"center"} justifyContent={"center"}>
            <Image src="./earth_mage.png" w="250px" alt="Mystic Mages Logo" />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
