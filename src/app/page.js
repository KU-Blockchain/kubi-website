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
  { value: "2018", label: "Founded at KU as a student-led institute" },
  { value: "$2M", label: "Ripple UBRI research support at KU" },
  { value: "16", label: "Inaugural Kansas Blockchain Fellows" },
  { value: "61", label: "Builders at the first Midwest Block-a-Thon" },
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
        pt={isMobile ? 8 : 4}
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
              minH={isMobile ? "220px" : "320px"}
              objectFit="cover"
              flexShrink={0}
            />
            <Flex direction="column" justify="center" p={isMobile ? 6 : 10} gap={4}>
              <Text
                letterSpacing="0.16em"
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="700"
                color={colors.cubeGold}
              >
                Who are we
              </Text>
              <Heading size={isMobile ? "lg" : "xl"} color="white">
                A student-led institute under I2S
              </Heading>
              <Text lineHeight="1.75" color={colors.steel} fontSize={isMobile ? "md" : "lg"}>
                The University of Kansas Blockchain Institute is a student-led technology initiative established under the Institute for Information Sciences (I2S). We strive to make Lawrence the technology hub of the Midwest through the interdisciplinary research, education, and development of distributed ledger technologies at KU.
              </Text>
            </Flex>
          </Flex>
        </LiquidGlassCard>

        <Box mt={isMobile ? 12 : 16}>
          <Text
            letterSpacing="0.16em"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="700"
            color={colors.cubeGold}
            mb={3}
            textAlign={isMobile ? "center" : "left"}
          >
            Impact
          </Text>
          <Heading
            size={isMobile ? "lg" : "xl"}
            color="white"
            mb={8}
            textAlign={isMobile ? "center" : "left"}
          >
            The Numbers
          </Heading>

          <SimpleGrid columns={isMobile ? 1 : 4} spacing={5}>
            {impactStats.map((stat, index) => (
              <MotionBox
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <LiquidGlassCard p={isMobile ? 6 : 7} h="100%">
                  <Text
                    fontSize={isMobile ? "4xl" : "5xl"}
                    fontWeight="800"
                    color="white"
                    letterSpacing="-0.04em"
                    lineHeight="1"
                    mb={3}
                  >
                    {stat.value}
                  </Text>
                  <Text color={colors.steel} lineHeight="1.6">
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
