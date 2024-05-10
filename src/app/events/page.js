'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Center, Button, Switch, Accordion, AccordionItem, AccordionButton, AccordionPanel, Fade  } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { Text } from "@chakra-ui/react";
import Section from "@/components/section";
import WebpageHeading from "@/components/webpageheading";
import { colors } from "@/components/globalStyles";

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
        image: "/testImages/hudpic.jpg", 
        text: "This semester's hacknight was a presentation from Tej (VP Engineering) and Micah (Director of Development) about tea.xyz, a platform meant to incentivize and reward open-source contributions, and Internet Computer, a blockchain-based cloud computing platform.", 
        heading: "KUBI HackNight", 
        customStyle: {}
      },
      {
        image: "/testImages/hudpic.jpg", 
        text: "Blocktalk and Breakfast is a bi-semesterly gathering where members of our community come together to delve into the forefront of blockchain technology while sharing a meal. This event warmly welcomes all students and faculty to participate in enlightening discussions and enjoyable dining experiences.", 
        heading: "BlockTalk and Breakfast", 
        customStyle: {}
      },
      {
        image: "/testImages/IM ACTUALLY AMAZING.png", 
        text: "Visited by Joe Roets, the founder of DragonChain, this event was a unique opportunity to learn about the latest in blockchain technology from an industry expert. Joe shared his insights on the future of blockchain and the potential of DragonChain to revolutionize the industry.", 
        heading: "Industry Highlight: DragonChain", 
        customStyle: {}
      },
    ];



    return (
      <>
        <Navbar />
        <WebpageHeading heading={"Events"} />
        
        <Text fontSize='3xl' align="center" color="blue.500" fontWeight="bold">Some of our past events</Text>

        {sections.map((section, index) => (
          <>
            <Section
              key={index}
              image={section.image}
              text={section.text}
              bgcolor={index % 2 === 0 ? colors.whiteBg : colors.blueBg}
              heading={section.heading}
              fontcolor={index % 2 === 0 ? colors.blueBg : colors.whiteBg}
              headingColor={index % 2 === 0 ? colors.blueBg : colors.whiteBg}
              customStyle={{margin:"2rem", border: "2px solid black", borderRadius: "20px"}}
            />
          </>
        ))}

        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Text fontSize="3xl" align="center" color="blue.600" fontWeight={500}>Follow our Calendar</Text> 
            </AccordionButton>
            <AccordionPanel>
              <Center>
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=ku.blockchain.institute%40gmail.com&ctz=America%2FChicago"
                  style={{ border: 0 }}
                  width="800"
                  height="600"
                  frameborder="0"
                  scrolling="no"
                  ></iframe>
                </Center>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        
        <Footer />
      </>
    );
  }
