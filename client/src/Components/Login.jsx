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
  Input,
  Button,
  Badge,
  HStack,
} from '@chakra-ui/react';

export default function Login({onLogin, onUser}) {

    const [user, setUser] = useState('');
    const handleChange = event => setUser(event.target.value);
    const handleSubmit = event => {
      event.preventDefault();
      //alert(`Username: ${user}`);
      onLogin("True")
      onUser(`${user}`)
    };


    return( 
        <Box display='flex' justifyContent='center' mt='30vh'>
            <Box p='10px' bg='teal' borderRadius='5px'>
                <Text fontSize='30px' fontWeight='bold' fontFamily='sans-serif'>
                  Log into kekw
                </Text>
                <Box display='flex' justifyContent='center'>
                <form onSubmit={handleSubmit}>
                  <Input
                    placeholder='Username'
                    _placeholder={{ color: 'whiteAlpha.500' }}
                    w='300px'
                    h='30px'
                    onChange={handleChange}
                    borderRadius='0'
                    isRequired
                  />
                  <Button
                    type='submit'
                    mx='5px'
                    h='30px'
                    bg='white'
                    mb='5px'
                    borderRadius='0'
                    //onClick={() => setOnline(true)}
                  >
                    Log In
                  </Button>
                </form>
                </Box>
            </Box>
        </Box>
    );
}