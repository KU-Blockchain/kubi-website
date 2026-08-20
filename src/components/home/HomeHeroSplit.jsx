"use client";

import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useLayout } from "@/contexts/LayoutContext";
import RubiksCube from "@/components/RubiksCube";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const clash = `"Clash Display", var(--font-heading), sans-serif`;
const satoshi = `"Satoshi", var(--font-heading), sans-serif`;

const lines = ["Driving blockchain", "adoption in the", "Midwest."];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sharpButton = {
  borderRadius: "2px",
  fontFamily: satoshi,
  fontWeight: "500",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  fontSize: "0.78rem",
  h: "48px",
  px: 6,
  display: "inline-flex",
  alignItems: "center",
  gap: 2,
};

export default function HomeHeroSplit() {
  const isMobile = useLayout();

  return (
    <Box
      position="relative"
      zIndex={1}
      overflow="hidden"
      minH="100dvh"
      fontFamily={satoshi}
      display="flex"
      alignItems="center"
      px={isMobile ? 4 : "1.25in"}
      pt={isMobile ? "120px" : "108px"}
      pb={isMobile ? 12 : 8}
    >
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        gap={isMobile ? 10 : 8}
        direction={isMobile ? "column" : "row"}
      >
        <Flex
          direction="column"
          align={isMobile ? "center" : "flex-start"}
          maxW={isMobile ? "100%" : "52%"}
          textAlign={isMobile ? "center" : "left"}
        >
          <Box
            w="fit-content"
            maxW="100%"
            alignSelf={isMobile ? "center" : "flex-start"}
          >
            <MotionBox
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              w="100%"
              mb={isMobile ? 1 : 2}
            >
              <Image
                src="/images/WebsiteAssets/skyline-line-art-transparent.png"
                alt=""
                w="100%"
                h="auto"
                display="block"
                pointerEvents="none"
              />
            </MotionBox>

            <Heading
              as="h1"
              fontFamily={clash}
              fontWeight="500"
              letterSpacing="-0.035em"
              lineHeight={1.02}
              color="white"
              fontSize={isMobile ? "2.7rem" : "clamp(3.4rem, 6.4vw, 5.6rem)"}
              mb={6}
              textAlign={isMobile ? "center" : "left"}
              w="max-content"
              maxW="100%"
            >
              {lines.map((line, i) => (
                <MotionBox
                  key={line}
                  as="span"
                  display="block"
                  w="max-content"
                  maxW="100%"
                  whiteSpace={isMobile ? "normal" : "nowrap"}
                  initial="hidden"
                  animate="show"
                  custom={i + 1}
                  variants={fadeUp}
                  color={i === 2 ? "#6E2A32" : "white"}
                >
                  {line}
                </MotionBox>
              ))}
            </Heading>
          </Box>

          <MotionBox initial="hidden" animate="show" custom={4} variants={fadeUp}>
            <Text
              color="rgba(215, 229, 240, 0.78)"
              fontSize={isMobile ? "md" : "lg"}
              lineHeight="1.75"
              maxW="34rem"
              mb={6}
            >
              A student-led organization of innovators at the University of Kansas working on open source research, industry-focused events, and technical workshops.
            </Text>
          </MotionBox>

          <MotionFlex
            gap={3}
            wrap="wrap"
            justify={isMobile ? "center" : "flex-start"}
            initial="hidden"
            animate="show"
            custom={6}
            variants={fadeUp}
          >
            <Button
              as={Link}
              href="/membership"
              {...sharpButton}
              bg="rgba(255,255,255,0.06)"
              color="white"
              border="1px solid rgba(255,255,255,0.14)"
              _hover={{
                textDecoration: "none",
                bg: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.28)",
                transform: "translateY(-1px)",
              }}
            >
              Join KUBI
              <Box as="span" ml={1} display="inline-flex">
                <FiArrowUpRight />
              </Box>
            </Button>
            <Button
              as={Link}
              href="/projects"
              {...sharpButton}
              variant="unstyled"
              bg="transparent"
              color="#D7E5F0"
              border="1px solid rgba(255,255,255,0.1)"
              _hover={{
                textDecoration: "none",
                borderColor: "rgba(255,255,255,0.28)",
                transform: "translateY(-1px)",
              }}
            >
              See our work
              <Box as="span" ml={1} display="inline-flex">
                <FiArrowUpRight />
              </Box>
            </Button>
          </MotionFlex>
        </Flex>

        <Box
          flexShrink={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={isMobile ? "100%" : "46%"}
        >
          <RubiksCube />
        </Box>
      </Flex>
    </Box>
  );
}
