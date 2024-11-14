"use client";
import React, { useEffect, useState } from "react";
import { Text, Box, Button, Center, Flex, Image, Stack, Card, HStack, CardBody, Heading, Link, VStack, CardHeader } from "@chakra-ui/react";
import { useLayout } from "@/contexts/LayoutContext";
import { colors } from "@/styles/theme.js";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);

export default function Home() {
  const isMobile = useLayout();

  const slidesArray = [
    {
      image: "/images/WebsiteAssets/Campus.png",
      title: "Who Are We",
      text: "The University of Kansas Blockchain Institute is a student-led technology initiative established under the Institute for Information Sciences (I2S). We strive to make Lawrence the technology hub of the Midwest through the interdisciplinary research, education, and development of distributed ledger technologies at KU. ",
    },

    {
      image: "/images/Education.png",
      title: "Education",
      text: "Our education initiative is designed to prepare students for the industries of tomorrow. We strive to create one of the best blockchain talent pools in academia. We host meetups, conferences, speakers, and ad hoc educational sessions to illustrate the future of industry and academia.",
    },

    {
      image: "/images/Research.png",
      title: "Research",
      text: "The University of Kansas Blockchain Institute provides a platform for researchers, both faculty and student-led, to collaborate, publish work, mentor students, and educate curious minds. Contact our team at the Membership page if you would like to learn more about the resources and support our team can provide for blockchain related research projects.",
    },
    {
      image: "/images/DevImage.png",
      title: "Development",
      text: "We are proud to provide extensive development opportunities through our GitHub organization page. All of our projects are open-source, including our DAO and current website. KUBI frequently brings together industry executives, working professionals, and students to have technical workshops. Head over to our Projects page to see some of the things our members are working on.",
    },
  ];

  return (
    <>
        <Box 
          mt={-5} 
          position="relative" 
          overflow="hidden" 
          {...isMobile ? {mx: -5, height: "700px"} : {mx: -20, height: "600px"}} 
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage="url('/images/WebsiteAssets/campus-blur.png')"
        >
          <Box py={10} {...isMobile ? {px: "15%"} : {px: "22%"}}>
            <VStack alignItems="center">
              
              <MotionHeading 
                textAlign="center" 
                fontSize={isMobile ? "3xl" : "5xl"}
                initial={{ opacity: 0, y: 20 }} // Starting state: transparent and 20px down
                animate={{ opacity: 1, y: 0 }} // Ending state: fully visible and in original position
                transition={{ duration: 1 }} // Animation duration
              >
                Driving blockchain <Box as="span" color={colors.accentRed}>education</Box> and <Box as="span" color={colors.accentRed}>adoption</Box> in the midwest.
              </MotionHeading>

              {isMobile ? "" : 
                <Box maxW="2xl" p={4}>
                  <Text textAlign="center" fontSize="2xl">We&apos;re a student-led organization of innovators at the University of Kansas through open source research projects, industry-focused events, and technical workshops.</Text>
                </Box>
              }
            
            <Button mt={10} colorScheme="blackAlpha" size="lg" onClick={() => window.location.href = "/membership"}>Join Today</Button>
            </VStack>
          </Box>
        </Box>

        {/* {isMobile ? "" : <Image mt={-205} alt="Campus Art" src="/images/WebsiteAssets/campus_line_art_transparent.png" />} */}

        <Stack {...isMobile ? {mt: -250} : {mt: -20}} spacing={4}>
          
          <Link href="https://kansasblockchain.org" isExternal>
          <Card color="black" bgGradient="linear(to-r, yellow.200, orange.400)" borderColor="orange.600" borderWidth="6px">
            <CardHeader>
              <Heading mb={-5} size="lg" textAlign="center">What&apos;s New:</Heading>
            </CardHeader>
            <CardBody>
              <Heading fontFamily="Inconsolata, monospace" size="lg" textAlign="left">Introducing: The Kansas Blockchain Fellowship</Heading>
              <Text fontFamily="Inconsolata, monospace" fontSize="2xl" textAlign="left">A seven-week experiential learning intensive, scholarship program, and talent incubator to prepare students in Kansas for careers in blockchain and web3.</Text>
            </CardBody>
          </Card>
          </Link>
  
          {slidesArray.map((slide, index) => (
            <Card 
              key={index} 
              p={0}
            >
              {isMobile ? (
                <VStack spacing={4} align="center">
                  <CardBody>
                    <Heading size="lg" mb={2} textAlign="center">
                      {slide.title}
                    </Heading>
                    <Text textAlign="center" mb={4}>{slide.text}</Text>
                  </CardBody>
                </VStack>
              ) : (
                index % 2 === 0 ? (
                  <HStack>
                    <CardBody>
                      <Flex direction="column" justify="space-between">
                        <Heading size="xl" mb={4} textAlign="center">
                          {slide.title}
                        </Heading>
                        <Text mb={1} fontSize="2xl" textAlign="center">
                          {slide.text}
                        </Text>
                      </Flex>
                    </CardBody>
                    <Image
                      width="400px"
                      maxW="50%"
                      src={slide.image}
                      alt={slide.title}
                    />
                  </HStack>
                ) : (
                  <HStack>
                    <Image
                      width="400px"
                      maxW="50%"
                      src={slide.image}
                      alt={slide.title}
                    />
                    <CardBody>
                      <Flex direction="column" justify="space-between" h="100%">
                        <Heading size="xl" mb={4} textAlign="center">
                          {slide.title}
                        </Heading>
                        <Text mb={4} fontSize="2xl" textAlign="center">
                          {slide.text}
                        </Text>
                      </Flex>
                    </CardBody>
                  </HStack>
                )
              )}
            </Card>
          ))}
        </Stack>
    </>
  );
}