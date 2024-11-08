'use client'
import React, { useEffect, useState } from "react";
import { Center, Button, Image, Switch, Accordion, AccordionItem, AccordionButton, AccordionPanel, Fade, Box, Stack, Card, HStack, CardBody, VStack, Flex, Heading  } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import { useLayout } from "@/contexts/LayoutContext";

export default function EventsPage() {
  const [showIframe, setShowIframe] = useState(false);
  const isMobile = useLayout();

  const toggleIframeVisibility = () => {
    setShowIframe(!showIframe);
  };

  const events = [
    {
      image: "/images/eventimages/ethdenver2024.jpg", 
      text: "The premier Ethereum event in Denver, Colorado, bringing together blockchain enthusiasts, developers, and innovators worldwide. Explore workshops, hackathons, and networking opportunities while immersing yourself in the latest in decentralized technology. Join a vibrant community driving the future of blockchain innovation.", 
      heading: "ETHDenver 2024"
    },
    {
      image: "/images/eventimages/hacknight.JPG", 
      text: "This semester's hacknight was a presentation from Tej (VP Engineering) and Micah (Director of Development) about tea.xyz, a platform meant to incentivize and reward open-source contributions, and Internet Computer, a blockchain-based cloud computing platform.", 
      heading: "KUBI HackNight"
    },
    {
      image: "/images/eventimages/blocktalkandbreakfast.jpg", 
      text: "Blocktalk and Breakfast is a bi-semesterly gathering where members of our community come together to delve into the forefront of blockchain technology while sharing a meal. This event warmly welcomes all students and faculty to participate in enlightening discussions and enjoyable dining experiences.", 
      heading: "BlockTalk and Breakfast"
    },
    {
      image: "/images/eventimages/dragonchain.jpg", 
      text: "Visited by Joe Roets, the founder of DragonChain, this event was a unique opportunity to learn about the latest in blockchain technology from an industry expert. Joe shared his insights on the future of blockchain and the potential of DragonChain to revolutionize the industry.", 
      heading: "Industry Highlight: DragonChain"
    },
  ];

  return (
    <>
      {isMobile ? (
        <Box>
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
                    maxH="300px"
                    objectFit='cover'
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
          py={5}
        >
          <WebpageHeading heading={"Events"} />

          <Center>
            <iframe src="https://embed.styledcalendar.com/#MjFRXlTG1mAbqA5XgGxc" title="Styled Calendar" class="styled-calendar-container" style={{width:"75%", height:"654px", border:"none"}} data-cy="calendar-embed-iframe"></iframe>
            <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
          </Center>

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
                        boxSize='lg'
                        maxH="300px"
                        objectFit='cover'
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

