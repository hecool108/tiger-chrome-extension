import { Box, Center, VStack } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider>
      <Box w={'100%'} h={'100vh'} color={'white'} >
        <Center w={'100%'} h={'100%'} bg={'#2D2E32'}>何それ？！| WTF</Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
