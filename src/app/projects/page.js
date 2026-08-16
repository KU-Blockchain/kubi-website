"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import ProjectCoverflow from "@/components/projects/ProjectCoverflow";

export default function ProjectsPage() {
  const projects = [
    {
      title: "The Midwest Block-a-Thon",
      description: "The Midwest Block-a-Thon is a 36-hour blockchain-focused hackathon hosted at the University of Kansas aimed at fostering innovation and collaboration among students of all ages in the surrounding region. This hackathon plans to bring in 500+ hackers and community members with hands-on experience in Web3 development, mentorship from industry experts, and a chance to win big prizes.",
      preview_image: "/images/projectImages/blockathon.png",
      link: "https://hack.kublockchain.com/",
    },
    {
      title: "Cohort Capstone",
      description: "The KU Blockchain Institute (KUBI) capstone projects are final decentralized application (dApp) builds created by cohort students to finish their experiential learning programs. Fellows present these practical Web3 and digital asset solutions at end-of-cohort showcase ceremonies.",
      preview_image: "/images/projectImages/cohort-capstone.png",
      link: "https://fall-2025-cohort-capstones.devpost.com/project-gallery",
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
    <Box>
      <WebpageHeading heading={"Our Projects"} mb={6} />
      <ProjectCoverflow projects={projects} />
    </Box>
  );
}
