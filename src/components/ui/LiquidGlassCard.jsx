"use client";

import React from "react";
import { Box } from "@chakra-ui/react";

export function LiquidGlassCard({ children, ...props }) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="rgba(24, 32, 60, 0.45)"
      backdropFilter="blur(12px)"
      borderRadius="8px"
      border="1px solid rgba(180, 206, 239, 0.22)"
      boxShadow="0 18px 40px rgba(11, 14, 20, 0.18)"
      {...props}
    >
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}

export default LiquidGlassCard;
