'use client';
import React from "react";
import {
  Box,
  Card,
  Heading,
  CardBody,
  Flex,
  Link,
  Text,
  Button,
  VStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import SubscribeForm from "@/components/SubscribeForm";
import { colors } from "@/styles/theme.js";
import { useLayout } from "@/contexts/LayoutContext";

const DISCORD_URL = "https://discord.gg/GAznpHUzny";

const communityPhotos = [
  {
    src: "/images/membership/community-outdoor.png",
    alt: "Kansas Blockchain members together on campus",
  },
  {
    src: "/images/membership/community-nyc.png",
    alt: "Kansas Blockchain members traveling together",
  },
  {
    src: "/images/membership/community-blockathon.png",
    alt: "Kansas Blockchain community at Midwest Block-a-Thon",
  },
];

function JoinSteps({ titleSize = "2xl", stepSize = "xl" }) {
  return (
    <VStack spacing={2}>
      <Text fontSize={titleSize} align="center" fontWeight="bold" lineHeight="1.2">
        Steps to Join Kansas Blockchain:
      </Text>
      <Text fontSize={stepSize} align="center" fontWeight="bold" lineHeight="1.3">
        1. Join our{" "}
        <Link href={DISCORD_URL} isExternal color={colors.blue} fontWeight="800">
          Discord server
        </Link>
      </Text>
      <Text fontSize={stepSize} align="center" fontWeight="bold" lineHeight="1.3">
        2. Come to our{" "}
        <Link href="/events" color={colors.blue} fontWeight="800">
          next meeting!
        </Link>
      </Text>
    </VStack>
  );
}

function NewsletterCard({ blurb, compact = false }) {
  return (
    <Card
      p={0}
      flex="1"
      minH={0}
      display="flex"
      flexDirection="column"
      bg="rgba(24, 32, 60, 0.45)"
      color="white"
      border="1px solid rgba(180, 206, 239, 0.22)"
      _hover={{ transform: "none" }}
      id="newsletter"
    >
      <CardBody p={compact ? 5 : { base: 6, md: 8 }} flex="1" display="flex" flexDirection="column" justifyContent="center">
        <VStack spacing={compact ? 3 : 5} align="stretch" maxW="420px" mx="auto" w="100%">
          <Heading size={compact ? "md" : { base: "lg", md: "xl" }} textAlign="center">
            Subscribe to our mailing list
          </Heading>
          <SubscribeForm />
          <Text textAlign="center" fontSize="sm" color={colors.steel} lineHeight="1.5">
            {blurb}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
}

function EducationCohortCard({ compact = false }) {
  return (
    <Card
      p={compact ? 5 : { base: 5, md: 8 }}
      overflow="hidden"
      h="100%"
      display="flex"
      flexDirection="column"
      _hover={{ transform: "none" }}
    >
      <CardBody p={0} flex="1" display="flex" flexDirection="column" minH={0}>
        <VStack spacing={compact ? 3 : 5} align="stretch" flex="1" h="100%" minH={0}>
          <Heading size={compact ? "md" : { base: "lg", md: "xl" }} textAlign="center" flexShrink={0}>
            Education Cohort
          </Heading>
          <Box
            flex="1"
            w="100%"
            minH={compact ? "240px" : "220px"}
            maxH={compact ? "340px" : "300px"}
            borderRadius="8px"
            border="1px solid rgba(180, 206, 239, 0.22)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={2}
            px={3}
          >
            <Image
              src="/images/membership/education-cohort-graphic.png"
              alt="Kansas Blockchain education cohort illustration"
              maxW="100%"
              maxH="100%"
              w="auto"
              h="auto"
              objectFit="contain"
              objectPosition="center"
            />
          </Box>
          <Text textAlign="center" fontSize={compact ? "sm" : { base: "md", md: "lg" }} lineHeight="1.6" flexShrink={0}>
            A beginner-friendly program where students learn blockchain and Web3
            fundamentals together. From wallets and smart contracts to building your
            first decentralized app, no prior experience needed.
          </Text>
          <Text textAlign="center" fontSize="xs" fontWeight="semibold" color={colors.steel} lineHeight="1.5" flexShrink={0}>
            Applications open when the next cohort begins. Join our Discord to be the
            first to know!
          </Text>
          <Button isDisabled alignSelf="center" size="md" flexShrink={0}>
            Coming Soon
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default function MembershipPage() {
  const isMobile = useLayout();

  return (
    <Box>
      <Box
        h={{ base: "auto", md: "calc(100dvh - 132px)" }}
        display={{ base: "block", md: "flex" }}
        flexDirection={{ md: "column" }}
        minH={{ base: "auto", md: 0 }}
        pb={{ base: 10, md: 0 }}
      >
        <WebpageHeading heading={"Membership"} mb={isMobile ? 8 : 4} />

        {isMobile ? (
          <VStack spacing={10} align="stretch">
            <Card p={6} _hover={{ transform: "none" }}>
              <JoinSteps titleSize="2xl" stepSize="xl" />
            </Card>

            <NewsletterCard blurb="Subscribe for newsletters and quarterly organization updates." />

            <EducationCohortCard />
          </VStack>
        ) : (
          <Flex flex="1" gap={6} align="stretch" minH={0}>
            <VStack spacing={4} align="stretch" flex="1.15" minH={0}>
              <Card p={5} flexShrink={0} _hover={{ transform: "none" }}>
                <JoinSteps titleSize="2xl" stepSize="lg" />
              </Card>

              <NewsletterCard
                compact
                blurb="Subscribe for weekly newsletters and quarterly organization updates."
              />
            </VStack>

            <Box flex="0.85" minH={0} display="flex">
              <EducationCohortCard compact />
            </Box>
          </Flex>
        )}
      </Box>

      <Box mt={{ base: 12, md: 10 }} pb={10}>
        {isMobile ? (
          <VStack spacing={4}>
            {communityPhotos.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                w="100%"
                maxH="260px"
                objectFit="cover"
                borderRadius="8px"
                boxShadow="0 12px 28px rgba(0, 0, 0, 0.28)"
              />
            ))}
          </VStack>
        ) : (
          <SimpleGrid columns={3} spacing={5}>
            {communityPhotos.map((photo) => (
              <Box
                key={photo.src}
                overflow="hidden"
                borderRadius="8px"
                boxShadow="0 12px 28px rgba(0, 0, 0, 0.28)"
                bg="rgba(24, 32, 60, 0.45)"
                transition="transform 0.25s ease"
                _hover={{ transform: "translateY(-6px)" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  w="100%"
                  h="280px"
                  objectFit="cover"
                />
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
}
