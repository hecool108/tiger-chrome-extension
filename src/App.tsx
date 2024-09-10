import { Box, Center, VStack } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { useMount } from 'ahooks';
import { useState } from 'react';
import { onChromeTabActive } from './on-page-content';

function App() {
  const [topImage, setTopImage] = useState<string>()
  useMount(async() => {
    setTopImage(await onChromeTabActive())
  });
  return (
    <ChakraProvider>
      <Box w={'100%'} h={'100vh'} color={'white'}>
        <Center w={'100%'} h={'100%'} bg={'#2D2E32'}>
        {topImage}
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
