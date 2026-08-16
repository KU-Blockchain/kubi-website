"use client";
import React from "react";
import CurrentExecTeam from "@/components/about_components/CurrentExecTeam";
import AdvisoryBoard from "@/components/about_components/AdvisoryBoard";
import OurHistory from "@/components/about_components/OurHistory";
import WebpageHeading from "@/components/PageHeading";
import WhatWeDo from "@/components/about_components/WhatWeDo";
import { Heading, Box, Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { useLayout } from "@/contexts/LayoutContext";

export default function AboutPage() {
  const isMobile = useLayout();

  return (
    <Box>
      <WebpageHeading heading={"About KUBI"} />

      <Tabs isFitted={isMobile} variant="unstyled">
        <TabList mb={4} gap={2} flexWrap="wrap" justifyContent="center">
          <Tab px={5} py={2} border="1px solid rgba(180, 206, 239, 0.22)">What We Do</Tab>
          <Tab px={5} py={2} border="1px solid rgba(180, 206, 239, 0.22)">Executive Team</Tab>
          <Tab px={5} py={2} border="1px solid rgba(180, 206, 239, 0.22)">Advisory Board</Tab>
          <Tab px={5} py={2} border="1px solid rgba(180, 206, 239, 0.22)">Our History</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0} pt={4}>
            <WhatWeDo variant="dark" />
          </TabPanel>

          <TabPanel px={0} pt={4} display="flex" flexDirection="column" alignItems="center">
            <Heading as="h2" size="lg" textAlign="center" mb={4}>
              Current Executive Team
            </Heading>
            <CurrentExecTeam />
          </TabPanel>

          <TabPanel px={0} pt={4} display="flex" flexDirection="column" alignItems="center">
            <Heading as="h2" size="lg" textAlign="center" mb={4}>
              Advisory Board
            </Heading>
            <AdvisoryBoard />
          </TabPanel>

          <TabPanel px={0} pt={4}>
            <Heading as="h2" size="lg" textAlign="center" mb={4}>
              Our History
            </Heading>
            <OurHistory />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
