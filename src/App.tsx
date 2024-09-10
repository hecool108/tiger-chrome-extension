import { Box, Center, VStack } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { useMount } from 'ahooks';
import { useState } from 'react';
import { getARandomImg } from './on-page-content';

function App() {
  const [topImage, setTopImage] = useState<string>()
  useMount(() => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      (results: chrome.tabs.Tab[]) => {
        if(results.length !== 0){
          const [tab] = results
          chrome.scripting.executeScript({
            target:{tabId: tab.id!},
            func:() => document.documentElement.outerHTML 
          },(results:any[])=>{
            const [data] = results;
            if(data){
              const imageSRC = getARandomImg(data.result);
              setTopImage(imageSRC)
            }
          })
        }
      }
    );
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
