"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Card, CardBody, CardFooter, Button, Link, Image, Heading, HStack, Flex, VStack } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import { useLayout } from "@/contexts/LayoutContext";

export default function ProjectsPage() {
  const isMobile = useLayout();

  const projects = [
    {
      title: "The DAO",
      description: "KUBI DAO (Decentralized Autonomous Organization) offers a unique model for collaboration, incentives, and privileges. Our hybrid tokenomics system combines KUBIX and KUBI tokens to create a platform that encourages active participation and fair distribution of rewards. This is all enabled by blockchain technology, built on the Polygon Mumbai testnet. Welcome to the KU Blockchain DAO!",
      preview_image: "/images/projectImages/DAO.png",
      link: "https://dao.kublockchain.com/",
    },
    {
      title: "The Midwest Block-a-Thon",
      description: "The Midwest Block-a-Thon is a 20-hour blockchain-focused hackathon hosted at the University of Kansas aimed at fostering innovation and collaboration among students of all ages in the surrounding region. This hackathon plans to bring in 200 hackers and community members with hands-on experience in web3 development, mentorship from industry experts, and a chance to win big prizes.",
      preview_image: "/images/projectImages/blockathon.png",
      link: "https://hack.kublockchain.com/",
    },
    {
      title: "The Kansas Blockchain Fellowship",
      description: "A seven-week experiential learning intensive, scholarship program, and talent incubator to prepare students in Kansas for careers in blockchain and web3. The program is designed to give exceptional students in the Midwest deep knowledge and experience around blockchain, digital assets, and web3 to prepare them for careers in the industry.",
      preview_image: "/images/projectImages/kbf-2.jpg",
      link: "https://www.kansasblockchain.org/",
    },
    {
      title: "The Spencer Collaboration",
      description: "This project is executed in collaboration with the Spencer Museum of Art, investigating the social implications of attacks on democracy and the parallels between consensus in computing and privilege in society. The initial goal of this project was to model a 51% attack on an Ethereum Classic testnet to create media for the collaborating artists to manipulate for a public installation to take place in 2023. The focus later developed towards intervening in EIP forums as an examination of social structures and Ethereum.",
      preview_image: "/images/projectImages/spencer.png",
      link: "https://i2s-research.ku.edu/university-kansas-and-ubri",
    },
    {
      title: "NFT Gallery Tutorial",
      description: "The tutorial is a step-by-step guide to creating a decentralized application (dApp) that allows users to mint and display NFTs. The tutorial covers the basics of blockchain, smart contracts, and decentralized applications. The tutorial is designed for beginners and requires no prior knowledge of blockchain technology.",
      preview_image: "/images/projectImages/NFTGallery.png",
      link: "https://kublockchain.notion.site/NFT-Gallery-dApp-tutorial-8ccbda66968b4b55b1808e8c2abe1272",
    },
  ];

  return (
    <>
      {isMobile ? (
      <Box>
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
                    <Link href={project.link} isExternal>Learn more</Link>
                  </Button>
                </CardBody>
              </VStack>
            </Card>
          ))}
        </Stack>
      </Box>
      ) : (
        <Box>
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
                            <Button size="md">
                              <Link href={project.link} isExternal>Learn more</Link>
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
