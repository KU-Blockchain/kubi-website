'use client';
import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "./globalStyles";
import styles from "@/components/globalstyles.module.css";
function Section({
  image,
  text,
  bgcolor = colors.whiteBg,
  heading,
  fontcolor = "colors.blueBg",
  headingColor = colors.blueBg,
  customStyle = {}
}) {
  
  const sectionStyle = { display: "flex", flexDirection: "row", backgroundColor: `${bgcolor}`, paddingTop: "5%", paddingBottom: "5%", borderRadius: "10px", maxHeight:"500px", overflow:"hidden",...customStyle };

  return(
      <>
      
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} 
      style={sectionStyle}
      className={styles.sectionShadow}>
        <Box w="50%" p="4rem">
          <Center color={headingColor}><Text fontSize="3xl">{heading}</Text></Center>
          <div>
          <Text color={fontcolor} align="center" fontFamily="Times New Roman" fontWeight={500}>
            {text}
          </Text> 
          </div>
          
        </Box>
        <Box>
          <Center >
            <Img src={image} width="30rem" p={5}/>
          </Center>
        </Box>
      </motion.div>
        
      </>
  );
}
export default Section;