"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Card, CardBody, CardFooter, Button, Link, Image, Heading, HStack, Flex, VStack } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import { useLayout } from "@/contexts/LayoutContext";
import { BsBackpackFill, BsBugFill, BsGithub, BsLinkedin, BsCalendar2WeekFill, BsFillCupHotFill, BsFillFloppyFill, BsFillDiagram3Fill, BsDiscord, BsFillEnvelopeFill, BsInstagram } from 'react-icons/bs';

export default function ProjectsPage() {
  const isMobile = useLayout();

  const links = [
    // {
    //   title: "RSVP to our FIRST MEETING of the semester!",
    //   link: "https://lu.ma/4xya9his",
    //   icon: <BsBackpackFill />,
    // },
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
      link: "mailto:blockchalk@kublockchain.com",
      icon: <BsFillEnvelopeFill />,
    },
    {
      title: "Resource highlight: Major Blockchain Platforms",
      link: "https://www.notion.so/kublockchain/Major-Blockchain-Platforms-c0796e14ef214d6cbfc960168c4f9955",
      icon: <BsFillDiagram3Fill />,
    }
  ];

  return (
    <>
        <Box>
            <WebpageHeading heading={"Our Links"} />
            <Text mt={-3} mb={7} textAlign="center" px={10}>Promoting blockchain education and adoption at the University of Kansas.</Text>

            <Stack spacing={5}>
                {links.map((link, index) => (
                    <Card 
                    key={index} 
                    borderRadius="20px" 
                    p={5}
                    >
                    <VStack spacing={4} align="stretch">
                        <HStack>
                        {link.icon}
                        <Link href={link.link} isExternal>{link.title}</Link>
                        </HStack>
                    </VStack>
                    </Card>
                ))}
            </Stack>

        </Box>
    </>
  );
}
