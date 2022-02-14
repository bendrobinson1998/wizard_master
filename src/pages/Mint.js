import { Button, VStack, Box, Heading, Select, Text } from "@chakra-ui/react";
import React from "react";

export default function Mint() {
  return (
    <>
      <VStack
        spacing={10}
        align="center"
        className="mint-page"
        height={"100vh"}
      >
        <Box h="40px" mt={50} px={5} mb={5} textAlign="center">
          <Heading>Are you ready to enter Arteria?</Heading>

          <Text>
            To begin, connect your wallet by clicking the button below. Ensure
            you have unlocked your MetaMask wallet before starting. Once your
            wallet is connected, select the quantity you would like to mint and
            then press mint! You will be met with a series of prompts in your
            MetaMask wallet, please ensure you complete the transaction to
            receive your NFT.
          </Text>
        </Box>
        <Box h="40px">
          <Select
            borderColor="purple"
            className="mint-selection"
            placeholder="Select Quantity"
          >
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option4">4</option>
            <option value="option5">5</option>
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
