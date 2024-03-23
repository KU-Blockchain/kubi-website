'use client'
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import Section from "@/components/section";
import Footer from "@/components/footer";
import { Text } from "@chakra-ui/react";
import {motion} from "framer-motion";
export default function Home() {

  const colors={
    blueBg:"#0051ba",
    whiteBg:"white"
  }
  const slidesArray=[
    {url:"/images/DevImage.png", title:"Test1"},
    {url:"/images/Education.png", title:"Test2"},
    {url:"/images/Research.png", title:"Test3"}
  ]

  let testText="The University of Kansas Blockchain Institute is a student-led technology initiative established under the Institute for Information Sciences (I2S). We strive to make Lawrence the technology hub of the Midwest through the interdisciplinary research, education, and development of distributed ledger technologies at KU. "

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <Navbar />
      <motion.div
      initial={{ opacity: 0, x:300}}
      whileInView={{ opacity: 1, x:0 }}>
        <Text fontSize='6xl' align="center" color="blue.500" fontWeight="bold">Welcome to KU Blockchain Institute</Text>
      </motion.div>
      
      <hr></hr>
      <div id="about">
        <Box alignItems="center" justifyContent="center">
          <ImageSlider images={slidesArray}/>
        </Box>
        <br></br>
        <Section
          image={slidesArray[0].url}
          text={testText}
          bgcolor={colors.whiteBg}
          heading="Who Are We"
          fontcolor={colors.blueBg}
          headingColor={colors.blueBg}
        />
        <Section
          image={slidesArray[1].url}
          text={testText}
          bgcolor={colors.blueBg}
          heading="Research"
          fontcolor={colors.whiteBg}
          headingColor="white"
        />
        <Section
          image={slidesArray[2].url}
          text={testText}
          bgcolor={colors.whiteBg}
          heading="Development"
          fontcolor={colors.blueBg}
          headingColor={colors.blueBg}
        />
      </div>
      <Footer />
    </div>
  );
}


