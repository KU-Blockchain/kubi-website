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
  HStack,
  VStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import SubscribeForm from "@/components/SubscribeForm";
import { colors } from "@/styles/theme.js";
import { useLayout } from "@/contexts/LayoutContext";

const communityPhotos = [
  {
    src: "/images/membership/community-outdoor.png",
    alt: "KUBI members together on campus",
  },
  {
    src: "/images/membership/community-nyc.png",
    alt: "KUBI members traveling together",
  },
  {
    src: "/images/membership/community-blockathon.png",
    alt: "KUBI community at Midwest Block-a-Thon",
  },
];

export default function MembershipPage() {
  const isMobile = useLayout();

  return (
    <Box>
      <WebpageHeading heading={"Membership"} />

      {isMobile ? (
        <VStack spacing={10} align="stretch">
          <VStack spacing={3}>
            <Text fontSize="2xl" align="center" fontWeight="bold">
              Steps to Join KUBI:
            </Text>
            <Text fontSize="xl" align="center" fontWeight="bold">
              1. Join our Discord server
            </Text>
            <Button as="a" href="https://discord.gg/GAznpHUzny" target="_blank">
              Discord
            </Button>
            <Text fontSize="xl" align="center" fontWeight="bold">
              2. Come to our <Link href="/events">next meeting!</Link>
            </Text>
          </VStack>

          <Card p={0}>
            <CardBody>
              <Flex alignItems="center" direction="column" justify="center" h="100%">
                <Heading size="lg" mb={2} textAlign="center">
                  Subscribe to our mailing list
                </Heading>
                <Box py={6} style={{ width: "80%" }}>
                  <SubscribeForm />
                  <Text>Subscribe for newsletters and quarterly organization updates.</Text>
                </Box>
              </Flex>
            </CardBody>
          </Card>

          <Card p={5} overflow="visible">
            <CardBody>
              <VStack spacing={5} align="stretch">
                <Heading size="lg" textAlign="center">
                  Education Cohort
                </Heading>
                <Image
                  src="/images/membership/education-cohort.png"
                  alt="Education Cohort"
                  maxW="220px"
                  w="auto"
                  h="auto"
                  flexShrink={0}
                  objectFit="contain"
                />
                <Text textAlign="center" lineHeight="1.7" fontWeight="normal">
                  A beginner-friendly program where students learn blockchain and Web3
                  fundamentals together. From wallets and smart contracts to building your
                  first decentralized app, no prior experience needed.
                </Text>
                <Text textAlign="center" fontSize="sm" fontWeight="semibold">
                  Applications open when the next cohort begins. Join our Discord to be the
                  first to know!
                </Text>
                <Button isDisabled alignSelf="center">
                  Coming Soon
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      ) : (
        <Flex gap={10} align="stretch" mb={10}>
          <VStack spacing={8} align="stretch" flex="1.15">
            <VStack spacing={3}>
              <Text fontSize="3xl" align="center" fontWeight="bold">
                Steps to Join KUBI:
              </Text>
              <Text fontSize="2xl" align="center" fontWeight="bold">
                1. Join our Discord server
              </Text>
              <Button as="a" href="https://discord.gg/GAznpHUzny" target="_blank">
                Discord
              </Button>
              <Text fontSize="2xl" align="center" fontWeight="bold">
                2. Come to our <Link href="/events">next meeting!</Link>
              </Text>
            </VStack>

            <Card
              p={0}
              flex="1"
              display="flex"
              style={{
                borderRadius: "0px",
                backgroundColor: colors.headerBackground,
                color: "white",
              }}
              id="newsletter"
            >
              <HStack
                flex="1"
                w="100%"
                h="100%"
                align="center"
                justify="center"
                px={4}
                py={6}
              >
                <CardBody display="flex" alignItems="center" justifyContent="center">
                  <Flex
                    alignItems="center"
                    direction="column"
                    justify="center"
                    textAlign="center"
                    w="100%"
                  >
                    <Heading size="xl" mb={4} textAlign="center">
                      Subscribe to our mailing list
                    </Heading>
                    <Box py={2} style={{ width: "80%" }}>
                      <SubscribeForm />
                      <Text>
                        Subscribe for weekly newsletters and quarterly organization updates.
                      </Text>
                    </Box>
                  </Flex>
                </CardBody>
                <Image
                  width="35%"
                  maxW="220px"
                  src="/images/WebsiteAssets/Blockchalk-450.png"
                  alt="KUBI"
                />
              </HStack>
            </Card>
          </VStack>

          <Card
            p={8}
            flex="0.85"
            display="flex"
            overflow="visible"
            alignSelf="stretch"
            minH="min-content"
            sx={{ overflow: "visible !important" }}
          >
            <CardBody display="flex" flex="1" overflow="visible" sx={{ overflow: "visible !important" }}>
              <VStack spacing={5} align="center" justify="center" h="100%" w="100%">
                <Heading size="xl" textAlign="center">
                  Education Cohort
                </Heading>
                <Image
                  src="/images/membership/education-cohort.png"
                  alt="Education Cohort"
                  maxW="260px"
                  w="auto"
                  h="auto"
                  flexShrink={0}
                  objectFit="contain"
                />
                <Text textAlign="center" fontSize="lg" lineHeight="1.7" fontWeight="normal">
                  A beginner-friendly program where students learn blockchain and Web3
                  fundamentals together. From wallets and smart contracts to building your
                  first decentralized app, no prior experience needed.
                </Text>
                <Text textAlign="center" fontSize="md" fontWeight="semibold">
                  Applications open when the next cohort begins. Join our Discord to be the
                  first to know!
                </Text>
                <Button isDisabled alignSelf="center" size="lg">
                  Coming Soon
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </Flex>
      )}

      <Box mt={isMobile ? 10 : 0}>
        <Heading
          size={isMobile ? "lg" : "xl"}
          textAlign="center"
          mb={6}
          color={colors.primaryBlue}
        >
          Meet the Community
        </Heading>

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
                borderRadius="lg"
                boxShadow="md"
              />
            ))}
          </VStack>
        ) : (
          <SimpleGrid columns={3} spacing={5}>
            {communityPhotos.map((photo) => (
              <Box
                key={photo.src}
                overflow="hidden"
                borderRadius="lg"
                boxShadow="md"
                bg="white"
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
