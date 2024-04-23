"use client";
import React from "react";
import Navbar from "@/components/Navbar";

import { Center, Box, Text, Stack } from "@chakra-ui/react";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  let testText =
    "KUBI DAO offers a unique model for collaboration, incentives, and privileges. Our hybrid tokenomics system combines KUBIX and KUBI tokens to create a platform that encourages active participation and fair distribution of rewards. This is all enabled by blockchain technology, built on the Polygon Mumbai testnet. Welcome to the KU Blockchain DAO!";

  const projects = [
    {
      title: "The DAO",
      description: testText,
      preview_image: "/images/projectImages/DAO.png",
      link: "#dao",
    },
    {
      title: "The Spencer Collaboration",
      description: testText,
      preview_image: "/images/projectImages/spencer.png",
      link: "#spencer-collaboration",
    },
    {
      title: "NFT Gallery Tutorial",
      description: testText,
      preview_image: "/images/projectImages/NFTGallery.png",
      link: "#nft-gallery",
    },
  ];

  // Optional: Implement a click handler if needed
  const handleProjectClick = (project) => {
    console.log("Project clicked:", project.title);
    // Navigation or other logic goes here
  };

  return (
    <div>
      <Navbar />

      <Stack spacing={4}>
        {projects.map((project, index) => (
          <Box
            key={index}
            onClick={() => handleProjectClick(project)}
            cursor="pointer"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              preview_image={project.preview_image}
              link={project.link}
            />
          </Box>
        ))}
      </Stack>

      {/* <Footer /> Uncomment if Footer is used */}
    </div>
  );
}
