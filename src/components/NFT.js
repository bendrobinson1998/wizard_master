import React from "react";
import { chakra, Box, Flex, useColorModeValue, Button } from "@chakra-ui/react";

const NFT = () => {
  return (
    <Flex
      pt={50}
      px={50}
      pb={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "xl" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            1,000 Animated Genesis Mages{" "}
            <chakra.span color={useColorModeValue("brand.600", "brand.400")}>
              Idea
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur.
          </chakra.p>

          <Box mt={8}>
            <Button
              color={"white"}
              bg={"purple.600"}
              rounded={"lg"}
              px={6}
              _hover={{
                bg: "purple.700",
              }}
            >
              Start Now{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default NFT;
