"use client";
import React, { useEffect, useState } from "react";
import CurrentExecTeam from "@/components/about_components/CurrentExecTeam";
import AdvisoryBoard from "@/components/about_components/AdvisoryBoard";
import WebpageHeading from "@/components/PageHeading";
import { Heading, Image, HStack, VStack, Badge, Button, Text, Link, Box, Stack, Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { useLayout } from "@/contexts/LayoutContext";
import { colors } from "@/styles/theme.js";

export default function AboutPage() {
  const isMobile = useLayout();

  return (
    <>
      { isMobile ? (
        <Box>
          <WebpageHeading heading={"About KUBI"} />

          <Tabs isFitted>

            <TabList>
              <Tab>Executive Team</Tab>
              <Tab>Advisory Board</Tab>
              <Tab>Our History</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack>
                  <Heading as="h2" size="xl" textAlign="center" my={5}>
                    Current Executive Team
                  </Heading>
                  <CurrentExecTeam />
                </Stack>
              </TabPanel>

              <TabPanel>
                <Stack>
                  <Heading as="h2" size="xl" textAlign="center" my={5}>
                    Advisory Board
                  </Heading>
                  <AdvisoryBoard />
                </Stack>
              </TabPanel>

              <TabPanel>
                <Stack>
                  <Heading as="h2" size="xl" textAlign="center" my={5}>
                    Our History
                  </Heading>
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
                </Stack>
              </TabPanel>

            </TabPanels>

          </Tabs>
  
        </Box>
      ) : (
        <Box>
          <WebpageHeading heading={"About KUBI"} />

          <Tabs variant='soft-rounded'>

            <TabList>
              <Tab>Executive Team</Tab>
              <Tab>Advisory Board</Tab>
              <Tab>Our History</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack>
                  <Heading as="h2" size="xl" textAlign="center" my={5}>
                    Current Executive Team
                  </Heading>
                  <CurrentExecTeam />
                </Stack>
              </TabPanel>

              <TabPanel>
                <Stack>
                  <Heading as="h2" size="xl" textAlign="center" my={5}>
                    Advisory Board
                  </Heading>
                  <AdvisoryBoard />
                </Stack>
              </TabPanel>

              <TabPanel>
                <Stack>
                  <Heading as="h2" size="xl" textAlign="center" my={5}>
                    Our History
                  </Heading>
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
                        <Button onClick={() => window.open("https://ripple.com/insights/on-campus-university-of-kansas-emphasizes-interdisciplinary-blockchain-study-for-budding-entrepreneurs/", "_blank")}>Learn More</Button>
                      </VStack>
                    </Box>
                  </HStack>
                </Stack>
              </TabPanel>

            </TabPanels>
          </Tabs>
        
        </Box>
      )}
    </>
  );
}
