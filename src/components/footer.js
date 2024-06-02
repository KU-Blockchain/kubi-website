'use client'
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import {icon, Bigicon,colors} from "@/components/globalStyles.js"
import { Box, Center, Img , Text, IconButton, Icon, Flex, HStack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsPerson, BsDiscord, BsFillEnvelopeFill } from 'react-icons/bs';

function Footer() {
  
  return (
    <>
      <Flex py={20} justifyContent="Center" maxWidth="100%">
        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }}>
          <VStack spacing={5}>
            <Image width="230" height="230" alt="KUBI Logo" src="/images/WebsiteAssets/KUBI_Logos/KU-Blockchain-logo.svg"/>
            {/* <Text fontSize="3xl" mt={-40}><b>KU Blockchain Institute</b></Text> */}
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
              <Link href="mailto:blockchalk@kublockchain.com">
                <IconButton variant='outline' colorScheme='#23406D' aria-label="Discord" icon={<BsFillEnvelopeFill />} />
              </Link>
            </HStack>
            <Text align="center">Made with 🔥 by the University of Kansas Blockchain Institute</Text>
          </VStack> 
        </motion.div>
      </Flex>
    </>
  );
}

export default Footer;