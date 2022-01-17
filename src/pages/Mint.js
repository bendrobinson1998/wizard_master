import { Button,  VStack, StackDivider, Box, Heading, Select } from '@chakra-ui/react'
import React from 'react'

export default function Mint() {
    return (
        <>
        <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='center'
>
       
<Box h='40px'>
        <Heading>Hello Mint Page</Heading></Box>
        <Box h='40px'>
        <Select  bg="black" borderColor='purple' className='mint-selection' placeholder='Select Quantity'>
  <option className='mint-option' value='option1'>1</option>
  <option className='mint-option' value='option2'>2</option>
  <option className='mint-option' value='option3'>3</option>
  <option className='mint-option' value='option4'>4</option>
  <option className='mint-option' value='option5'>5</option>
</Select></Box><Box h='40px'>
        <Button className='button-primary'>Connect Wallet</Button>
        <Button className='button-primary'>Mint</Button>
        </Box>
        </VStack>
        </>
    )
}

<VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box h='40px' bg='yellow.200'>
    1
  </Box>
  <Box h='40px' bg='tomato'>
    2
  </Box>
  <Box h='40px' bg='pink.100'>
    3
  </Box>
</VStack>