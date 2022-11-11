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

export default function MessageItem(props) {
    return(
        <Box bg='white' borderTopRightRadius='15' borderTopLeftRadius='15' borderBottomRightRadius='15' borderColor='black' borderWidth='3px' py='5px' px='10px' maxW='50%'>
            <Text>{props.user} : {props.message}</Text>
        </Box>
    );
}