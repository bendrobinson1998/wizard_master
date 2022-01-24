import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Container,
} from "@chakra-ui/react";
import opensea_logo from "../images/opensea_logo.png";
import React from "react";
import eth_logo from "../images/eth_logo.jpg";
import react_logo from "../images/react_logo.jpg";
import sandbox_logo from "../images/sandbox_logo.png";
import WizScene from "./WizScene";

const Hero = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <WizScene />
        <Stack
          className="hero-section"
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 10, md: 26 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            The NFT Drop
            <br />
            <Text as={"span"} color={"purple.600"}>
              You've Been Waiting For
            </Text>
          </Heading>
          <Text color={"white.500"} px={8}>
            Earn daily $KADABRA coins, gain early access to our NFT portfolio
            tracker, exclusive access to our Sandbox metaverse and more...
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
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
            <Button variant={"link"} colorScheme={"gold"} size={"sm"}>
              Learn more
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Image
              borderRadius="full"
              boxSize="35px"
              src={opensea_logo}
              alt="Opensea Logo"
            />
            <Image
              borderRadius="full"
              boxSize="35px"
              src={eth_logo}
              alt="Ethereum Logo"
            />
            <Image
              borderRadius="full"
              boxSize="35px"
              src={sandbox_logo}
              alt="Sandbox Logo"
            />
            <Image
              borderRadius="full"
              boxSize="35px"
              src={react_logo}
              alt="Dan Abramov"
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;
