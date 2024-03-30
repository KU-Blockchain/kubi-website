'use client'
import React from 'react';
import {motion} from "framer-motion";
import { Text } from "@chakra-ui/react";

const WebpageHeading = ({heading}) => { 
  return (
    <>
    <motion.div
      initial={{ opacity: 0, x:300}}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}>
        <Text fontSize='6xl' align="center" color="blue.500" fontWeight="bold">{heading}</Text>
    </motion.div>
    <hr></hr>
    </>
  );
};

export default WebpageHeading;