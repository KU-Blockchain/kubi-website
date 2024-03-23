import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SolidColorButton from "../../components/SolidColorButton";
import Footer from "@/components/footer";
import { Center, Text, Stack } from "@chakra-ui/react";
import ProjectHolder from "@/components/projectholder";
export default function ProjectsPage() {
  let testText="KUBI DAO is offers a unique model for collaboration, incentives, and privileges. Our hybrid tokenomics system combines KUBIX and KUBI tokens to create a platform that encourages active participation and fair distribution of rewards. This is all enabled by bloclchain tehcnology, built on the Polygon mumbai testnet. Welcome to the KU Blockchain DAO!KUBI DAO is offers a unique model for collaboration, incentives, and privileges. Our hybrid tokenomics system combines KUBIX and KUBI tokens to create a platform that encourages active participation and fair distribution of rewards. This is all enabled by bloclchain tehcnology, built on the Polygon mumbai testnet. Welcome to the KU Blockchain DAO!"

  const assets={
    DAOImage:"/images/WebsiteAssets/DAOimage.png",
    ResearchImage:"/images/Research.png"
  }
  return (
    <div>
      <Navbar />
      <Text fontSize='6xl' align="center" color="blue.500" fontWeight="bold">Student Led Projects</Text>
      <hr></hr>
      <p>
        {" "}
        here we will have a list of all past and present projects and link to
        each page
      </p>
      <Stack spacing={4}>
        <ProjectHolder text={testText} image={assets.DAOImage} />
        <ProjectHolder text={testText} image={assets.ResearchImage} />
        <ProjectHolder text={testText} image={assets.DAOImage} />
      </Stack>
      
      
    </div>
  );
}

