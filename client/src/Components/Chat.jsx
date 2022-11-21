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
import MessageItem from './MessageItem';
import socketClient  from "socket.io-client"

// const SERVER = "http://127.0.0.1:8080";
const SERVER = "https://secret-depths-28847.herokuapp.com/";


export default function Chat(props) {

    var socket = socketClient (SERVER);
    
    const [messages, setMessages] = useState([{msg: '',user: ''}]);
    const [message, setMessage] = useState('');
    const [send, setSend] = useState(false);
    const handleMessage = event => setMessage(event.target.value);
    const handleSend = event => {
      event.preventDefault();
      //alert(`Message: ${message}`);
      socket.emit('chat message', message, props.user);
      setMessage('');
    }

    // socket.on('connection', () => {
    //     console.log(`I'm connected with the back-end`);
    // });

    //useEffect(() => {
        socket.on('new message', (msg, user) => {
            console.log('message: ' + msg);
            console.log('user: ' + user);
            const msg_item = {
                msg: msg,
                user: user
            }
            setMessages([...messages, msg_item])
            console.log(messages);
          });
    //},[])

    

    return(
        <Box bg='black' h='100%' w='100vw'>
            {messages.map(m => (
                <MessageItem 
                    message = {m.msg}
                    user = {m.user}
                    />
            ))}
            <Box position='absolute'  w='100vw' h='60px' bottom='0' bg='whiteAlpha.300' display='flex' justifyContent='center' alignItems='center'>
                <form onSubmit={handleSend}>
                  <Input
                    placeholder='Message'
                    w='80vw'
                    h='40px'
                    mx='10px'
                    color='white'
                    value={message}
                    onChange={handleMessage}
                  />
                  <Button
                    type='submit'
                    h='35px'
                    bg='black'
                    color='#39ff14'
                    mb='5px'
                    _hover={{color: 'white'}}
                    onClick={() => setSend(true)}
                    >
                    Send
                  </Button>
                </form>
            </Box>
        </Box>
    );
}
