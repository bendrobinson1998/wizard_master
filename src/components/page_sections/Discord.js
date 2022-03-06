import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";

const Discord = () => {
  return (
    <Box px={8} pb={24} mt={2} mb={5} mx="auto" className="discord">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          Next generation{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, purple.600,blue.600)"
            fontWeight="extrabold"
          >
            discord server
          </Text>{" "}
          designed to benefit our community.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          fontSize={{ base: "lg", md: "xl" }}
          mb={6}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          The Mystic Mages Discord server features a P2E (Participate to Earn)
          integrated system that rewards members with $MAGEC for their continued
          contribution. Token's will be distributed following the launch of the
          collection.
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <a href="https://discord.gg/zZ4v72xm6N">
            <Button
              as="a"
              className="button-primary"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
            >
              Join Our Discord
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </a>
        </Stack>
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        {/*  <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://kutty.netlify.app/hero.jpg"
          alt="Hellonext feedback boards software screenshot"
        /> */}
      </Box>
    </Box>
  );
};

export default Discord;
