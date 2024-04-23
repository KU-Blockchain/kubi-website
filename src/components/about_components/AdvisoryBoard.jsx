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
import PersonCard from "../personCard";

const AdvisoryBoard = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const people = [
    {
      headshot: "/images/headshots/emma_n_headshot.jpeg",
      title: "President",
      name: "Emma Nasseri",
      shortBio: "Emma was pres",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
    {
      headshot: "/images/headshots/tej_g_headshot.jpg",
      title: "VP Engineering",
      name: "Tej Gumaste",
      shortBio: "Emma was pres",
      longBio:
        "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={5} m="5">
      <Heading as="h2" size="xl" textAlign="center" my={5}>
        Advisory Board
      </Heading>
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
