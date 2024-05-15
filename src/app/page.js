"use client";
import react, { useEffect, useState } from "react";
import { Box, Button, Center, Flex, Image, Stack, Card, HStack, CardBody, Heading, Link, VStack } from "@chakra-ui/react";
import { colors } from "@/components/globalStyles";
import styles from "@/components/globalstyles.module.css";
import { Img, Text } from '@chakra-ui/react';
import Section from "@/components/section";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

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
      text: "The University of Kansas Digital Finance Conference was held on April 5th, 2019. Speakers from Ripple labs, C2FO, Liquifi, and others, shared insight from the Financial Technology industry. The KU Blockchain Supply Chain Symposium was hosted at the Oread Hotel on October 26th, 2018. We hosted over 100 attendees including industry executives, working professionals, students and academics",
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
      <Box
        m="auto"
      >
        <Box
          py={4}
        >
          <VStack alignItems="center">
            <Heading>KU Blockchain Institute</Heading>
            <Box maxW="xl" p={4}>
              <Text textAlign="center" fontSize="2xl">The University of Kansas official student organization for everything blockchain, cryptoeconomics, and cryptocurrency.</Text>
            </Box>
            <Image py={0} alt="Campus Art" src="/images/WebsiteAssets/campus_line_art_transparent.png" />
          </VStack>
        </Box>

        <Stack m={4} spacing={4}>
          {slidesArray.map((slide, index) => (
            <Card 
              key={index} 
              p={0}
              style={{borderRadius: "0px", backgroundColor: colors.headerBackground, color: "white"}}
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

      </Box>
    </>
  );
}