import React from "react";

import {
  Box,
  chakra,
  Flex,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Launchpad() {
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  const divArray = document.querySelectorAll("div").length;
  const num = Math.random() * 10;
  const finalnum = Math.round(num);
  return (
    <Flex
      px={5}
      py={5}
      w="full"
      justifyContent="center"
      alignItems="center"
      id="legendary-start"
    >
      <Box px={8} py={20} mx="auto">
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          mb={40}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box className="legendary-1">
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
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Mint a Genesis Mystic Mage and reap the rewards of earning daily,
              passive $MAGEC tokens. The Genesis supply will earn rewards, and
              the Genesis supply will have access to our Sandbox metaverse.
            </chakra.p>
          </Box>
          <Box
            m="auto"
            alignSelf={"center"}
            justifyContent={"center"}
            boxShadow={"lg"}
            direction={{ base: "column-reverse", md: "row" }}
            rounded={"xl"}
            p={2}
            justifyContent={"space-between"}
            position={"relative"}
            bg={useColorModeValue("white", "gray.800")}
            _before={{
              content: '""',
              position: "absolute",
              zIndex: "-1",
              height: "full",
              maxW: "640px",
              width: "full",
              filter: "blur(40px)",
              transform: "scale(0.98)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              top: 0,
              left: 0,
              backgroundImage: backgrounds[divArray % 4],
            }}
          >
            <Image
              src="./genesis_mage_two.png"
              w="350px"
              alt="Genesis Mystic Mage Preview 1
              "
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
