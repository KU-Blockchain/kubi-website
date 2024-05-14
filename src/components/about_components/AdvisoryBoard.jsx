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

const AdvisoryBoard = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const people = [
    {
      headshot: "/images/headshots/emma_nasseri.jpeg",
      title: "Former President",
      name: "Emma Nasseri",
      shortBio: "Emma was pres",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
    {
      headshot: "/images/headshots/jennifer_lohoefener.jpeg",
      title: "Associate Director & Assistant Research Professor at I2S",
      name: "Dr. Jennifer Lohoefener",

      shortBio:
        "Dr. Lohoefener is KU Blockchain Institute's faculty advisor and a long-time supporter of blockchain research at the University of Kansas.",
      longBio:
        "Dr. Lohoefener is KU Blockchain Institute's advisor and a long-time supporter of blockchain research at the University of Kansas. She brings experience from both academia and industry, including work at Ad Astra and Mylo.",
    },
    {
      headshot: "/images/headshots/perry_alexander.jpeg",
      name: "Dr. Perry Alexander",
      title: "Distinguished Professor at The University of Kansas",

      shortBio:
        "AT&T Foundation Distinguished Professor and ITTC Director at The University of Kansas.",
      longBio:
        "AT&T Foundation Distinguished Professor and ITTC Director at The University of Kansas. Research and teaching interests include formal methods, remote attestation, program verification and synthesis, and languages. Currenting working on frameworks for establishing trust in remote systems. Still looking for my turntable remote.",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={5} m="5">
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {people.map((person, index) => (
          <Box
            key={index}
            onClick={() => handlePersonClick(person)}
            cursor="pointer"
          >
            <PersonCard
              headshot={person.headshot}
              name={person.name}
              title={person.title}
              shortBio={person.shortBio}
              longBio={person.longBio}
            />
          </Box>
        ))}
      </SimpleGrid>

      {selectedPerson && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent m={2} borderRadius="xl">
            <ModalHeader textAlign="center">{selectedPerson.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4} align="center">
                <Image
                  src={selectedPerson.headshot}
                  borderRadius="full"
                  boxSize="150px"
                  alt="person"
                />
                <Text fontSize="2xl" fontWeight="bold">
                  {selectedPerson.title}
                </Text>

                <Text fontSize="md" textAlign="center">
                  {selectedPerson.longBio}
                </Text>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default AdvisoryBoard;
