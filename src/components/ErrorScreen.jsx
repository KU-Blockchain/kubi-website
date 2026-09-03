"use client";

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { colors } from "@/styles/theme.js";

const clash = `"Clash Display", var(--font-heading), sans-serif`;
const satoshi = `"Satoshi", var(--font-heading), sans-serif`;

export default function ErrorScreen({
  code = "404",
  title = "Page not found",
  message = "That route doesn’t exist — or it moved.",
  primaryHref = "/",
  primaryLabel = "Back to home",
  secondaryAction = null,
}) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
      minH="60vh"
      px={4}
      py={16}
      fontFamily={satoshi}
    >
      <Text
        fontFamily={clash}
        fontWeight="500"
        letterSpacing="-0.04em"
        fontSize={{ base: "5rem", md: "7rem" }}
        lineHeight="0.9"
        color={colors.cubeGold}
        mb={4}
      >
        {code}
      </Text>
      <Heading
        as="h1"
        fontFamily={clash}
        fontWeight="500"
        letterSpacing="-0.03em"
        fontSize={{ base: "1.75rem", md: "2.5rem" }}
        color="white"
        mb={3}
      >
        {title}
      </Heading>
      <Text
        maxW="28rem"
        color={colors.steel}
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="1.7"
        mb={8}
      >
        {message}
      </Text>
      <Flex gap={3} wrap="wrap" justify="center">
        <Button
          as={Link}
          href={primaryHref}
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
          _hover={{
            textDecoration: "none",
            bg: "rgba(255,255,255,0.1)",
            borderColor: "rgba(255,255,255,0.28)",
          }}
        >
          {primaryLabel}
        </Button>
        {secondaryAction}
      </Flex>
    </Flex>
  );
}

export function ErrorRetryButton({ onClick, label = "Try again" }) {
  return (
    <Button
      onClick={onClick}
      variant="unstyled"
      bg="transparent"
      color="#D7E5F0"
      border="1px solid rgba(255,255,255,0.1)"
      borderRadius="2px"
      fontFamily={satoshi}
      fontWeight="500"
      letterSpacing="0.04em"
      textTransform="uppercase"
      fontSize="0.7rem"
      h="38px"
      px={5}
      display="inline-flex"
      alignItems="center"
      _hover={{
        borderColor: "rgba(255,255,255,0.28)",
      }}
    >
      {label}
    </Button>
  );
}
