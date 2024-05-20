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
      <Flex justifyContent="Center" maxWidth="100%">
        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }}>
          <VStack spacing={5}>
            <Image width="450" height="450" alt="KUBI Logo" src="/images/WebsiteAssets/KUBI_Logos/KU-Blockchain-logo.svg"/>
            <Text fontSize="3xl" mt={-40}><b>KU Blockchain Institute</b></Text>
            <HStack spacing={5}>
              <Link href="https://github.com/KU-Blockchain">
                <IconButton variant='outline' colorScheme='#23406D' aria-label="Github" icon={<BsGithub style={{ color: "#23406D" }} />} />
              </Link>
              <Link href="https://www.linkedin.com/company/kublockchain/">
                <IconButton variant='outline' colorScheme='#23406D' aria-label="Linkedin" icon={<BsLinkedin />} />
              </Link>
              <Link href="https://discord.gg/HKyd3dSDSh">
                <IconButton variant='outline' colorScheme='#23406D' aria-label="Discord" icon={<BsDiscord />} />
              </Link>
            </HStack>
            <Text align="center" px={100}>Blockchain can be a confusing topic. Dont know where to start? KUBIs got you! You will find plenty of resources here to expand your blockchain knowledge between Block Talks to explain the basics of blockchain, weekly newsletters to highlight important blockchain topics, and articles written by our team to express the use cases of blockchain.</Text>
            <br></br>
          </VStack> 
        </motion.div>
      </Flex>
    </>
  );
}

export default Footer;