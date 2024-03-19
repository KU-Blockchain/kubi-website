'use client'
import { projectCard } from "@/components/globalStyles";
import { motion } from "framer-motion";
import { Flex, Img, Text, Button } from "@chakra-ui/react";
function ProjectHolder({text, image}) {

  return(
    <>
      <motion.div style={projectCard}
      initial={{ opacity: 0, x:500 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}>
          <Img src={image} width="45%"></Img>
          <div>
            <Text fonSize="6xl">{text}</Text>
            <Button>View Project</Button>
          </div>
          
        
      </motion.div>
    </>
  );
  
}
export default ProjectHolder;