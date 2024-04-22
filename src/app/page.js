"use client";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import Section from "@/components/section";
import Footer from "@/components/footer";
import WebpageHeading from "@/components/webpageheading";
export default function Home() {
  const slidesSources = [
    {
      url: "/images/WebsiteAssets/perry-alexander.jpg",
      title: "Perry Alexander",
    },
    {
      url: "/images/Education.png",
    },
    {
      url: "/images/Research.png",
    },
  ];
  const slidesArray = [
    {
      url: "/images/WebsiteAssets/Campus.png",
      title: "Who Are We",
      text: "The University of Kansas Blockchain Institute is a student-led technology initiative established under the Institute for Information Sciences (I2S). We strive to make Lawrence the technology hub of the Midwest through the interdisciplinary research, education, and development of distributed ledger technologies at KU. ",
    },

    {
      url: "/images/Education.png",
      title: "Education",
      text: "Our education initiative is designed to prepare students for the industries of tomorrow. We strive to create one of the best blockchain talent pools in academia. We host meetups, conferences, speakers, and ad hoc educational sessions to illustrate the future of industry and academia.",
    },

    {
      url: "/images/Research.png",
      title: "Research",
      text: "The University of Kansas Blockchain Institute provides a platform for researchers, both faculty and student-led, to collaborate, publish work, mentor students, and educate curious minds. Contact our team at the Membership page if you would like to learn more about the resources and support our team can provide for blockchain related research projects.",
    },
    {
      url: "/images/DevImage.png",
      title: "Development",
      text: "The University of Kansas Digital Finance Conference was held on April 5th, 2019. Speakers from Ripple labs, C2FO, Liquifi, and others, shared insight from the Financial Technology industry. The KU Blockchain Supply Chain Symposium was hosted at the Oread Hotel on October 26th, 2018. We hosted over 100 attendees including industry executives, working professionals, students and academics",
    },
  ];

  return (
    <>
      <Navbar />
      <WebpageHeading
        heading={"The University of Kansas Blockchain Institute"}
      />

      <div id="about">
        <Box alignItems="center" justifyContent="center">
          <ImageSlider images={slidesSources} />
        </Box>
        <br></br>
        {slidesArray.map((slide, index) => (
          <Section
            key={index}
            image={slide.url}
            text={slide.text}
            heading={slide.title}
            fontcolor={"black"}
            type={index % 2}
            customStyle={{}}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
