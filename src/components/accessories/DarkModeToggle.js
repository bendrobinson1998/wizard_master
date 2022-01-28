import { Button, useColorMode } from "@chakra-ui/react";
import React from "react"
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

function DarkModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
         {colorMode === 'light' ?  <MoonIcon /> : <SunIcon />}
        </Button>
      </header>
    )
  }

  export default DarkModeToggle;