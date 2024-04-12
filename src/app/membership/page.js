'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Box, Center, Flex, Img, Text, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import styles from "@/components/globalstyles.module.css";
import { useState } from "react";
import WebpageHeading from "@/components/webpageheading";

export default function MembershipPage() {
  const toast=useToast();
  const [valid, setValid] = useState(true);
  const [firstNameValidity, setFirstNameValidity] = useState(false);
  const [lastNameValidity, setLastNameValidity] = useState(false);
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

  function checkValidityFname(event){
    let firstName = event.target.value;
    if(firstName.trim() === ""){
      setFirstNameValidity(false);
    }
    else{
      setFirstNameValidity(true);
    }
  }

  function checkValidityLName(event){
    let lastName = event.target.value;
    if(lastName.trim() === ""){
      setLastNameValidity(false);
    }
    else{
      setLastNameValidity(true);
    }
  }

  function handleForm(){
    if(!valid || !firstNameValidity || !lastNameValidity){
      toast({
        title: 'Invalid Email!',
        description: "Please enter a valid details.",
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
      const packMessage={firstName: firstName, lastName: lastName, emailID: email, message: message};
      
      const data = getEmailContext()
      console.log(data);
      //clearForm();
    }
  }

  async function sendEmail(packMessage) {
    console.log('Sending email:', packMessage);
    try {
      const res = await fetch('http://localhost:3000/api/emailContext', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(packMessage),
      });

      if (res.ok) {
        console.log('Email sent successfully');
      } else {
        const errorData = await res.json(); // Or res.text() if response is not JSON
        console.error('Failed to send the email:', res.status, errorData);
      }
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
    }
  }

  async function getEmailContext() {
    try {
      const response = await fetch('/api/emailContext', {
        method: 'GET', // Specify the method, GET in this case
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json(); // Parse the JSON data from the response
        console.log('Email context received:', data);
        return data; // Return the data for further processing
      } else {
        // Handle HTTP errors
        console.error('Failed to retrieve email context', response.status);
        return null; // Or throw an error or return an error object
      }
    } catch (error) {
      // Handle errors that occurred during the fetch call
      console.error('An error occurred while fetching the email context:', error);
      return null; // Or throw an error or return an error object
    }
  }

  function clearForm(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
  return (
    <>
      <Navbar />
      <WebpageHeading heading="Chatting with KUBI!" />
      <Center>
        <div id="HorizontalLayout" className={styles.contactFormBase}>
          <Box id="FormHolder" style={{width:"50%", flex:1}}>
            <Text align="center" fontSize="2xl">Get in touch with us below!</Text><br></br>
            <Box id="Form" style={{display:"flex", flexDirection:"column", rowGap:"2rem", paddingLeft:"3rem", paddingRight:"3rem", paddingBottom: "5%"}}>
              <Box name="InputDiv" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

                <Box style={{display:"flex", flexDirection:"column", rowGap:"10px"}}>
                  First Name:
                  <Input id="firstName" variant='filled' placeholder='First Name' onChange={checkValidityFname}/>
                </Box>

                <Box style={{display:"flex", flexDirection:"column", rowGap:"10px"}}>
                  Last Name:
                  <Input id="lastName" variant='filled' placeholder='Last Name' onChange={checkValidityLName}/>
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
              <Button onClick={handleForm}>Submit</Button>
            </Box>
            
            
          </Box>
          <div id="OptionalInfo" style={{flex:1}}>
              <img src="/testImages/Val.png" width="100%" style={{paddingTop:"7%"}}></img>
          </div>
        </div>

      </Center>
      
      <Footer />
    </>
  );
}
