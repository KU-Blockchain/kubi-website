"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import AccordionGallery from "@/components/ui/AccordionGallery";
import { colors } from "@/styles/theme.js";

const galleryProps = {
  trigger: "click",
  defaultIndex: 0,
  expandRatio: 0.42,
  height: 520,
  gap: 8,
  radius: 8,
  accentColor: "#9A7B2F",
  overlayColor: "#0A0A0C",
  textColor: "#ffffff",
  grayscale: true,
  parallax: 0,
  tilt: 0,
};

const toItems = (people) =>
  people.map((person) => ({
    image: person.headshot,
    label: person.name,
    alt: `${person.name}, ${person.title}`,
    person,
  }));

export default function PersonAccordion({ people, rows }) {
  const [selected, setSelected] = useState(null);
  const groups = rows || [people];

  return (
    <Box w="100%" my={0}>
      {groups.map((group, index) => (
        <Box key={index} mt={index === 0 ? 0 : 4}>
          <AccordionGallery
            {...galleryProps}
            items={toItems(group)}
            onSelect={(item) => setSelected(item.person)}
          />
        </Box>
      ))}
      <Text mt={3} fontSize="sm" color={colors.steel} textAlign="center">
        Click a photo to expand it and read their bio.
      </Text>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} size="lg" isCentered>
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent
          bg="rgba(24, 32, 60, 0.94)"
          color="white"
          border="1px solid rgba(180, 206, 239, 0.22)"
          borderRadius="8px"
        >
          {selected && (
            <>
              <Image
                src={selected.headshot}
                alt={selected.name}
                w="100%"
                h="280px"
                objectFit="contain"
                objectPosition="top"
                bg="#0A0A0C"
              />
              <ModalHeader pb={1}>
                <Heading size="lg" fontWeight="500">
                  {selected.name}
                </Heading>
                <Text mt={1} color={colors.cubeGold} fontSize="md">
                  {selected.title}
                </Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Text lineHeight="1.75" color={colors.ice} mb={5}>
                  {selected.longBio}
                </Text>
                <Box display="flex" gap={3} flexWrap="wrap">
                  {selected.linkedin && (
                    <Button as={Link} href={selected.linkedin} isExternal variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  )}
                  {selected.email && (
                    <Button as={Link} href={selected.email} variant="outline" size="sm">
                      Email
                    </Button>
                  )}
                </Box>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}
