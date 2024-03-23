'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Center, Button } from "@chakra-ui/react";
import Footer from "@/components/footer";
import { Text } from "@chakra-ui/react";
import Section from "@/components/section";
export default function EventsPage() {
  
    const [showIframe, setShowIframe] = useState(false);

    const toggleIframeVisibility = () => {
      setShowIframe(!showIframe);
    };

    const sections = [
      {image: "/testImages/CoolLinkedInPic.jpg", text: "This is a test event", heading: "Test Event 1"},
    ];

    return (
      <>
        <Navbar />
        <Text fontSize='6xl' align="center" color="blue.500" fontWeight="bold">Events</Text>
        <hr></hr>
        
        <Text fontSize='3xl' align="center" color="blue.500" fontWeight="bold">Some of our past events</Text>

        <Section image={sections[0].image} text={sections[0].text} heading={sections[0].heading} customStyle={{borderRadius: "30%"}} />

        <Button colorScheme="pink" onClick={toggleIframeVisibility}>
          {showIframe ? "Hide Iframe" : "Show Iframe"}
        </Button>
        <Center>
          {showIframe && (
            <iframe
              src="https://calendar.google.com/calendar/embed?src=ku.blockchain.institute%40gmail.com&ctz=America%2FChicago"
              style={{ border: 0 }}
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
            ></iframe>
          )}
        </Center>
        
        <Footer />
      </>
    );
  }
