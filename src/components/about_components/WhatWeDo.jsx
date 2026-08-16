"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { colors } from "@/styles/theme.js";
import { useLayout } from "@/contexts/LayoutContext";
import { FocusCards } from "@/components/ui/focus-cards";

const cards = [
  {
    title: "Education",
    src: "/images/Education.png",
    href: "/membership",
    description:
      "Meetups, conferences, speakers, and workshops that prepare students for the industries of tomorrow.",
  },
  {
    title: "Research",
    src: "/images/Research.png",
    href: "https://medium.com/@ku.blockchain.institute",
    isExternal: true,
    description:
      "A platform for faculty and student researchers to collaborate, publish, mentor, and explore blockchain.",
  },
  {
    title: "Development",
    src: "/images/DevImage.png",
    href: "/projects",
    description:
      "Open-source builds, technical workshops, and production systems — including our DAO and this website.",
  },
];

export default function WhatWeDo({ variant = "light" }) {
  const isMobile = useLayout();
  const isDark = variant === "dark";

  return (
    <Box w="100%">
      <Box textAlign={isMobile ? "center" : "left"} mb={10}>
        <Text
          letterSpacing="0.16em"
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="700"
          color={isDark ? colors.cubeGold : colors.royal}
          mb={2}
        >
          What we do
        </Text>
        <Heading size={isMobile ? "lg" : "xl"} color="white">
          Research. Education. Development.
        </Heading>
      </Box>

      <FocusCards cards={cards} />
    </Box>
  );
}
