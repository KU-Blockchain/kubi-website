'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import WebpageHeading from "@/components/webpageheading";
export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <WebpageHeading heading={"Learning more about Blockchain!"} />

      <Text color="blue.600" fontWeight={500} fontSize="3xl" align="center">Check out a preview of our notion page for quick blockchain knowledge</Text>
      <Flex justifyContent="center" m={5}>
        <iframe width="50%" height="500px" src="https://e.notionhero.io/e1/p/5e2607b-d5e9d358c1eaca582376674d8498255"></iframe>
      </Flex>
      
      <Button onClick={() => window.open(link, "_blank")}>Where r u</Button>
      <Footer />
    </>
  );
}
