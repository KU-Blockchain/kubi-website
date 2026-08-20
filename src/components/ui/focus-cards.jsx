"use client";

import React, { useState } from "react";
import { Box, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";

function FocusCard({ card, index, hovered, setHovered }) {
  const isDimmed = hovered !== null && hovered !== index;
  const isActive = hovered === index;

  return (
    <Box
      as={card.href ? Link : "div"}
      href={card.href}
      isExternal={card.isExternal}
      _hover={{ textDecoration: "none" }}
      position="relative"
      overflow="hidden"
      borderRadius="8px"
      bg="rgba(24, 32, 60, 0.45)"
      border="1px solid rgba(180, 206, 239, 0.22)"
      h={{ base: "260px", md: "380px" }}
      w="100%"
      cursor="pointer"
      display="block"
      transition="all 0.3s ease-out"
      filter={isDimmed ? "blur(4px)" : "none"}
      transform={isDimmed ? "scale(0.98)" : "scale(1)"}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <Image
        src={card.src}
        alt={card.title}
        position="absolute"
        inset={0}
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="center"
      />
      <Box
        position="absolute"
        inset={0}
        bg="blackAlpha.700"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        py={8}
        px={5}
        opacity={isActive ? 1 : 0}
        transition="opacity 0.3s ease"
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="500"
          color="white"
          letterSpacing="-0.02em"
          mb={card.description ? 2 : 0}
        >
          {card.title}
        </Text>
        {card.description && (
          <Text fontSize="sm" color="rgba(215, 229, 240, 0.88)" lineHeight="1.6" noOfLines={5}>
            {card.description}
          </Text>
        )}
      </Box>
    </Box>
  );
}

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
      {cards.map((card, index) => (
        <FocusCard
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </SimpleGrid>
  );
}

export default FocusCards;
