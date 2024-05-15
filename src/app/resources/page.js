'use client'
import React from "react";
import { Button, Center, Flex, Text, Box } from "@chakra-ui/react";
import WebpageHeading from "@/components/webpageheading";


export default function ResourcesPage() {
  return (
    <>
      <Box
        m="auto"
        px={20}
        py={5}
      >

      <WebpageHeading heading={"Learning more about Blockchain!"} />

      <Text fontWeight={500} fontSize="3xl" align="center">Check out a preview of our notion page for quick blockchain knowledge</Text>
      <Flex justifyContent="center" m={5}>
        <iframe width="50%" height="500px" src="https://e.notionhero.io/e1/p/5e2607b-d5e9d358c1eaca582376674d8498255"></iframe>
      </Flex>
      <Center>
        <Text fontWeight={500} fontSize="3xl" align="center">
            Click here to learn more!
        </Text>
      </Center>
      <Center style={{marginBottom:"5px"}}>
        <Button colorScheme="linkedin" onClick={() => window.open("https://www.notion.so/kublockchain/Foundations-of-Blockchain-Bootcamp-1e994c38ed8b44768504c2247ae770c2?pvs=4", "_blank")}>View Notion Page</Button>
      </Center>

      </Box>
    </>
  );
}
