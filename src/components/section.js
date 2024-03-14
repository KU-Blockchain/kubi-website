'use client';
import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";

function Section({image, text, bgcolor,heading, fontcolor, headingColor}){
  let fColor=fontcolor
  return(
      <>
      <Flex bg={bgcolor} paddingTop="5%" paddingBottom="5%">
        <Box w="50%" p="4rem">
          <Center color={headingColor}><h1>{heading}</h1></Center>
        
          <Text color={fColor} align="center" fontFamily="sans-sherif" fontWeight={500}>
            {text}
          </Text> 
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