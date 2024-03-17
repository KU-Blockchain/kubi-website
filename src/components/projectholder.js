'use client'
import { projectCard } from "@/components/globalStyles";
import { motion } from "framer-motion";
function ProjectHolder({text, image}) {

  return(
    <>
      <motion.div style={projectCard}
      initial={{ opacity: 0, x:500 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}>
        <p>{text}</p>
      </motion.div>
    </>
  );
  
}
export default ProjectHolder;