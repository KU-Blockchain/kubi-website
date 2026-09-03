"use client";

import { Box, Badge, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "@/styles/theme.js";
import { useLayout } from "@/contexts/LayoutContext";

const MotionBox = motion(Box);

export default function HistoryTimeline({ milestones }) {
  const isMobile = useLayout();

  return (
    <VStack spacing={0} align="stretch" w="100%" maxW="760px" mx="auto" position="relative">
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={isMobile ? "11px" : "15px"}
        w="2px"
        bg="rgba(180, 206, 239, 0.22)"
        aria-hidden="true"
      />

      {milestones.map((item, index) => (
        <MotionBox
          key={`${item.year}-${item.title}`}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
          display="flex"
          gap={isMobile ? 4 : 6}
          pb={index === milestones.length - 1 ? 0 : isMobile ? 8 : 10}
          pl={isMobile ? 0 : 1}
        >
          <Box
            flexShrink={0}
            w={isMobile ? "24px" : "32px"}
            display="flex"
            justifyContent="center"
            pt={1}
          >
            <Box
              w={isMobile ? "12px" : "14px"}
              h={isMobile ? "12px" : "14px"}
              borderRadius="full"
              bg={colors.cubeGold}
              border="2px solid #0A0A0C"
              boxShadow={`0 0 0 3px rgba(154, 123, 47, 0.25)`}
              zIndex={1}
            />
          </Box>

          <Box
            flex="1"
            bg="rgba(24, 32, 60, 0.45)"
            border="1px solid rgba(180, 206, 239, 0.22)"
            borderRadius="8px"
            p={isMobile ? 4 : 6}
            backdropFilter="blur(12px)"
          >
            <Badge
              bg={colors.cubeGold}
              color="#0A0A0C"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
              mb={3}
            >
              {item.year}
            </Badge>
            <Heading as="h3" size={isMobile ? "sm" : "md"} color="white" mb={2} fontWeight="500">
              {item.title}
            </Heading>
            <Text fontSize={isMobile ? "sm" : "md"} lineHeight="1.75" color={colors.ice}>
              {item.description}
            </Text>
          </Box>
        </MotionBox>
      ))}
    </VStack>
  );
}
