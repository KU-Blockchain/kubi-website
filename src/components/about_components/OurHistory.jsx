"use client";
import React from "react";
import {
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  Badge,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";
import { colors } from "@/styles/theme.js";
import { useLayout } from "@/contexts/LayoutContext";
import HistoryCarousel from "./HistoryCarousel";

const milestones = [
  {
    year: "2018",
    title: "Founded at KU",
    description:
      "Students founded the KU Blockchain Institute as a student-led organization at the University of Kansas, focused on blockchain research, education, and development. The institute is hosted by the Institute for Information Sciences (I2S).",
  },
  {
    year: "2019",
    title: "Ripple UBRI support arrives",
    description:
      "KU joined Ripple’s University Blockchain Research Initiative with a $2 million gift ($400,000 per year for five years) to the Information & Telecommunication Technology Center. The gift supported faculty blockchain research and the student-led KU Blockchain Institute, and helped fuel early industry conferences on campus.",
  },
  {
    year: "2022",
    title: "Student research initiative expands",
    description:
      "KUBI launched the KU Blockchain Research Initiative to give members structured learning opportunities, faculty and peer mentorship, technical help, and a path to funding for hands-on blockchain projects.",
  },
  {
    year: "2023–2024",
    title: "DAO and interdisciplinary projects",
    description:
      "Members built the KUBI DAO for tasks, learning rewards, and on-chain club governance—including elections. In the same period, KUBI students contributed to interdisciplinary work such as the Spencer Museum of Art blockchain collaboration.",
  },
  {
    year: "2024",
    title: "Kansas Blockchain Fellowship launches",
    description:
      "KUBI students launched the Kansas Blockchain Fellowship, a seven-week summer scholarship program and talent incubator designed to prepare Midwest students for careers in blockchain and web3.",
  },
  {
    year: "2025–2026",
    title: "Midwest Block-a-Thon grows",
    description:
      "KUBI hosted the first Midwest Block-a-Thon in 2025 and followed with the second annual hackathon in 2026, expanding regional Web3 education alongside cohort capstones and continued DAO participation.",
  },
];

export default function OurHistory() {
  const isMobile = useLayout();

  return (
    <VStack spacing={10} align="stretch">
      <Box maxW="100%" mx="auto" textAlign="center">
        <Text fontSize={isMobile ? "md" : "lg"} lineHeight="1.7">
          The KU Blockchain Institute is a student-led technology initiative founded in 2018
          at the University of Kansas. If you are new to the club, this timeline is a quick
          look at how we grew from a small campus group into a community for research,
          education, events, and open-source Web3 projects.
        </Text>
      </Box>

      <HistoryCarousel milestones={milestones} />

      <Box
        maxW="100%"
        mx="auto"
        w="100%"
        bg="rgba(24, 32, 60, 0.45)"
        borderRadius="8px"
        p={isMobile ? 4 : 6}
        backdropFilter="blur(10px)"
        border="1px solid rgba(180, 206, 239, 0.22)"
      >
        <Heading as="h3" size="md" mb={4} color="white">
          Research roots: UBRI at KU
        </Heading>

        {isMobile ? (
          <VStack spacing={4} align="stretch">
            <Image
              width="40%"
              mx="auto"
              objectFit="cover"
              borderRadius="full"
              src="/images/WebsiteAssets/perry-alexander2.jpg"
              alt="Dr. Perry Alexander"
            />
            <Box>
              <Text fontWeight={600} fontSize="xl" mb={1}>
                The University Blockchain Research Initiative (UBRI)
              </Text>
              <Text fontWeight={500} fontSize="md" mb={2}>
                Dr. Perry Alexander
              </Text>
              <HStack mb={3} spacing={2}>
                <Link href="mailto:palexand@ku.edu">
                  <Badge variant="outline">Contact</Badge>
                </Link>
                <Link href="https://perry.alexander.name/" isExternal>
                  <Badge variant="outline">Personal Website</Badge>
                </Link>
              </HStack>
              <Text fontSize="sm" lineHeight="1.7" mb={4}>
                Dr. Perry Alexander is The AT&T Foundation Distinguished Professor of Electrical
                Engineering and Computer Science and Director of the Information and
                Telecommunication Technology Center at The University of Kansas. He oversees the
                UBRI grant of $2 million donated by Ripple for blockchain research and development
                at KU. His research interests include system-level modeling, formal verification,
                language semantics, and trusted computing.
              </Text>
              <Button
                size="sm"
                onClick={() =>
                  window.open(
                    "https://ripple.com/insights/on-campus-university-of-kansas-emphasizes-interdisciplinary-blockchain-study-for-budding-entrepreneurs/",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </Box>
          </VStack>
        ) : (
          <HStack align="flex-start" spacing={6}>
            <Box w="18%" flexShrink={0}>
              <Image
                width="100%"
                objectFit="cover"
                borderRadius="full"
                src="/images/WebsiteAssets/perry-alexander2.jpg"
                alt="Dr. Perry Alexander"
              />
            </Box>
            <VStack align="flex-start" spacing={2}>
              <Text fontWeight={600} fontSize="xl">
                The University Blockchain Research Initiative (UBRI)
              </Text>
              <Text fontWeight={500} fontSize="md">
                Dr. Perry Alexander{" "}
                <Link href="mailto:palexand@ku.edu">
                  <Badge variant="outline">Contact</Badge>
                </Link>{" "}
                <Link href="https://perry.alexander.name/" isExternal>
                  <Badge variant="outline">Personal Website</Badge>
                </Link>
              </Text>
              <Text fontSize="md" lineHeight="1.7">
                Dr. Perry Alexander is The AT&T Foundation Distinguished Professor of Electrical
                Engineering and Computer Science and Director of the Information and
                Telecommunication Technology Center at The University of Kansas. He oversees the
                UBRI grant of $2 million donated by Ripple for blockchain research and development
                at KU. His research interests include system-level modeling, formal verification,
                language semantics, and trusted computing.
              </Text>
              <Button
                mt={2}
                onClick={() =>
                  window.open(
                    "https://ripple.com/insights/on-campus-university-of-kansas-emphasizes-interdisciplinary-blockchain-study-for-budding-entrepreneurs/",
                    "_blank"
                  )
                }
              >
                Learn More
              </Button>
            </VStack>
          </HStack>
        )}
      </Box>
    </VStack>
  );
}
