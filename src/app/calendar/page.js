"use client";
import React from "react";
import { Box, Center, Stack } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";

export default function ProjectsPage() {
  return (
    <Box>
      <WebpageHeading heading={"Calendar"} subtitle="Promoting blockchain education and adoption at the University of Kansas." />

      <Stack spacing={5}>
        <Center>
          <Box
            w="100%"
            bg="rgba(24, 32, 60, 0.45)"
            borderRadius="8px"
            overflow="hidden"
            border="1px solid rgba(180, 206, 239, 0.22)"
            p={3}
          >
            <iframe src="https://embed.styledcalendar.com/#MjFRXlTG1mAbqA5XgGxc" title="Styled Calendar" className="styled-calendar-container" style={{width:"100%", border:"none", minHeight: "640px"}} data-cy="calendar-embed-iframe"></iframe>
            <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
          </Box>
        </Center>
      </Stack>
    </Box>
  );
}
