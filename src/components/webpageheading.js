"use client";
import React from "react";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";
import { colors } from "./globalStyles";

const WebpageHeading = ({ heading }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Text
          fontSize="5xl"
          align="center"
          fontWeight="bold"
        >
          {heading}
        </Text>
      </motion.div>
      <hr></hr>
      <br></br>
    </>
  );
};

export default WebpageHeading;
