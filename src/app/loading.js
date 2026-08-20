"use client";

import { Flex } from "@chakra-ui/react";
import CubeLoader from "@/components/ui/CubeLoader";

export default function Loading() {
  return (
    <Flex minH="50vh" align="center" justify="center">
      <CubeLoader size="lg" />
    </Flex>
  );
}
