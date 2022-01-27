import { Button, VStack, Box, Heading, Select, Text } from "@chakra-ui/react";
import React from "react";

export default function Mint() {
  return (
    <>
      <VStack spacing={10} align="center" mt={10}>
        <Box h="40px">
          <Heading>Hello Mint Page</Heading>
        </Box>
        <Box h="40px">
          <Select
            bg="black"
            borderColor="purple"
            className="mint-selection"
            placeholder="Select Quantity"
          >
            <option className="mint-option" value="option1">
              1
            </option>
            <option className="mint-option" value="option2">
              2
            </option>
            <option className="mint-option" value="option3">
              3
            </option>
            <option className="mint-option" value="option4">
              4
            </option>
            <option className="mint-option" value="option5">
              5
            </option>
          </Select>
        </Box>
        <Box h="40px">
          <Button className="button-primary">Connect Wallet</Button>
          <Button className="button-primary" ml={5}>
            Mint*
          </Button>
        </Box>
        <Text mx={10} className="terms">
          *Terms and Conditions: You Own Your NFT: By connecting your Ethereum
          wallet and minting a NFT with our smart contract, you gain full and
          complete ownership of your NFT. Limitations of Liability for Gas,
          Failed Transactions, and other Bugs: You agree to not hold the project
          owners accountable for any losses you may incur as a consequence of
          minting your NFT. These potential losses include any gas fees for
          failed transactions, and any excessive gas fees during the minting
          process. NFTs Are Not Intended as Investments: NFTs serve exclusively
          as Non-Fungible Tokens for you to collect. They are not intended for
          any investment purposes. We make absolutely no promise or guarantee
          that these NFTs will hold any particular value once minted on our
          website. You are responsible for any tax liability which may arise
          from minting or reselling your NFT(s). Group Litigation Order Waiver:
          You agree to waive any group litigation status, and any legal dispute
          around the NFTs project. All NFT purchases are non-refundable.
          Children: You agree that you are over the age of 18, or the legal age
          within your jurisdiction. Arbitration: In the event that a legal
          dispute arises from anything related to the NFTs project, you agree to
          bring the case to binding arbitration according to appropriate legal
          guidelines. Jurisdiction and Choice of Law: You agree that for
          purposes of any legal dispute, you will be subject to the jurisdiction
          of the United Kingdom and that any legal proceeding will be brought in
          the United Kingdom.
        </Text>
      </VStack>
    </>
  );
}
