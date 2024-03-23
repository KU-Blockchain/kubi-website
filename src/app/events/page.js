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
      {
        image: "/testImages/CoolLinkedInPic.jpg", 
        text: "ETHDenver: The premier Ethereum event in Denver, Colorado, bringing together blockchain enthusiasts, developers, and innovators worldwide. Explore workshops, hackathons, and networking opportunities while immersing yourself in the latest in decentralized technology. Join a vibrant community driving the future of blockchain innovation.", 
        heading: "ETHDenver 2024", 
        customStyle: {}
      },
      {
        image: "/testImages/SexyPic.jpg", 
        text: "This semester's hacknight was a presentation from Tej (VP Engineering) and Micah (Director of Development) about tea.xyz, a platform meant to incentivize and reward open-source contributions, and Internet Computer, a blockchain-based cloud computing platform.", 
        heading: "KUBI HackNight", 
        customStyle: {paddingBottom: 0}
      },
      {
        image: "/testImages/hudpic.jpg", 
        text: "Blocktalk and breakfast is a bi-semesterly event where we discuss the latest in blockchain technology and enjoy a meal together. This event is open to all students and faculty.", 
        heading: "BlockTalk and Breakfast", 
        customStyle: {paddingBottom: 0}
      },
      {
        image: "/testImages/IM ACTUALLY AMAZING.png", 
        text: "This is a test event", 
        heading: "Test Event 4", 
        customStyle: {paddingBottom: 0}
      },
    ];



    return (
      <>
        <Navbar />
        <Text fontSize='6xl' align="center" color="blue.500" fontWeight="bold">Events</Text>
        <hr></hr>
        
        <Text fontSize='3xl' align="center" color="blue.500" fontWeight="bold">Some of our past events</Text>

        {sections.map((section, index) => (
          <>
            <Section
              key={index}
              image={section.image}
              text={section.text}
              heading={section.heading}
              customStyle={section.customStyle}
            />
          </>
        ))}

        <Button colorScheme="pink" onClick={toggleIframeVisibility}>
          {showIframe ? "Hide Iframe" : "Show Iframe"}
        </Button>
        <Center>
        
          {showIframe && (
            <div style={{marginBottom:"2rem"}}>
              <iframe
              src="https://calendar.google.com/calendar/embed?src=ku.blockchain.institute%40gmail.com&ctz=America%2FChicago"
              style={{ border: 0 }}
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
              ></iframe>
            </div>
          )}
        </Center>
        
        <Footer />
      </>
    );
  }
