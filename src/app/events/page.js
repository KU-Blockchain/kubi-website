import React from "react";
import Navbar from "@/components/Navbar";
import { Center } from "@chakra-ui/react";
import Footer from "@/components/footer";
import { Text } from "@chakra-ui/react";
export default function EventsPage() {
  return (
    <>
      <Navbar />
      <Text fontSize="6xl" align="center">Events</Text>
      <hr></hr>
      <Text fontSize="3xl" align="center">KU Blockchain Calendar</Text>
      <Center>
      <iframe src="https://calendar.google.com/calendar/embed?src=ku.blockchain.institute%40gmail.com&ctz=America%2FChicago" style={{border: 0}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </Center>
      
      <p> should have highlights of past events</p>
      <Footer />
    </>
  );
}
