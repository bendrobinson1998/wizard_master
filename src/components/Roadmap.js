import React from "react";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Roadmap() {
  return (
    <Flex
      px={10}
      pb={10}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="absolute"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
            >
              Clear overview for efficient tracking
            </chakra.h2>
            <chakra.p
              mt={4}
              mb={5}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </chakra.p>
            <Button
              color={"white"}
              bg={"purple.600"}
              rounded={"lg"}
              px={6}
              _hover={{
                bg: "purple.700",
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            bg={useColorModeValue("gray.200", "gray.700")}
          ></Box>
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
              Decide how you integrate Payments
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
            <Button
              color={"white"}
              bg={"purple.600"}
              rounded={"lg"}
              px={6}
              _hover={{
                bg: "purple.700",
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            bg={useColorModeValue("gray.200", "gray.700")}
          ></Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
