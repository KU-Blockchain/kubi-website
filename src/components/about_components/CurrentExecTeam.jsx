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

const CurrentExecTeam = () => {
  const [selectedExec, setSelectedExec] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleExecClick = (exec) => {
    setSelectedExec(exec);
    setIsModalOpen(true);
  };

  const currentExecs = [
    {
      headshot: "/images/headshots/emma_nasseri.jpeg",
      title: "President",
      name: "Emma Nasseri",
      shortBio: "Emma was pres",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
    {
      headshot: "/images/headshots/tej_gumaste.jpg",
      title: "VP Engineering",
      name: "Tej Gumaste",
      shortBio: "Emma was pres",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
    {
      headshot: "/images/headshots/yash_prajapati.jpeg",
      title: "VP Finance",
      name: "Yash Prajapati",
      shortBio: "Emma was pres",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
    {
      headshot: "/images/headshots/jahnvi_maddila.jpeg",
      title: "Director of Communications",
      name: "Jahnvi Maddila",
      shortBio: "Emma was pres",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={5} m="5">
      <Heading as="h2" size="xl" textAlign="center" my={5}>
        Current Executive Team
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
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
          <ModalContent m={2} borderRadius="xl">
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
