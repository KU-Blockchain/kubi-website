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
    {
      url:"/images/WebsiteAssets/Campus.png", 
      title:"Who Are We",
      text:"The University of Kansas Blockchain Institute is a student-led technology initiative established under the Institute for Information Sciences (I2S). We strive to make Lawrence the technology hub of the Midwest through the interdisciplinary research, education, and development of distributed ledger technologies at KU. "},

    {
      url:"/images/Education.png", 
      title:"Education",
      text:"Our education initiative is designed to prepare students for the industries of tomorrow. We strive to create one of the best blockchain talent pools in academia. We host meetups, conferences, speakers, and ad hoc educational sessions to illustrate the future of industry and academia."
    },

    {
      url:"/images/Research.png", 
      title:"Research",
      text:"The University of Kanas Blockchain Institute provides a platform for researchers, both faculty and student-led, to collaborate, publish work, mentor students, and educate curious minds. Contact our team at the Membership page if you would like to learn more about the resources and support our team can provide for blockchain related research projects."
    },
    {
      url:"/images/DevImage.png",
      title:"Development",
      text:"The University of Kansas Digital Finance Conference was held on April 5th, 2019. Speakers from Ripple labs, C2FO, Liquifi, and others, shared insight from the Financial Technology industry. The KU Blockchain Supply Chain Symposium was hosted at the Oread Hotel on October 26th, 2018. We hosted over 100 attendees including industry executives, working professionals, students and academics"
    }

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
        {slidesArray.map((slide, index) => (
          <Section
            image={slide.url}
            text={slide.text}
            bgcolor={index % 2 === 0 ? colors.whiteBg : colors.blueBg}
            heading={slide.title}
            fontcolor={index % 2 === 0 ? colors.blueBg : colors.whiteBg}
            headingColor={index % 2 === 0 ? colors.blueBg : colors.whiteBg}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}


