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

const Metaverse = (props) => {
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  const num = Math.random() * 10;
  const finalnum = Math.round(num);
  const { index } = props;
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
          fontSize="md"
          color={useColorModeValue("brand.600", "gray.400")}
        >
          Embark on a Mystic Mage adventure and join us in our exclusive
          holders-only metaverse land - Arteria! Your Mystic Mage NFT is your
          entry pass. We will be holding exciting whitelist competitions for
          projects that join through our launchpad here, alongisde exciting
          $AMULET mini games and much more...
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
      <Box
        className="wiz"
        m="auto"
        alignSelf={"center"}
        direction={{ base: "column-reverse", md: "row" }}
        rounded={"xl"}
        p={2}
        justifyContent={"space-between"}
        position={"relative"}
        _before={{
          content: '""',
          position: "absolute",
          zIndex: "-1",
          height: "500px",
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
        <WizScene />
      </Box>
    </SimpleGrid>
  );
};

export default Metaverse;
