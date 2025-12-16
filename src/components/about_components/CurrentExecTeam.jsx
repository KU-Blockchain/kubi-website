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
  Button,
  HStack,
} from "@chakra-ui/react";
import PersonCard from "./PersonCard";
import { colors } from "@/styles/theme.js";

const CurrentExecTeam = () => {
  const [selectedExec, setSelectedExec] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleExecClick = (exec) => {
    setSelectedExec(exec);
    setIsModalOpen(true);
  };

  const currentExecs = [
    {
      headshot: "/images/headshots/jahnvi_maddila.jpeg",
      title: "President",
      name: "Jahnvi Maddila",
      shortBio: "Jahnvi is a Senior studying Computer Science and Business from Overland Park, Kansas. Jahnvi previously led outreach, marketing, and retention for KUBI.",
      longBio:
        "Jahnvi is a Senior studying Computer Science. She previously led outreach, marketing, and retention. Her research focuses on Spectrum Management Framework for Unmanned Aerial Systems. Jahnvi is especially excited about applications of blockchain in DeFi and social networks.",
      linkedin: "https://www.linkedin.com/in/jahnvi-maddila-228359250/",
      email: "mailto:jahnvi@kublockchain.com",
    },
    {
      headshot: "/images/headshots/alex_perez.jpeg",
      title: "VP of Business",
      name: "Alex Perez",
      shortBio: "Alex is a Junior majoring in Business Administration from Chino Hills, California. Alex has been involved with KUBI since Fall 2024.",
      longBio:
        "Alex is a Junior majoring in Business Administration from Chino Hills, California. He is also the Director of Funding for the United Business Council (UBC) at KU and joined KUBI in Fall 2024.",
      linkedin: "",
      email: "mailto:alex@kublockchain.com",
    },
    {
      headshot: "/images/headshots/nischay_rawal.png",
      title: "VP of Engineering",
      name: "Nischay Rawal",
      shortBio: "Nischay Rawal is an Honors Sophomore and SELF fellow dual majoring in Computer Science and Mathematics. He is from Overland Park, Kansas and has been involved with KUBI since Fall 2024.",
      longBio:
        "Nischay Rawal is an Honors Sophomore and SELF fellow dual majoring in Computer Science and Mathematics. He has been involved with the KU Blockchain Institute since Fall 2024 and is currently also involved with research on programming synthesis.",
      linkedin: "https://www.linkedin.com/in/nischay-rawal-821902288/",
      email: "mailto:nischay@kublockchain.com",
    },
    {
      headshot: "/images/headshots/caleb_hite.jpeg",
      title: "Vice President of Education",
      name: "Caleb Hite",
      shortBio: "Caleb is a Junior Computer Science student from Shawnee, Kansas. Caleb has been involved with KUBI since Summer 2024.",
      longBio:
        "Caleb is a Junior Computer Science student from Shawnee, Kansas. Caleb is a member of ACM and German Club. Caleb initially joined KUBI as a part of the Kansas Blockchain Fellowship in Summer 2024 and has been involved ever since.",
      linkedin: "",
      email: "mailto:caleb@kublockchain.com",
    },
    {
      headshot: "/images/headshots/charlie_doherty.jpg",
      title: "Director of Engineering",
      name: "Charlie Doherty",
      shortBio: "Charlie is a Junior in the Honors Program studying Computer Science with a Minor in Business. Charlie is from Overland Park, Kansas, and joined KUBI in Spring 2025.",
      longBio:
        "Charlie is a Junior in the Honors Program studying Computer Science with a Minor in Business. Charlie is from Overland Park, Kansas, and joined KUBI in Fall 2025. Outside of KUBI, he is a member of Alpha Tau Omega and is an Entreprenuer/Mentor in the Catalyst Accelerator.",
      linkedin: "https://www.linkedin.com/in/charlie-doherty/",
      email: "mailto:charlie@kublockchain.com",
    },
    {
      headshot: "/images/headshots/audrey_karn.jpg",
      title: "Director of Marketing",
      name: "Audrey Karn",
      shortBio: "Audrey is a Junior studying Business Administration from Overland Park, Kansas. Audrey joined KUBI in Fall 2025.",
      longBio:
        "Audrey is a Junior studying Business Administration from Overland Park, Kansas. Audrey joined KUBI in Fall 2025 and is an Entrepreneur/Mentor working with the Catalyst Accelerator to start a catering business.",
      linkedin: "https://www.linkedin.com/in/audrey-karn-0ba1b2298/",
      email: "mailto:audrey@kublockchain.com",
    },
    {
      headshot: "/images/headshots/will_calhoun.jpg",
      title: "Director of Research and Development",
      name: "Will Calhoun",
      shortBio: "Will Calhoun is a Junior studying Computer Science. He is from Overland Park, Kansas, and has been with KUBI since Spring 2025.",
      longBio:
        "Will Calhoun is a Junior studying Computer Science. He is from Overland Park, Kansas, and has been with KUBI since Spring 2025.",
      linkedin: "",
      email: "mailto:will@kublockchain.com",
    },
    {
      headshot: "/images/headshots/emma_du.JPG",
      title: "Director of Communications",
      name: "Emma Du",
      shortBio: "Emma is a Sophomore majoring in Computer Science with a minor in Business from Overland Park, Kansas. She is also a SELF Fellow and has been involved in KUBI since Fall 2023.",
      longBio:
        "Emma is a Sophomore majoring in Computer Science with a Minor in Business. She has been involved in KU Blockchain Institute since Fall 2023. Emma is interested in blockchain's potential to create a more transparent and fair digital economy, as well as its applications in the healthcare industry. Outside of KUBI, she is a SELF Fellow and plays the violin in the KU Symphony Orchestra. In her free time, she enjoys playing soccer and tennis.",
      linkedin: "https://www.linkedin.com/in/emma-du-/",
      email: "mailto:emmadu@kublockchain.com",
    },
    {
      headshot: "/images/headshots/wolfgang_sell.jpg",
      title: "Director of Education",
      name: "Wolfgang Sell",
      shortBio: "Wolfgang is a SELF Fellow Sophomore Majoring in Cybersecurity Engineering from Shawnee, Kansas. Wolfgang joined KUBI in Summer 2024.",
      longBio:
        "Wolfgang is a freshman majoring in Cybersecurity Engineering from Shawnee, Kansas. His interest in decentralized technology began by participating in the Kansas Blockchain Fellowship, and has since been inspired to pass on that knowledge to others as Director of Education. His current research is in healthcare applications of LLMs, and is also an avid violist playing in the KU Symphony Orchestra and numerous other ensembles.",
      linkedin: "",
      email: "mailto:wolfgang@kublockchain.com",
    },{
      headshot: "/images/headshots/kyle_spragg.jpg",
      title: "Director of Finance",
      name: "Kyle Spragg",
      shortBio: "Kyle Spragg is a Senior studying Computer Science and Business. He is from Naperville, Illinois, and has been with KUBI since Summer 2024.",
      longBio:
        "Kyle Spragg is a Senior studying Computer Science and Business. He is from Naperville, Illinois, and participates in athletics. He became an Academic All-American in his fourth year of high school sports, and pursued club lacrosse in college. Currently, Kyle is the President of the Kansas Lacrosse Team and a Financial Analyst for the Rock Chalk Investment Club.",
      linkedin: "https://www.linkedin.com/in/kylespragg/",
      email: "mailto:kyle@kublockchain.com",
    }
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={5}>
      <SimpleGrid columns={[1, null, 4]} spacing={8}>
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
                <HStack spacing={4}>
                  {selectedExec.linkedin && (
                  <Button as="a" href={selectedExec.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Button>
                  )}
                  {selectedExec.email && (
                  <Button as="a" href={selectedExec.email} target="_blank" rel="noopener noreferrer">
                    Email
                  </Button>
                  )}
                </HStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default CurrentExecTeam;
