'use client'
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import {icon, Bigicon,colors} from "@/components/globalStyles.js"
import { Box, Center, Img , Text, IconButton, Icon, Flex, HStack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsPerson, BsDiscord } from 'react-icons/bs';


function Footer() {
  
  return (
    <>
      <Flex justifyContent="Center" backgroundColor={colors.whiteBg} maxWidth="100%">
        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }}>
          <VStack spacing={5}>
            <Image width="450" height="450" src="/images/WebsiteAssets/KUBI_Logos/KU-Blockchain-logo.svg"/>
            <Text fontSize="3xl" color={colors.whiteBg} mt={-40}><b>KU Blockchain Institute</b></Text>
            <HStack spacing={5}>
              <Link href="https://github.com/KU-Blockchain">
                <IconButton aria-label="Github" icon={<BsGithub />} />
              </Link>
              <Link href="https://www.linkedin.com/company/kublockchain/">
                <IconButton aria-label="Linkedin" icon={<BsLinkedin />} />
              </Link>
              <Link href="https://discord.gg/HKyd3dSDSh">
                <IconButton aria-label="Discord" icon={<BsDiscord />} />
              </Link>
            </HStack>
          </VStack> 
        </motion.div>
      </Flex>
    </>
  );
}

export default Footer;