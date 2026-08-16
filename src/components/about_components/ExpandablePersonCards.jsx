"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { colors } from "@/styles/theme.js";

export default function ExpandablePersonCards({ people }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const ctaHref = (person) => person.linkedin || person.email || null;
  const ctaLabel = (person) => (person.linkedin ? "LinkedIn" : person.email ? "Email" : "View");

  return (
    <>
      <AnimatePresence>
        {active && (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            position="fixed"
            inset={0}
            bg="blackAlpha.500"
            h="100%"
            w="100%"
            zIndex={20}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <Flex
            position="fixed"
            inset={0}
            placeItems="center"
            justify="center"
            align="center"
            zIndex={30}
            px={4}
          >
            <Box
              as={motion.button}
              key={`close-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              position="absolute"
              top={{ base: 3, md: 6 }}
              right={{ base: 3, md: 8 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="rgba(255, 255, 255, 0.06)"
              border="1px solid rgba(255,255,255,0.12)"
              borderRadius="full"
              h="32px"
              w="32px"
              onClick={() => setActive(null)}
              zIndex={31}
              color="white"
            >
              <CloseIcon />
            </Box>

            <Box
              as={motion.div}
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              w="100%"
              maxW="500px"
              h={{ base: "100%", md: "fit-content" }}
              maxH={{ md: "90%" }}
              display="flex"
              flexDirection="column"
              bg="rgba(18, 18, 20, 0.92)"
              border="1px solid rgba(180, 206, 239, 0.22)"
              borderRadius={{ base: 0, sm: "8px" }}
              overflow="hidden"
              boxShadow="0 24px 60px rgba(0, 0, 0, 0.45)"
              backdropFilter="blur(18px)"
            >
              <Box as={motion.div} layoutId={`image-${active.name}-${id}`}>
                <Image
                  src={active.headshot}
                  alt={active.name}
                  w="100%"
                  h="320px"
                  objectFit="cover"
                  objectPosition="top"
                />
              </Box>

              <Box>
                <Flex justify="space-between" align="flex-start" p={4} gap={4}>
                  <Box>
                    <Heading
                      as={motion.h3}
                      layoutId={`title-${active.name}-${id}`}
                      size="md"
                      color="white"
                    >
                      {active.name}
                    </Heading>
                    <Text
                      as={motion.p}
                      layoutId={`role-${active.name}-${id}`}
                      color={colors.cubeGold}
                      fontWeight="600"
                      mt={1}
                    >
                      {active.title}
                    </Text>
                  </Box>

                  {ctaHref(active) && (
                    <Link
                      as={motion.a}
                      layoutId={`button-${active.name}-${id}`}
                      href={ctaHref(active)}
                      target="_blank"
                      rel="noopener noreferrer"
                      px={4}
                      py={3}
                      fontSize="sm"
                      borderRadius="2px"
                      fontWeight="500"
                      bg="rgba(255,255,255,0.08)"
                      color="white"
                      border="1px solid rgba(255,255,255,0.14)"
                      _hover={{ textDecoration: "none", bg: "rgba(255,255,255,0.14)" }}
                      flexShrink={0}
                    >
                      {ctaLabel(active)}
                    </Link>
                  )}
                </Flex>

                <Box pt={2} px={4} pb={6} position="relative">
                  <Box
                    as={motion.div}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    color={colors.ice}
                    fontSize={{ base: "sm", md: "md" }}
                    maxH={{ base: "160px", md: "none" }}
                    overflowY="auto"
                    sx={{
                      scrollbarWidth: "none",
                      "&::-webkit-scrollbar": { display: "none" },
                    }}
                  >
                    <Text lineHeight="1.75">{active.longBio}</Text>
                    {active.linkedin && active.email && (
                      <Link
                        href={active.email}
                        mt={4}
                        display="inline-block"
                        color={colors.cubeGold}
                        fontWeight="600"
                      >
                        Email
                      </Link>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        ) : null}
      </AnimatePresence>

      <Flex w="100%" justify="center">
      <Box
        as="ul"
        w="100%"
        listStyleType="none"
        p={0}
        m={0}
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={4}
      >
        {people.map((person) => (
          <Box
            as={motion.li}
            layoutId={`card-${person.name}-${id}`}
            key={`card-${person.name}-${id}`}
            onClick={() => setActive(person)}
            px={5}
            py={5}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap={5}
            borderRadius="18px"
            cursor="pointer"
            bg="rgba(24, 32, 60, 0.45)"
            border="1px solid rgba(180, 206, 239, 0.22)"
            backdropFilter="blur(12px)"
            _hover={{ bg: "whiteAlpha.200" }}
            transition="background 0.2s ease"
          >
            <Flex gap={4} align="center" minW={0} flex="1">
              <Box as={motion.div} layoutId={`image-${person.name}-${id}`} flexShrink={0}>
                <Image
                  src={person.headshot}
                  alt={person.name}
                  h="88px"
                  w="88px"
                  borderRadius="14px"
                  objectFit="cover"
                  objectPosition="top"
                />
              </Box>
              <Box minW={0}>
                <Heading
                  as={motion.h3}
                  layoutId={`title-${person.name}-${id}`}
                  size="md"
                  color="white"
                  fontWeight="600"
                  noOfLines={1}
                >
                  {person.name}
                </Heading>
                <Text
                  as={motion.p}
                  layoutId={`role-${person.name}-${id}`}
                  color={colors.ice}
                  opacity={0.85}
                  fontSize="md"
                  noOfLines={2}
                >
                  {person.title}
                </Text>
              </Box>
            </Flex>

            <Box
              as={motion.button}
              layoutId={`button-${person.name}-${id}`}
              px={5}
              py={2}
              fontSize="md"
              borderRadius="2px"
              fontWeight="500"
              bg="rgba(255,255,255,0.08)"
              color="white"
              border="1px solid rgba(255,255,255,0.14)"
              cursor="pointer"
              flexShrink={0}
              _hover={{ bg: "rgba(255,255,255,0.14)" }}
            >
              View
            </Box>
          </Box>
        ))}
      </Box>
      </Flex>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <Box
      as={motion.svg}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      h="16px"
      w="16px"
      color="white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </Box>
  );
};
