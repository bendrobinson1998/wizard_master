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
import WizScene from "../accessories/WizScene";

const Metaverse = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      px={5}
      spacing={0}
      _after={{
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
          lineHeight="shorter"
        >
          Discover Arteria.
        </chakra.h1>

        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="sm"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          Embark on a Mystic Mage adventure and join us in our exclusive holders
          only metaverse land - Arteria! Your Mystic Mage NFT is your entry
          pass. We will be holding exciting whitelist competitions for projects
          that join through our launchpad here, alongisde exciting $AMULET mini
          games and much more...
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
      <Box m="auto">
        <WizScene />
      </Box>
    </SimpleGrid>
  );
};

export default Metaverse;
