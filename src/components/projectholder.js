'use client'
import { projectCard, roundImage } from "@/components/globalStyles";
import { motion } from "framer-motion";
import { Flex, Img, Text, Button } from "@chakra-ui/react";
import styles from "@/components/globalstyles.module.css";
function ProjectHolder({text, image, link}) {

  if(link==null){
    link="https://www.google.com";
  }
  return(

    <>
      <motion.div className={styles.projectCard} style={projectCard}>
          <img style={roundImage} src={image}></img>
          <div>
            <Text fontSize="xl">{text}</Text>
            <Button colorScheme="linkedin" onClick={() => window.open(link, "_blank")}>View Project</Button>
          </div>
      </motion.div>
    </>
  );
  
}
export default ProjectHolder;