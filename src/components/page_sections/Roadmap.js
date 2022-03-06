import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
  Button,
} from "@chakra-ui/react";

export default function Roadmap() {
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  const divArray = document.querySelectorAll("div").length;
  const num = Math.random() * 10;
  const finalnum = Math.round(num);
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            rounded="md"
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="xl"
            fontWeight="bold"
            lineHeight="6"
            bgClip="text"
            bgGradient="linear(to-r, purple.600,blue.600)"
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="white">
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex w="auto" justifyContent="center" alignItems="center">
      <Box px={5} mb={20} py={12} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="semibold"
              textTransform="uppercase"
              color={useColorModeValue("gray.900")}
            >
              Mystic Mages Roadmap
            </chakra.p>
            <chakra.p
              mt={10}
              maxW="2xl"
              fontSize={{ base: "lg", md: "xl" }}
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.900")}
            >
              Below is our roadmap, for any questions please visit our Discord
              and contact one of the team!
            </chakra.p>
            <a href="https://discord.gg/zZ4v72xm6N">
              <Button
                as="a"
                className="button-primary"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "full", sm: "auto" }}
                size="lg"
                cursor="pointer"
                mt={"20px"}
              >
                Join Our Discord
                <Icon
                  boxSize={4}
                  ml={1}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </Icon>
              </Button>
            </a>{" "}
          </Box>

          <Box
            w="auto"
            justifyContent="center"
            alignItems="center"
            marginTop="80px"
            alignSelf={"center"}
            boxShadow={"lg"}
            direction={{ base: "column-reverse", md: "row" }}
            rounded={"xl"}
            p={10}
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
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Phase 1"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                This is the start of the Mystic Mages NFT journey. We will be
                releasing 3900 Genesis Mages into Arteria capable of earning
                daily $MAGEC tokens. 10 of these Mage's will be elite and will
                yield higher daily rewards and also come with animated artwork!
              </Feature>

              <Feature
                title="Phase 2"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                The Mages have finally completed their journey to the promised
                land, Arteria. Phase 2 of the Mystic roadmap involves rollout of
                the MysticLaunchpad, affiliate programme and $MAGEC token,
                allowing Genesis mage holders to collect 0.5ETH for every
                succesful launchpad referral! Holders will now be able to
                utilise their Mages in the metaverse of Arteria and enjoy all
                the benefits of the $MAGEC token.
              </Feature>

              <Feature
                title="Phase 3"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Arteria is growing and the Mages need to repopulate and expand.
                Hold 3 mages to be eligible for a 'Potion' airdrop. Burning one
                'Potion' will breed a Mystic Witch. Sneak peaks coming soon.
              </Feature>

              <Feature
                title="The Future Onwards..."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                The Mages have now repopulated in Arteria. The metaverse is
                booming and daily games and competitions are being held for all
                mage holders. The Mystic Team will continue to push the
                marketing efforts and advertising the MysticLaunchpad to give
                constant exposure to new projects and whitelist spots for all
                genesis mage holders.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
