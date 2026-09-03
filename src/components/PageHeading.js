"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";
import { colors } from "@/styles/theme.js";

const WebpageHeading = ({ heading, subtitle, mb = 8 }) => {
  const words = String(heading).trim().split(/\s+/);

  return (
    <Box mb={mb} textAlign="center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          align="center"
          fontWeight="500"
          fontFamily={`"Clash Display", sans-serif`}
          letterSpacing="-0.035em"
          color="white"
        >
          {words.map((word, index) => (
            <React.Fragment key={`${word}-${index}`}>
              {index > 0 && (
                <Box as="span" display="inline-block" w="0.35em" aria-hidden="true" />
              )}
              {word}
            </React.Fragment>
          ))}
        </Text>
        {subtitle && (
          <Text mt={3} color={colors.ice} opacity={0.78} fontSize={{ base: "md", md: "lg" }}>
            {subtitle}
          </Text>
        )}
      </motion.div>
    </Box>
  );
};

export default WebpageHeading;
