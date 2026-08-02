"use client";
import React from "react";
import CurrentExecTeam from "@/components/about_components/CurrentExecTeam";
import AdvisoryBoard from "@/components/about_components/AdvisoryBoard";
import OurHistory from "@/components/about_components/OurHistory";
import WebpageHeading from "@/components/PageHeading";
import { Heading, Box, Stack, Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { useLayout } from "@/contexts/LayoutContext";

export default function AboutPage() {
  const isMobile = useLayout();

  return (
    <Box>
      <WebpageHeading heading={"About KUBI"} />

      <Tabs isFitted={isMobile} variant={isMobile ? undefined : "soft-rounded"}>
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
              <OurHistory />
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
