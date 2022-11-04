import { React, useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Footer from './Components/Footer';
import Login from './Components/Login';

function App() {

  const [online, setOnline] = useState(false);
  const [user, setUser] = useState("");


  return (
    <ChakraProvider theme={theme}>
      <Box bg='black' h='100vh'>
        <Text bg='#26abff' display='flex' pl='5px' fontSize='40px' fontWeight='bold' fontFamily='sans-serif'>
              kekw
        </Text>
        {!online && (
        <Login onUser={setUser} onLogin={setOnline}/>
        )}
        {online && (
          <Box>
          <Box bg='white' display='flex' justifyContent='space-between' alignContent='center' p='3px'>
            <Box display='flex'>
            <Text fontFamily='sans-serif' fontWeight='bold' fontSize='20px'>{user}</Text>
            <Text bg='black' borderRadius='5px' ml='5px' p='4px' fontSize='13px' fontWeight='bold' fontFamily='sans-serif' color='#39ff14'>online</Text>
            </Box>
            <Button
            type='submit'
            h='30px'
            bg='black'
            color='#39ff14'
            _hover={{ bg: 'black', color: 'white' }}
            onClick={() => setOnline(false)}
            >
            Log Out
            </Button>
          </Box>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
