"use client";
import React, { useEffect, useState } from "react";
import { Text, Box, Button, Center, Flex, Image, Stack, Card, HStack, CardBody, Heading, Link, VStack } from "@chakra-ui/react";
import { useLayout } from "@/contexts/LayoutContext";
import { colors } from "@/styles/theme.js";

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
      text: "The University of Kansas Digital Finance Conference was held on April 5th, 2019. Speakers from Ripple labs, C2FO, Liquifi, and others, shared insight from the Financial Technology industry. The KU Blockchain Supply Chain Symposium was hosted at the Oread Hotel on October 26th, 2018. We hosted over 100 attendees including industry executives, working professionals, students and academics.",
    },
  ];

  return (
    <>
        <Box>
          <VStack alignItems="center">
            
            <Heading textAlign="center" fontSize={isMobile ? "3xl" : "5xl"}>Driving blockchain <Box as="span" color={colors.accentYellow}>education</Box> and <Box as="span" color={colors.accentYellow}>adoption</Box> in the Midwest.</Heading>

            <Box maxW="2xl" p={4}>
              <Text textAlign="center" fontSize="2xl">We&apos;re a student-led organization promoting blockchain education and adoption at the University of Kansas.</Text>
            </Box>
            <HStack>
              <Button scolorScheme="blackAlpha" size="lg" onClick={() => window.location.href = "/membership"}>➤ Join Us</Button>
            </HStack>
            <Image py={4} alt="Campus Art" src="/images/WebsiteAssets/campus_line_art_transparent.png" />
          </VStack>
        </Box>

        <Stack my={4} spacing={4}>
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