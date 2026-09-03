"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import BlockchainCubeNetwork from "@/components/BlockchainCubeNetwork";

const clash = `"Clash Display", var(--font-heading), sans-serif`;
const satoshi = `"Satoshi", var(--font-heading), sans-serif`;

export default function NotFound() {
  return (
    <Box
      position="relative"
      minH="70vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      px={4}
      py={16}
    >
      <Box
        className="not-found-cube-bg"
        position="absolute"
        inset={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        opacity={0.72}
        pointerEvents="auto"
        zIndex={0}
      >
        <BlockchainCubeNetwork />
      </Box>

      <Flex
        position="relative"
        zIndex={1}
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        fontFamily={satoshi}
        pointerEvents="none"
      >
        <Text
          fontFamily={clash}
          fontWeight="500"
          letterSpacing="-0.04em"
          fontSize={{ base: "5rem", md: "7rem" }}
          lineHeight="0.9"
          color="white"
          mb={4}
          textShadow="0 8px 32px rgba(10, 10, 12, 0.65)"
        >
          404
        </Text>
        <Heading
          as="h1"
          fontFamily={clash}
          fontWeight="500"
          letterSpacing="-0.03em"
          fontSize={{ base: "1.75rem", md: "2.5rem" }}
          color="white"
          mb={8}
          textShadow="0 8px 32px rgba(10, 10, 12, 0.65)"
        >
          Page not found
        </Heading>
        <Button
          as={Link}
          href="/"
          pointerEvents="auto"
          bg="rgba(255,255,255,0.06)"
          color="white"
          border="1px solid rgba(255,255,255,0.14)"
          borderRadius="2px"
          fontFamily={satoshi}
          fontWeight="500"
          letterSpacing="0.04em"
          textTransform="uppercase"
          fontSize="0.7rem"
          h="38px"
          px={5}
          backdropFilter="blur(8px)"
          _hover={{
            textDecoration: "none",
            bg: "rgba(255,255,255,0.1)",
            borderColor: "rgba(255,255,255,0.28)",
          }}
        >
          Back to home
        </Button>
      </Flex>
    </Box>
  );
}
