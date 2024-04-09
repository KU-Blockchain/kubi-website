'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SolidColorButton from "../../components/SolidColorButton";
import Footer from "@/components/footer";
import {buttonStyle} from "@/components/globalStyles.js";
import { Box, Center, Flex, Img, Text, Input, Textarea } from "@chakra-ui/react";
import styles from "@/components/globalstyles.module.css";
import { useState } from "react";

export default function MembershipPage() {

  const [valid, setValid] = useState(true);
  function emailValidity(event){
    let email = event.target.value;
    if(email.includes('@') && email.includes('.')){
      setValid(true);
    }
    else if(email === ""){
      setValid(true);
    }
    else{
      setValid(false);
    }

  }
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
            <Text align="center" fontSize="2xl">Get in touch with us below!</Text><br></br>
            <Box id="Form" style={{display:"flex", flexDirection:"column", rowGap:"2rem", paddingLeft:"3rem", paddingRight:"3rem"}}>
              <Box name="InputDiv" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

                <Box style={{display:"flex", flexDirection:"column", rowGap:"10px"}}>
                  First Name:
                  <Input id="firstName" variant='filled' placeholder='First Name'/>
                </Box>

                <Box style={{display:"flex", flexDirection:"column", rowGap:"10px"}}>
                  Last Name:
                  <Input id="lastName" variant='filled' placeholder='Last Name'/>
                </Box>
              </Box>

              <Box style={{display:"flex", flexDirection:"column", rowGap:"10px"}}>
                  Email:
                  <Input id="email" variant='filled' placeholder='yourname@example.com' onChange={emailValidity} isInvalid={!valid}/>
              </Box>

              <Box style={{display:"flex", flexDirection:"column", rowGap:"10px"}}>
                  Message:
                  <Textarea
                    placeholder='Enter your message here...'
                    size='md'
                    variant='filled'
                  />
              </Box>
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
