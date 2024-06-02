"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Card, CardBody, CardFooter, Button, Link, Image, Heading, HStack, Flex, VStack } from "@chakra-ui/react";
import WebpageHeading from "@/components/webpageheading";

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      title: "The DAO",
      description: "KUBI DAO (Decentralized Autonomous Organization) offers a unique model for collaboration, incentives, and privileges. Our hybrid tokenomics system combines KUBIX and KUBI tokens to create a platform that encourages active participation and fair distribution of rewards. This is all enabled by blockchain technology, built on the Polygon Mumbai testnet. Welcome to the KU Blockchain DAO!",
      preview_image: "/images/projectImages/DAO.png",
      link: "https://kublockchaindao.on.fleek.co/",
    },
    {
      title: "The Kansas Blockchain Fellowship",
      description: "A seven-week experiential learning intensive, scholarship program, and talent incubator to prepare students in Kansas for careers in blockchain and web3. The program is designed to give exceptional students in the Midwest deep knowledge and experience around blockchain, digital assets, and web3 to prepare them for careers in the industry.",
      preview_image: "/images/projectImages/kbf.jpeg",
      link: "https://www.kansasblockchain.org/",
    },
    {
      title: "The Spencer Collaboration",
      description: "This project is executed in collaboration with the Spencer Museum of Art, investigating the social implications of attacks on democracy and the parallels between consensus in computing and privilege in society. The initial goal of this project was to model a 51% attack on an Ethereum Classic testnet to create media for the collaborating artists to manipulate for a public installation to take place in 2023. The focus later developed towards intervening in EIP forums as an examination of social structures and Ethereum.",
      preview_image: "/images/projectImages/spencer.png",
      link: "#spencer-collaboration",
    },
    {
      title: "NFT Gallery Tutorial",
      description: "to be implemented",
      preview_image: "/images/projectImages/NFTGallery.png",
      link: "#nft-gallery",
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
        <WebpageHeading heading={"Our Projects"} />

        <Stack spacing={5}>
          {projects.map((project, index) => (
            <Card 
              key={index} 
              borderRadius="20px" 
              p={5}
            >
              <VStack spacing={4} align="stretch">
                <Image
                  width="100%"
                  src={project.preview_image}
                  alt={project.title}
                />
                <CardBody>
                  <Heading size="lg" mb={2}>
                    {project.title}
                  </Heading>
                  <Text mb={4}>{project.description}</Text>
                  <Button colorScheme="blue" size="md">
                    <Link href={project.link}>Learn more</Link>
                  </Button>
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
          <WebpageHeading heading={"Our Projects"} />
          
            <Stack spacing={5}>
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  borderRadius="20px" 
                  p={5}
                >
                    <HStack>
                      <Image
                        maxW="50%"
                        src={project.preview_image}
                        alt={project.title}
                      />
                      <CardBody>
                        <Flex direction="column" justify="space-between" h="100%">
                          <Box>
                            <Heading size="lg" mb={4}>
                              {project.title}
                            </Heading>
                          </Box>
                          <Box flex="1">
                            <Text mb={4}>{project.description}</Text>
                          </Box>
                          <Box>
                            <Button colorScheme="blue" size="md">
                              <Link href={project.link}>Learn more</Link>
                            </Button>
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
