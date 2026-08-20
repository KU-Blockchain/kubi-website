'use client'
import React, { useMemo, useState } from "react";
import {
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Image,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import { useLayout } from "@/contexts/LayoutContext";
import ScrollDownButton from "@/components/ui/ScrollDownButton";
import CircularGallery from "@/components/ui/CircularGallery";

export default function EventsPage() {
  const isMobile = useLayout();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);

  const events = useMemo(() => [
    {
      image: "/images/eventimages/ethdenver2026.png",
      text: "The world’s largest and longest-running Ethereum #BUIDLathon, held in Denver, Colorado. ETHDenver brings together developers, founders, and innovators from around the globe for a week of hackathons, workshops, talks, and networking around open-source blockchain technology. KUBI members attended the 2026 “New #BUIDL City” edition to learn, build, and connect with the broader Ethereum community.",
      heading: "ETHDenver 2026"
    },
    {
      image: "/images/eventimages/university-blockchain-conference-2025.png",
      text: "KUBI represented the University of Kansas at the University Blockchain Conference 2025, joining student blockchain organizations and industry sponsors from across the country. Members networked with leading Web3 companies, attended talks, and showcased the work coming out of our community in the Midwest.",
      heading: "University Blockchain Conference 2025"
    },
    {
      image: "/images/eventimages/ethdenver2024.jpg",
      text: "The premier Ethereum event in Denver, Colorado, bringing together blockchain enthusiasts, developers, and innovators worldwide. Explore workshops, hackathons, and networking opportunities while immersing yourself in the latest in decentralized technology. Join a vibrant community driving the future of blockchain innovation.",
      heading: "ETHDenver 2024"
    },
    {
      image: "/images/eventimages/hacknight.JPG",
      text: "This semester's hacknight was a presentation from Tej (VP Engineering) and Micah (Director of Development) about tea.xyz, a platform meant to incentivize and reward open-source contributions, and Internet Computer, a blockchain-based cloud computing platform.",
      heading: "KUBI HackNight"
    },
    {
      image: "/images/eventimages/blocktalkandbreakfast.jpg",
      text: "Blocktalk and Breakfast is a bi-semesterly gathering where members of our community come together to delve into the forefront of blockchain technology while sharing a meal. This event warmly welcomes all students and faculty to participate in enlightening discussions and enjoyable dining experiences.",
      heading: "BlockTalk and Breakfast"
    },
    {
      image: "/images/eventimages/dragonchain.jpg",
      text: "Visited by Joe Roets, the founder of DragonChain, this event was a unique opportunity to learn about the latest in blockchain technology from an industry expert. Joe shared his insights on the future of blockchain and the potential of DragonChain to revolutionize the industry.",
      heading: "Industry Highlight: DragonChain"
    },
  ], []);

  const galleryItems = useMemo(
    () => events.map((event) => ({ image: event.image, text: event.heading, detail: event.text })),
    [events]
  );

  const openEvent = (item) => {
    setSelected(item);
    onOpen();
  };

  return (
    <Box>
      <WebpageHeading heading={"Events"} />

      {isMobile ? (
        <Accordion allowToggle mb={6} bg="rgba(24, 32, 60, 0.45)" borderRadius="8px" overflow="hidden" border="1px solid rgba(180, 206, 239, 0.22)">
          <AccordionItem border="none">
            <AccordionButton>
              <Box flex="1" textAlign="center">
                <Text fontSize="2xl" fontWeight={700}>Follow our Calendar</Text>
              </Box>
            </AccordionButton>
            <AccordionPanel>
              <Center>
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=ku.blockchain.institute%40gmail.com&ctz=America%2FChicago"
                  style={{ border: 0, borderRadius: "12px" }}
                  width="800"
                  height="600"
                ></iframe>
              </Center>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <Center mb={6}>
          <Box
            w="100%"
            bg="rgba(24, 32, 60, 0.45)"
            borderRadius="8px"
            overflow="hidden"
            border="1px solid rgba(180, 206, 239, 0.22)"
            p={3}
          >
            <iframe src="https://embed.styledcalendar.com/#MjFRXlTG1mAbqA5XgGxc" title="Styled Calendar" className="styled-calendar-container" style={{width:"100%", height:"654px", border:"none"}} data-cy="calendar-embed-iframe"></iframe>
            <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
          </Box>
        </Center>
      )}

      <Box mb={10}>
        <ScrollDownButton href="#past-events" />
      </Box>

      <Text
        id="past-events"
        fontSize={isMobile ? "2xl" : "3xl"}
        align="center"
        fontWeight="800"
        mb={4}
        color="white"
        scrollMarginTop="88px"
      >
        Some of our past events
      </Text>
      <Text align="center" color="#8EACCD" mb={4} fontSize="sm">
        Scroll or drag the photos. Click one for details.
      </Text>

      <Box h={isMobile ? "420px" : "600px"} position="relative" mb={10}>
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#D7E5F0"
          borderRadius={0.05}
          scrollEase={0.02}
          font="bold 28px Clash Display"
          onSelect={openEvent}
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay bg="rgba(10, 10, 12, 0.72)" />
        <ModalContent
          bg="rgba(24, 32, 60, 0.92)"
          border="1px solid rgba(180, 206, 239, 0.22)"
          color="#D7E5F0"
          mx={4}
        >
          <ModalHeader fontFamily='"Clash Display", sans-serif' pr={12}>
            {selected?.text}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            {selected?.image && (
              <Image
                src={selected.image}
                alt={selected.text}
                w="100%"
                maxH="280px"
                objectFit="cover"
                borderRadius="8px"
                mb={4}
              />
            )}
            <Heading as="p" size="sm" mb={3} color="#9A7B2F" fontWeight={600}>
              {selected?.text}
            </Heading>
            <Text lineHeight="1.75">{selected?.detail}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
