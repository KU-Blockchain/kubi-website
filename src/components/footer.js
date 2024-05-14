'use client'
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import {icon, Bigicon,colors} from "@/components/globalStyles.js"
import { Box, Center, Img , Text, IconButton, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsPerson, BsDiscord } from 'react-icons/bs';


function Footer() {
  
  return(
      <>
      <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }} >
        <Center display="flex" flexDirection="column" bg={colors.blueBg}>
          <Image width="100" height="100" style={Bigicon} src="/images/WebsiteAssets/KUBI Logos/RGB PNG's (for web use)/KUBC-logo-RGB-500.png"/>
          <Text fontSize="3xl" color={colors.whiteBg}><b>KU Blockchain Institute</b></Text>
        <Center display="flex" flexDirection="row">
          <div style={icon}>
              <Link href="https://github.com/KU-Blockchain">
                <IconButton aria-label="Github" icon={<BsGithub />} />
              </Link>
          </div>
          <div style={icon}>
              <Link href="https://www.linkedin.com/company/kublockchain/">
                <IconButton aria-label="Linkedin" icon={<BsLinkedin />} />
              </Link>
          </div>
          <div style={icon}>
              <Link href="https://discord.gg/HKyd3dSDSh">
                <IconButton aria-label="Discord" icon={<BsDiscord />} />
              </Link>
          </div>
        </Center>
        </Center> 
      </motion.div>
      
      </>
  );
}

export default Footer;