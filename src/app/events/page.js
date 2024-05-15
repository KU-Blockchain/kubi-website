'use client'
import React, { useEffect, useState } from "react";
import { Center, Button, Image, Switch, Accordion, AccordionItem, AccordionButton, AccordionPanel, Fade, Box, Stack, Card, HStack, CardBody, VStack, Flex, Heading  } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Section from "@/components/section";
import WebpageHeading from "@/components/webpageheading";
import { colors } from "@/components/globalStyles";

export default function EventsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframeVisibility = () => {
    setShowIframe(!showIframe);
  };

  const events = [
    {
      image: "/testImages/CoolLinkedInPic.jpg", 
      text: "ETHDenver: The premier Ethereum event in Denver, Colorado, bringing together blockchain enthusiasts, developers, and innovators worldwide. Explore workshops, hackathons, and networking opportunities while immersing yourself in the latest in decentralized technology. Join a vibrant community driving the future of blockchain innovation.", 
      heading: "ETHDenver 2024"
    },
    {
      image: "/testImages/hudpic.jpg", 
      text: "This semester's hacknight was a presentation from Tej (VP Engineering) and Micah (Director of Development) about tea.xyz, a platform meant to incentivize and reward open-source contributions, and Internet Computer, a blockchain-based cloud computing platform.", 
      heading: "KUBI HackNight"
    },
    {
      image: "/testImages/hudpic.jpg", 
      text: "Blocktalk and Breakfast is a bi-semesterly gathering where members of our community come together to delve into the forefront of blockchain technology while sharing a meal. This event warmly welcomes all students and faculty to participate in enlightening discussions and enjoyable dining experiences.", 
      heading: "BlockTalk and Breakfast"
    },
    {
      image: "/testImages/hudpic.jpg", 
      text: "Visited by Joe Roets, the founder of DragonChain, this event was a unique opportunity to learn about the latest in blockchain technology from an industry expert. Joe shared his insights on the future of blockchain and the potential of DragonChain to revolutionize the industry.", 
      heading: "Industry Highlight: DragonChain"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);



  return (
    <>
      {isMobile ? (
        <Box
          m="auto"
          px={2}
          py={5}
        >
          <WebpageHeading heading={"Events"} />

          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  <Text fontSize="3xl" fontWeight={500}>Follow our Calendar</Text> 
                </Box>
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
          <br></br>

          <Text fontSize='3xl' align="center" fontWeight="bold">Some of our past events</Text>

          <Stack spacing={5}>
            {events.map((event, index) => (
              <Card 
                key={index} 
                borderRadius="20px" 
                p={5}
              >
                <VStack spacing={4} align="stretch">
                  <Image
                    width="100%"
                    src={event.image}
                    alt={event.heading}
                  />
                  <CardBody>
                    <Heading size="lg" mb={2}>
                      {event.heading}
                    </Heading>
                    <Text mb={4}>{event.text}</Text>
                  </CardBody>
                </VStack>
              </Card>
            ))}
          </Stack>

        </Box>
      ) : (
        <Box
          m="auto"
          px={20}
          py={5}
        >
          <WebpageHeading heading={"Events"} />

          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  <Text fontSize="3xl" fontWeight={500}>-+-+-+-+-+-+-+-+-  Follow our Calendar  -+-+-+-+-+-+-+-+-</Text> 
                </Box>
              </AccordionButton>
              <AccordionPanel>
                <Center>
                  <iframe
                    src="https://calendar.google.com/calendar/embed?src=ku.blockchain.institute%40gmail.com&ctz=America%2FChicago"
                    style={{ border: 0 }}
                    width="800"
                    height="600"
                    frameborder="0"
                    ></iframe>
                  </Center>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <br></br>

          <Text fontSize='3xl' align="center" fontWeight="bold">Some of our past events</Text>
          
            <Stack spacing={5}>
              {events.map((event, index) => (
                <Card 
                  key={index} 
                  borderRadius="20px" 
                  p={5}
                >
                    <HStack>
                      <Image
                        maxW="50%"
                        src={event.image}
                        alt={event.heading}
                      />
                      <CardBody>
                        <Flex direction="column" justify="space-between" h="100%">
                          <Box>
                            <Heading size="lg" mb={4}>
                              {event.heading}
                            </Heading>
                          </Box>
                          <Box flex="1">
                            <Text mb={4}>{event.text}</Text>
                          </Box>
                        </Flex>
                      </CardBody>
                    </HStack>
                </Card>
              ))}
            </Stack>
        </Box>
      )}
    </>
  );
}

