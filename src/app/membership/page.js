'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SolidColorButton from "../../components/SolidColorButton";
import Footer from "@/components/footer";
import {buttonStyle} from "@/components/globalStyles.js";
import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import styles from "@/components/globalstyles.module.css";
export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <p> welcom to membership</p>

      <p>
        shoudl have form to fill out if interested in membership and wanting to
        talk to someone
      </p>
      <Center>
        <div id="HorizontalLayout" className={styles.contactFormBase}>
          <Box id="FormHolder" style={{width:"50%"}}>
            <Text align="center" fontSize="3xl">Chatting with the Club!</Text>
            <Text align="center" fontSize="2xl">Get in touch with us below!</Text>
            <Box id="Form">
              
            </Box>
          </Box>
          <Box id="OptionalInfo">

          </Box>
        </div>

      </Center>
      
      <Footer />
    </>
  );
}
