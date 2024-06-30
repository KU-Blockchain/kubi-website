"use client";

import { motion } from "framer-motion";
import { Flex, Text, Button, VStack, HStack } from "@chakra-ui/react";
import Image from "next/image";

function ProjectCard({ title, description, preview_image, link }) {
  if (link == null) {
    link = "https://www.kublockchain.com";
  }
  return (
    <>
      <motion.div>
        <Text fontSize="3xl">{title}</Text>
        <HStack>
          <Image
            src={preview_image}
            alt={`${title} Image`}
            width={500}
            height={150}
            layout="fixed"
            style={{ borderRadius: "10%" }}
          />
          <VStack>
            <Text fontSize="xl">{description}</Text>
            <Button
              colorScheme="linkedin"
              onClick={() => window.open(link, "_blank")}
            >
              View Project
            </Button>
          </VStack>
        </HStack>
      </motion.div>
    </>
  );
}
export default ProjectCard;
