"use client";
import React, { useEffect, useState } from "react";
import CurrentExecTeam from "@/components/about_components/CurrentExecTeam";
import AdvisoryBoard from "@/components/about_components/AdvisoryBoard";
import WebpageHeading from "@/components/PageHeading";
import { Heading, Box, Stack, Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { useLayout } from "@/contexts/LayoutContext";
import { colors } from "@/styles/theme.js";

export default function AboutPage() {
  const isMobile = useLayout();

  return (
    <>
      { isMobile ? (
        <Box>
          <WebpageHeading heading={"About KUBI"} />

          <Tabs mx={6} isFitted>

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
                  <p>should have info on our history</p>
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
                  <p>To be added: information on our history.</p>
                </Stack>
              </TabPanel>

            </TabPanels>
          </Tabs>
        
        </Box>
      )}
    </>
  );
}
