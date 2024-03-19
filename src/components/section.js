'use client';
import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Section({image, text, bgcolor,heading, fontcolor, headingColor}){
  let fColor=fontcolor
  return(
      <>
      <motion.div 
      initial={{ opacity: 0, x:200 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }} 
      style={{display:"flex", flexDirection:"row", backgroundColor:`${bgcolor}`, paddingTop:"5%", paddingBottom:"5%"}}>
        <Box w="50%" p="4rem">
          <Center color={headingColor}><h1>{heading}</h1></Center>
          <p>
          <Text color={fColor} align="center" fontFamily="sans-sherif" fontWeight={500}>
            {text}
          </Text> 
          </p>
          
        </Box>
        <Box>
          <Center>
            <Img src={image} width="50%" p={5}/>
          </Center>
        </Box>
      </motion.div>
        
      </>
  );
}
export default Section;