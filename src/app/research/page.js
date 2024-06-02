'use client';
import React, { useEffect, useState } from "react";
import { Button, Center, Flex, Text, Box, Square, Image, HStack, VStack, Badge, Divider, Link, Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import WebpageHeading from "@/components/webpageheading";


export default function ResearchPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <>
      {isMobile ? (
        <Box
          m="auto"
          px={2}
          py={5}
        >
          <WebpageHeading heading={"Blockchain @ KU"} />

          <Tabs mx={6} isFitted variant='soft-rounded' colorScheme='blue'>
            <TabList>
              <Tab>UBRI</Tab>
              <Tab>Block News</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <HStack paddingBottom={4}>
                  <Box w="30%">
                    <Image 
                      width="100%"
                      objectFit="cover"
                      borderRadius="full"
                      src="/images/WebsiteAssets/perry-alexander2.jpg"
                      alt="Perry"
                    />
                  </Box>
                  <Box w="70%">
                    <VStack align="flex-start">
                      <Text 
                        fontWeight={500} 
                        fontSize="2xl">
                          The University Blockchain Research Initiative (UBRI)
                      </Text>
                      <Text 
                        fontWeight={500} 
                        fontSize="large">
                          Dr. Perry Alexander
                      </Text>
                    </VStack>
                    <Link href='mailto:palexand@ku.edu'><Badge variant='outline'>Contact</Badge></Link> <Link href='https://perry.alexander.name/' isExternal><Badge variant='outline'>Personal Website</Badge></Link>
                  </Box>
                </HStack>
                <Text 
                  fontSize="medium"
                  paddingBottom={4}
                >
                    Dr. Perry Alexander is The AT&T Foundation Distinguished Professor of Electrical Engineering and Computer Science Department and Director of the Information and Telecommunication Technology Center at The University of Kansas. Dr. Alexander oversees the University Blockchain Research Initiative (UBRI) Grant of $2 million donated by Ripple for blockchain research and development at KU. His research interests include system-level modeling, formal verification, language semantics, and trusted computing.
                </Text>
                <Button colorScheme="blue" onClick={() => window.open("https://ripple.com/insights/on-campus-university-of-kansas-emphasizes-interdisciplinary-blockchain-study-for-budding-entrepreneurs/", "_blank")}>Learn More</Button>
              </TabPanel>

              <TabPanel>
                <Text 
                fontWeight={500} 
                fontSize="2xl"
                align="center"
                paddingBottom={4}
                >
                  Block News
                </Text>

                <Text 
                  fontWeight={500}
                  fontSize="large"
                  >
                    <Link href="/membership">Weekly Newsletter</Link>
                </Text>
                <Box w="100%" paddingBottom={4}>
                  Sign up to receive weekly updates on the latest blockchain news and events
                </Box>

                <Text 
                  fontWeight={500}
                  fontSize="large"
                  >
                    <Link href="https://kublockchain.notion.site/Foundations-of-Blockchain-7ff28f61d6c347feb624866d32f0242b" isExternal>Notion Page</Link>
                </Text>
                <Box w="100%" paddingBottom={4}>
                  Foundations of Blockchain Bootcamp, etc
                </Box>

                <Text 
                  fontWeight={500}
                  fontSize="large"
                  >
                    <Link href="https://www.youtube.com/@kublockchaininstitute9672" isExternal>YouTube Channel</Link>
                </Text>
                <Box w="100%" paddingBottom={4}>
                  Blockchain 101, etc
                </Box>
              </TabPanel>
            </TabPanels>

          </Tabs>

        </Box>
      ) : (
      <Box
        m="auto"
        px={20}
        py={5}
      >
      <WebpageHeading heading={"Blockchain Research @ KU"} />

      <Flex> 
        <Box 
          w="80%" 
          p={2} 
        > {/* bg='blue' */}
          <HStack>
            <Box w="20%">
              <Image 
                width="100%"
                objectFit="cover"
                borderRadius="full"
                src="/images/WebsiteAssets/perry-alexander2.jpg"
                alt="Perry"
              />
            </Box>
            <Box w="80%">
              <VStack align="flex-start">
                <Text 
                  fontWeight={500} 
                  fontSize="2xl">
                    The University Blockchain Research Initiative (UBRI)
                </Text>
                <Text 
                  fontWeight={500} 
                  fontSize="large">
                    Dr. Perry Alexander <Link href='mailto:palexand@ku.edu'><Badge variant='outline'>Contact</Badge></Link> <Link href='https://perry.alexander.name/' isExternal><Badge variant='outline'>Personal Website</Badge></Link>
                </Text>
                
                <Text 
                  fontSize="medium"
                  >
                    Dr. Perry Alexander is The AT&T Foundation Distinguished Professor of Electrical Engineering and Computer Science Department and Director of the Information and Telecommunication Technology Center at The University of Kansas. Dr. Alexander oversees the University Blockchain Research Initiative (UBRI) Grant of $2 million donated by Ripple for blockchain research and development at KU. His research interests include system-level modeling, formal verification, language semantics, and trusted computing.
                </Text>
                <Button colorScheme="blue" onClick={() => window.open("https://ripple.com/insights/on-campus-university-of-kansas-emphasizes-interdisciplinary-blockchain-study-for-budding-entrepreneurs/", "_blank")}>Learn More</Button>
              </VStack>
            </Box>
          </HStack>
        </Box>
        

        <Divider orientation="vertical" height="auto" borderColor="gray.400" borderWidth="1" />

        <Box w="30%" p={2}> {/* bg='tomato' */}
          <Text 
            fontWeight={500} 
            fontSize="2xl"
            align="center"
            paddingBottom={4}
            >
              Block News
          </Text>

          <Text 
            fontWeight={500}
            fontSize="large"
            >
              <Link href="/membership#newsletter">Weekly Newsletter</Link>
          </Text>
          <Box w="100%" paddingBottom={4}>
            Sign up to receive weekly updates on the latest blockchain news and events
          </Box>

          <Text 
            fontWeight={500}
            fontSize="large"
            >
              <Link href="https://kublockchain.notion.site/Foundations-of-Blockchain-7ff28f61d6c347feb624866d32f0242b" isExternal>Notion Page</Link>
          </Text>
          <Box w="100%" paddingBottom={4}>
            Foundations of Blockchain Bootcamp, etc
          </Box>

          <Text 
            fontWeight={500}
            fontSize="large"
            >
              <Link href="https://www.youtube.com/@kublockchaininstitute9672" isExternal>YouTube Channel</Link>
          </Text>
          <Box w="100%" paddingBottom={4}>
            Blockchain 101, etc
          </Box>
        </Box>

      </Flex>

      </Box>
      )}
    </>
  );
}

{/* <Text fontWeight={500} fontSize="3xl" align="center">Check out a preview of our notion page for quick blockchain knowledge</Text>
<Flex justifyContent="center" m={5}>
  <iframe width="100%" height="2000px" src="https://e.notionhero.io/e1/p/5e2607b-d5e9d358c1eaca582376674d8498255/7ff28f61d6c347feb624866d32f0242b"></iframe>
</Flex>
<Center>
  <Text fontWeight={500} fontSize="3xl" align="center">
      Click here to learn more!
  </Text>
</Center>
<Center style={{marginBottom:"5px"}}>
  <Button colorScheme="linkedin" onClick={() => window.open("https://www.notion.so/kublockchain/Foundations-of-Blockchain-Bootcamp-1e994c38ed8b44768504c2247ae770c2?pvs=4", "_blank")}>View Notion Page</Button>
</Center> */}