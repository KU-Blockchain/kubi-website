'use client';
import { Box, Center, Flex, Img } from "@chakra-ui/react";

function Section({image, text, bgcolor,heading, fontcolor, headingColor}){
  return(
      <>
      <Flex bg={bgcolor}>
        <Box w="50%" paddingLeft="15%">
          <Center color={headingColor}><h1>{heading}</h1></Center>
          <div color={fontcolor}>
          {text}
          </div>
          
        </Box>
        <Box>
          <Center>
            <Img src={image} width="50%" p={5}/>
          </Center>
        </Box>
      </Flex>
        
      </>
  );
}
export default Section;