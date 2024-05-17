import React, { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import PersonCard from "../PersonCard";
import { colors } from "../globalStyles.js";

const CurrentExecTeam = () => {
  const [selectedExec, setSelectedExec] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleExecClick = (exec) => {
    setSelectedExec(exec);
    setIsModalOpen(true);
  };

  const currentExecs = [
    {
      headshot: "/images/headshots/micah_borghese.JPG",
      title: "President",
      name: "Micah Borghese",
      shortBio: "",
      longBio:
        "Micah is a senior studying computer science and math. He was been involved with the KU Blockchain Institute since Fall 2023 but his interest in blockchain started long before then. In 8th grade, Micah gave a presentation on if Bitcoin would be the future of currency. Since then, he was explored developing on the blockchain, winning 3rd place at HackKU 2024 for his XRPL sidechain NFT supply chain solution.",
    },
    {
      headshot: "/images/headshots/emma_nasseri.jpeg",
      title: "Director of Education",
      name: "Emma Nasseri",
      shortBio: "",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
    {
      headshot: "/images/headshots/yash_prajapati.jpeg",
      title: "VP of Finance",
      name: "Yash Prajapati",
      shortBio: "",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
    {
      headshot: "/images/headshots/jahnvi_maddila.jpeg",
      title: "VP of Engineering",
      name: "Jahnvi Maddila",
      shortBio: "",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={5} m="5">
      <SimpleGrid columns={[1, null, 4]} spacing={10}>
        {currentExecs.map((exec, index) => (
          <Box
            key={index}
            onClick={() => handleExecClick(exec)}
            cursor="pointer"
          >
            <PersonCard
              headshot={exec.headshot}
              name={exec.name}
              title={exec.title}
              shortBio={exec.shortBio}
              longBio={exec.longBio}
            />
          </Box>
        ))}
      </SimpleGrid>

      {selectedExec && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent m={2} borderRadius="xl" style={{ color: "white", background: colors.headerBackground }}>
            <ModalHeader textAlign="center">{selectedExec.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4} align="center">
                <Image
                  src={selectedExec.headshot}
                  borderRadius="full"
                  boxSize="150px"
                  alt="person"
                />
                <Text fontSize="2xl" fontWeight="bold">
                  {selectedExec.title}
                </Text>

                <Text fontSize="md" textAlign="center">
                  {selectedExec.longBio}
                </Text>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default CurrentExecTeam;
