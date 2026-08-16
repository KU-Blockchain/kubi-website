"use client";
import React from "react";
import { Box, Text, Stack, Card, Link, HStack } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import { BsBugFill, BsGithub, BsLinkedin, BsCalendar2WeekFill, BsFillCupHotFill, BsFillFloppyFill, BsFillDiagram3Fill, BsDiscord, BsFillEnvelopeFill, BsInstagram } from 'react-icons/bs';
import { colors } from "@/styles/theme.js";

export default function ProjectsPage() {
  const links = [
    {
      title: "Join The Midwest Block-a-Thon",
      link: "https://hack.kublockchain.com",
      icon: <BsBugFill />,
    },
    {
      title: "Discord",
      link: "https://discord.gg/GAznpHUzny",
      icon: <BsDiscord />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/kublockchain",
      icon: <BsLinkedin />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/kublockchain",
      icon: <BsInstagram />,
    },
    {
      title: "Subscribe to Google Calender Events",
      link: "https://calendar.google.com/calendar/u/0?cid=a3UuYmxvY2tjaGFpbi5pbnN0aXR1dGVAZ21haWwuY29t",
      icon: <BsCalendar2WeekFill />,
    },
    {
      title: "Foundations of Blockchain Learning Portal",
      link: "https://www.notion.so/kublockchain/Foundations-of-Blockchain-7ff28f61d6c347feb624866d32f0242b",
      icon: <BsFillCupHotFill />,
    },
    {
      title: "Github",
      link: "https://github.com/KU-Blockchain",
      icon: <BsGithub />,
    },
    {
      title: "Blockchain Resources for the Girls 💁🏽‍♀️",
      link: "https://kublockchain.notion.site/Especially-for-the-Girls-3ae8d83178f449d98328f800aebd57ca",
      icon: <BsFillFloppyFill />,
    },
    {
      title: "Email Us",
      link: "mailto:ku.blockchain.institute@gmail.com",
      icon: <BsFillEnvelopeFill />,
    },
    {
      title: "Resource highlight: Major Blockchain Platforms",
      link: "https://www.notion.so/kublockchain/Major-Blockchain-Platforms-c0796e14ef214d6cbfc960168c4f9955",
      icon: <BsFillDiagram3Fill />,
    }
  ];

  return (
    <Box>
      <WebpageHeading heading={"Our Links"} subtitle="Promoting blockchain education and adoption at the University of Kansas." />

      <Stack spacing={4} maxW="720px" mx="auto">
        {links.map((link, index) => (
          <Card
            key={index}
            p={4}
            as={Link}
            href={link.link}
            isExternal
            _hover={{ textDecoration: "none", transform: "translateY(-4px)" }}
          >
            <HStack spacing={4} color="white">
              <Box
                w="42px"
                h="42px"
                borderRadius="full"
                bg={colors.ice}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={colors.blue}
                flexShrink={0}
              >
                {link.icon}
              </Box>
              <Text fontWeight="600">{link.title}</Text>
            </HStack>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
