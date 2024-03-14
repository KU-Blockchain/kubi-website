'use client'
import Image from "next/image";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { Link } from "@chakra-ui/next-js";
import ImageSlider from "@/components/ImageSlider";
import Section from "@/components/section";
export default function Home() {

  const slidesArray=[
    {url:"/images/coverpage.jpg", title:"Test1"},
    {url:"/images/SaketPlagiarsim.jpg", title:"Test2"},
    {url:"/images/coverpage.jpg", title:"Test3"}
  ]

  let testText="The University of Kansas Blockchain Institute is a student-led technology initiative established under the Institute for Information Sciences (I2S). We strive to make Lawrence the technology hub of the Midwest through the interdisciplinary research, education, and development of distributed ledger technologies at KU. "

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <>
      <Navbar />
      <h2 style={styles.centeredTitle}>Welcome to KUBI web</h2>

      <div id="about">
      <Box bg="blueviolet" alignItems="center" justifyContent="center">
          <ImageSlider images={slidesArray}/>
      </Box>
      <br>
      </br>
        <Section image={slidesArray[0].url} text={testText} bgcolor="yellow" heading="My name is Khan" fontcolor="red" headingColor="blue" />
        <div style={styles.icon}>
          <Link href="https://github.com/KU-Blockchain">
            <Image src="/images/icons/githubLogo.png" width="70" height="70" />
          </Link>
        </div>
        <div style={styles.icon}>
          <Link href="https://www.linkedin.com/company/kublockchain/">
            <Image
              src="/images/icons/linkedinLogo.png"
              width="70"
              height="70"
            />
          </Link>
        </div>
        <p>
          in addition to linkedin and github we want join discord, medium, etc.
        </p>
      </div>    
      
      </>
  );
}

const styles = {
  icon: {
    margin: "50px",
  },

  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
    marginTop: "20px",
  },
};
