import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SolidColorButton from "../../components/SolidColorButton";
import Footer from "@/components/footer";
import { Center, Text, Stack } from "@chakra-ui/react";
import ProjectHolder from "@/components/projectholder";
import { projectCard } from "@/components/globalStyles";
export default function ProjectsPage() {
  let testText="KUBI DAO is offers a unique model for collaboration, incentives, and privileges. Our hybrid tokenomics system combines KUBIX and KUBI tokens to create a platform that encourages active participation and fair distribution of rewards. This is all enabled by bloclchain tehcnology, built on the Polygon mumbai testnet. Welcome to the KU Blockchain DAO!"
  return (
    <>
      <Navbar />
      <Text fontSize='6xl' align="center">Student Led Projects</Text>
      <hr></hr>
      <p>
        {" "}
        here we will have a list of all past and present projects and link to
        each page
      </p>
      <Stack spacing={4}>
        <ProjectHolder text={testText} />
        <ProjectHolder text={testText} />
        <ProjectHolder text={testText} />
        <ProjectHolder text={testText} />
        <ProjectHolder text={testText} />
      </Stack>
      
      
    </>
  );
}

const styles = {
  projectCard: {
    borderRadius: "8px",
    padding: "15px 15px",
    backgroundColor: "navyblue",
    color: "white",
    outline: "none",
    transition: "0.3s",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
};
