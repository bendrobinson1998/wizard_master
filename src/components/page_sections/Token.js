import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Image,
  SimpleGrid,
  Button,
  VStack,
} from "@chakra-ui/react";
export default function Token() {
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  const num = Math.random() * 10;
  const finalnum = Math.round(num);
  const Feature = (props) => {
    return (
      <Flex >
        <Image
          src="./amulet_single.png"
          width={"30px"}
          height={"30px"}
         marginRight={'10px'}
          alt="Amulet Token"
        />
        <chakra.p
          fontSize={{ base: "lg", md: "xl" }}
          color="white"
          {...props}
        />
      </Flex>
    );
  };

  return (
    <Flex
      w="auto"
      justifyContent="center"
      alignItems="center"
      className="token"
      mb={10}
    >
      <Box shadow="xl" px={8} pb={20} mx="auto">
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              textAlign={{ base: "center", sm: "left" }}
            >
              $MAGEC Token
            </chakra.h2>
            <chakra.p
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Earn passive $MAGEC tokens every second for holding a genesis
              Mystic Mage.
            </chakra.p>
            <div
              textAlign={{ base: "center", sm: "left" }}
              className="token-image"
            >
              <Image
                src="./potion_cluster.png"
                alt="Amulet Token Potion Graphic"
                h={250}
                my={10}
              />
            </div>
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
            boxShadow={"lg"}
            maxW={"640px"}
            direction={{ base: "column-reverse", md: "row" }}
            width={"full"}
            rounded={"xl"}
            p={7}
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
              backgroundImage: backgrounds[finalnum % 4],
            }}
          >
            <chakra.h2
              mb={3}
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              textAlign={{ base: "center", sm: "left" }}
            >
              Utility that exists to benefit the holders 🧙
            </chakra.h2>
            <Feature>
              Spend $MAGEC to purchase whitelist spots on collections launched
              through the MysticLaunchpad
            </Feature>
            <Feature>
              Use $MAGEC to receive discounts off future project launches by the
              Mystic Team!
            </Feature>
            <Feature>
              Spin the Arteria Mystery Box to collect custom Sandbox traits for
              your voxel metaverse avatar using $MAGEC.
            </Feature>
            <Feature>5 Days of Log Retention</Feature>
          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
