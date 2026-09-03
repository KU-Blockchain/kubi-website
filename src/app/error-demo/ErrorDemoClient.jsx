"use client";

import { useState } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { colors } from "@/styles/theme.js";

function Boom() {
  throw new Error("Intentional demo error for testing error.js");
}

export default function ErrorDemoClient() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    return <Boom />;
  }

  return (
    <Box py={10} px={4} maxW="32rem" mx="auto" textAlign="center">
      <Heading size="lg" mb={3} color="white">
        Error page demo
      </Heading>
      <Text color={colors.steel} mb={8} lineHeight="1.7">
        Dev-only helpers to preview custom error screens. This route returns 404 in production.
      </Text>
      <VStack spacing={3} align="stretch">
        <Button as={Link} href="/this-page-does-not-exist" variant="outline">
          Open 404 (not-found)
        </Button>
        <Button onClick={() => setShouldCrash(true)} variant="accent">
          Trigger 500 (error boundary)
        </Button>
        <Button as={Link} href="/" variant="ghost" color={colors.steel}>
          Back home
        </Button>
      </VStack>
    </Box>
  );
}
