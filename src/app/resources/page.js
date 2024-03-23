import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Center } from "@chakra-ui/react";
import WebpageHeading from "@/components/webpageheading";
export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <WebpageHeading heading={"Learning more about Blockchain!"} />

      <p>should have links to learnweb3 and our notion here</p>
      <Center>
        <iframe width="50%" height="500px" src="https://e.notionhero.io/e1/p/5e2607b-d5e9d358c1eaca582376674d8498255"></iframe>
      </Center>
      
      <Footer />
    </>
  );
}
