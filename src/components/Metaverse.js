import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Badge,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import WizScene from "./WizScene";

const Metaverse = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      px={5}
      spacing={0}
      _after={{
        bg: "brand.500",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
        pb={24}
      >
        <Badge
          color="white"
          px={3}
          py={1}
          mb={3}
          variant="solid"
          colorScheme="brand"
          rounded="full"
        >
          SANDBOX METAVERSE
        </Badge>
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
        >
          Great customer relationships start here.
        </chakra.h1>

        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="sm"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          Get the #1 Business Messenger and start delivering personalized
          experiences at every stage of the customer journey.
        </chakra.p>
        <Button
          color={"white"}
          bg={"purple.600"}
          rounded={"lg"}
          px={6}
          mt={4}
          _hover={{
            bg: "purple.700",
          }}
        >
          Get Started
        </Button>
      </Flex>
      <Box>
        <WizScene />
      </Box>
    </SimpleGrid>
  );
};

export default Metaverse;