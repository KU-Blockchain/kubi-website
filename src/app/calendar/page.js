"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Center, Stack, Card, CardBody, CardFooter, Button, Link, Image, Heading, HStack, Flex, VStack } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import { useLayout } from "@/contexts/LayoutContext";
import { BsGithub, BsLinkedin, BsCalendar2WeekFill, BsFillCupHotFill, BsFillFloppyFill, BsFillDiagram3Fill, BsDiscord, BsFillEnvelopeFill } from 'react-icons/bs';

export default function ProjectsPage() {
  const isMobile = useLayout();

  return (
    <>
        <Box>
            <WebpageHeading heading={"Calendar"} />
            <Text mt={-3} mb={7} textAlign="center" px={20}>Promoting blockchain education and adoption at the University of Kansas.</Text>

            <Stack spacing={5}>
                <Center>
                <iframe src="https://embed.styledcalendar.com/#MjFRXlTG1mAbqA5XgGxc" title="Styled Calendar" class="styled-calendar-container" style={{width:"90%", border:"none"}} data-cy="calendar-embed-iframe"></iframe>
                <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                </Center>
            </Stack>

        </Box>
    </>
  );
}
