"use client";
import react, { useEffect, useState } from "react";
import { Box, Button, Center, Flex, Image, Stack, Card, HStack, CardBody, Heading, Link, VStack } from "@chakra-ui/react";
import ImageSlider from "@/components/ImageSlider";
//import Section from "@/components/section";
import WebpageHeading from "@/components/webpageheading";
import { colors } from "@/components/globalStyles";
import styles from "@/components/globalstyles.module.css";
import { Img, Text } from '@chakra-ui/react';
import Section from "@/components/section";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const slidesSources = [
    {
      url: "/images/WebsiteAssets/perry-alexander.jpg",
      title: "Perry Alexander",
    },
    {
      url: "/images/WebsiteAssets/campus-background.jpg",
      title: "KUBI on Campus",
    },
    {
      url: "/images/WebsiteAssets/discord.jpg",
      title: "Our Discord Server",
    },
  ];
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
        px={20}
        py={5}
      >
        <Box>
          <Flex justifyContent="Center">
            <VStack>
              <Heading justifyContent="Center">KU Blockchain Institute</Heading>
              <Text>University of Kansas</Text>
              {/* <Image src="/images/WebsiteAssets/KUBI_Logos/RGB_PNGs/KUBI-logo-RGB-500.png" /> */}
              <Image src="/images/WebsiteAssets/campus_line_art_transparent.png" />
            </VStack>
          </Flex>
        </Box>

        <br></br>

        <Stack spacing={5}>
          {slidesArray.map((slide, index) => (
            <Card 
              key={index} 
              p={5}
              variant="elevated"
              style={{}}
            >
              {isMobile ? (
                <VStack spacing={4} align="stretch">
                  <Image
                    width="100%"
                    src={slide.image}
                    alt={slide.title}
                  />
                  <CardBody>
                    <Heading size="lg" mb={2} textAlign="center">
                      {slide.title}
                    </Heading>
                    <Text mb={4}>{slide.text}</Text>
                  </CardBody>
                </VStack>
              ) : (
                index % 2 === 0 ? (
                  <HStack>
                    <CardBody>
                      <Flex direction="column" justify="space-between" h="100%">
                        <Box>
                          <Heading size="lg" mb={4} textAlign="center">
                            {slide.title}
                          </Heading>
                        </Box>
                        <Box flex="1">
                          <Text mb={4} textAlign="center">{slide.text}</Text>
                        </Box>
                      </Flex>
                    </CardBody>
                    <Image
                      maxW="50%"
                      src={slide.image}
                      alt={slide.title}
                    />
                  </HStack>
                ) : (
                  <HStack>
                    <Image
                      maxW="50%"
                      src={slide.image}
                      alt={slide.title}
                    />
                    <CardBody>
                      <Flex direction="column" justify="space-between" h="100%">
                        <Box>
                          <Heading size="lg" mb={4} textAlign="center">
                            {slide.title}
                          </Heading>
                        </Box>
                        <Box flex="1">
                          <Text mb={4} textAlign="center">{slide.text}</Text>
                        </Box>
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