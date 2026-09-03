"use client";
import React from "react";
import { Text, Box, Flex, Heading, SimpleGrid, Image } from "@chakra-ui/react";
import { useLayout } from "@/contexts/LayoutContext";
import { motion } from "framer-motion";
import HomeHeroSplit from "@/components/home/HomeHeroSplit";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { colors } from "@/styles/theme.js";

const MotionBox = motion(Box);

const impactStats = [
  { value: "$2M+", label: "Ripple UBRI research funding at the University of Kansas" },
  { value: "$10,000+", label: "In prizes at the Midwest Block-a-Thon" },
  { value: "8+", label: "Years as the Midwest's premier student-led blockchain institute" },
  { value: "600+", label: "Total registrants across hackathons, cohort builds, and community events" },
];

export default function Home() {
  const isMobile = useLayout();

  return (
    <Box position="relative" bg="transparent">
      <HomeHeroSplit />

      <Box
        position="relative"
        zIndex={1}
        px={isMobile ? 4 : "1.25in"}
        pt={isMobile ? 14 : 20}
        pb={isMobile ? 16 : 24}
      >
        <LiquidGlassCard>
          <Flex
            direction={isMobile ? "column" : "row"}
            align="stretch"
            overflow="hidden"
          >
            <Image
              src="/images/WebsiteAssets/Campus.png"
              alt="Who Are We"
              w={isMobile ? "100%" : "42%"}
              minH={isMobile ? "176px" : "256px"}
              objectFit="cover"
              flexShrink={0}
            />
            <Flex direction="column" justify="center" p={isMobile ? 5 : 8} gap={3}>
              <Text
                letterSpacing="0.16em"
                textTransform="uppercase"
                fontSize="xs"
                fontWeight="700"
                color={colors.cubeGold}
              >
                Who are we
              </Text>
              <Heading size={isMobile ? "md" : "lg"} color="white">
                A student-led institute under I2S
              </Heading>
              <Text lineHeight="1.75" color={colors.steel} fontSize={isMobile ? "sm" : "md"}>
                The University of Kansas Blockchain Institute is a student-led technology initiative established under the Institute for Information Sciences (I2S). We strive to make Lawrence the technology hub of the Midwest through the interdisciplinary research, education, and development of distributed ledger technologies at KU.
              </Text>
            </Flex>
          </Flex>
        </LiquidGlassCard>

        <Box mt={isMobile ? 14 : 20}>
          <SimpleGrid columns={isMobile ? 1 : 4} spacing={4}>
            {impactStats.map((stat, index) => (
              <MotionBox
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <LiquidGlassCard p={isMobile ? 5 : 6} h="100%">
                  <Text
                    fontSize={isMobile ? "3xl" : "4xl"}
                    fontWeight="800"
                    color="white"
                    letterSpacing="-0.04em"
                    lineHeight="1"
                    mb={2}
                  >
                    {stat.value}
                  </Text>
                  <Text color={colors.steel} fontSize="sm" lineHeight="1.6">
                    {stat.label}
                  </Text>
                </LiquidGlassCard>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
