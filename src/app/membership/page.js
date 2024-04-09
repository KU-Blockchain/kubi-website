'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SolidColorButton from "../../components/SolidColorButton";
import Footer from "@/components/footer";
import {buttonStyle} from "@/components/globalStyles.js";
import { Box, Center, Flex, Img, Text, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import styles from "@/components/globalstyles.module.css";
import { useState } from "react";
import WebpageHeading from "@/components/webpageheading";


export default function MembershipPage() {
  const toast=useToast();
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


  function handleForm(){
    if(!valid){
      toast({
        title: 'Invalid Email!',
        description: "Please enter a valid email address.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    else{
      toast({
        title: 'Form Submitted!',
        description: "Thank you for reaching out to us! We will get back to you soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    
      let firstName = document.getElementById("firstName").value;
      let lastName = document.getElementById("lastName").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      console.log(firstName, lastName, email, message);
    }
  }
  return (
    <>
      <Navbar />
      <WebpageHeading heading="Chatting with KUBI!" />
      <Center>
        <div id="HorizontalLayout" className={styles.contactFormBase}>
          <Box id="FormHolder" style={{width:"50%"}}>
            <Text align="center" fontSize="2xl">Get in touch with us below!</Text><br></br>
            <Box id="Form" style={{display:"flex", flexDirection:"column", rowGap:"2rem", paddingLeft:"3rem", paddingRight:"3rem", paddingBottom: "3rem"}}>
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
                    id="message"
              />
              </Box>
              
            </Box>
            <Center>
              <Button onClick={handleForm}>Submit</Button>
            </Center>
            
          </Box>
          <Box id="OptionalInfo">

          </Box>
        </div>

      </Center>
      
      <Footer />
    </>
  );
}
