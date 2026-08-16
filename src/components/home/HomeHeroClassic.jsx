"use client";

import React from "react";
import { Text, Box, Button, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { useLayout } from "@/contexts/LayoutContext";
import { colors } from "@/styles/theme.js";
import { motion } from "framer-motion";
import RubiksCube from "@/components/RubiksCube";

const MotionBox = motion(Box);

/** Previous two-column hero with Rubik's cube. Swap this back in page.js if needed. */
export default function HomeHeroClassic() {
  const isMobile = useLayout();

  return (
    <Box
      position="relative"
      zIndex={1}
      overflow="hidden"
      minH="100dvh"
      display="flex"
      alignItems="center"
      px={isMobile ? "6%" : "8%"}
      pt={isMobile ? "120px" : "108px"}
      pb={isMobile ? 12 : 8}
    >
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        gap={isMobile ? 8 : 12}
        direction={isMobile ? "column" : "row"}
      >
        <VStack spacing={6} align={isMobile ? "center" : "flex-start"} maxW={isMobile ? "100%" : "48%"}>
          <Box
            px={4}
            py={1.5}
            border="1px solid rgba(180, 206, 239, 0.45)"
            borderRadius="full"
            color={colors.ice}
            fontSize="sm"
            letterSpacing="0.14em"
            textTransform="uppercase"
            fontWeight="600"
          >
            KU Blockchain Institute
          </Box>

          <MotionBox
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              textAlign={isMobile ? "center" : "left"}
              fontSize={isMobile ? "3.2rem" : "5rem"}
              lineHeight={1.05}
              color="white"
              fontWeight="800"
            >
              Driving blockchain adoption{" "}
              <Box as="span" color={colors.red}>in the Midwest.</Box>
            </Heading>
          </MotionBox>

          <Text
            textAlign={isMobile ? "center" : "left"}
            fontSize={isMobile ? "md" : "xl"}
            color={colors.ice}
            maxW="640px"
            lineHeight="1.7"
          >
            A student-led organization of innovators at the University of Kansas working on open source research projects, industry-focused events, and technical workshops.
          </Text>

          <Flex gap={4} wrap="wrap" justify={isMobile ? "center" : "flex-start"} pt={2}>
            <Button as={Link} href="/membership" variant="accent" size="lg" _hover={{ textDecoration: "none" }}>
              Join KUBI
            </Button>
            <Button as={Link} href="/projects" variant="outline" size="lg" color="white" borderColor="whiteAlpha.600" _hover={{ bg: "whiteAlpha.200", textDecoration: "none" }}>
              See our work
            </Button>
          </Flex>
        </VStack>

        <Box
          flexShrink={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={isMobile ? "100%" : "50%"}
        >
          <RubiksCube />
        </Box>
      </Flex>
    </Box>
  );
}
