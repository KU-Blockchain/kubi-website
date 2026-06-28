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
      headshot: "/images/headshots/CalebHite1.jpeg.jpeg",
      title: "Co-President",
      name: "Caleb Hite",
      shortBio: "Caleb is a Senior Computer Science Student from Shawnee, Kansas. Caleb previously served as the Vice President of Education.",
      longBio:
        "Caleb is a senior studying Computer Science serving as Co-President of the KU Blockchain Institute. He is interested in decentralized finance, digital identity, and emerging markets. Outside of school, Caleb loves cooking and fitness.",
      linkedin: "https://www.linkedin.com/in/caleb-hite-463214176/",
      email: "mailto:caleb@kublockchain.com",
    },
    {
      headshot: "/images/headshots/CharlieDoherty.JPG",
      title: "Co-President",
      name: "Charlie Doherty",
      shortBio: "Charlie is a Senior in the Honors Program studying Computer Science and Entrepreneurship. Charlie is from Overland Park, Kansas.",
      longBio:
        "Charlie is a Senior in the Honors Program studying Computer Science and Entrepreneurship. He is from Overland Park, Kansas, and joined KUBI in Fall 2025. Outside of KUBI, Charlie is an Mentor in the Catalyst Accelerator and enjoys tennis and basketball. He is most interested in the economic and social freedoms decentralized applications can provide.",
      linkedin: "https://www.linkedin.com/in/charlie-doherty/",
      email: "mailto:charlie@kublockchain.com",
    },
    {
      headshot: "/images/headshots/NischayRawal1.jpeg.jpeg",
      title: "Vice President of Engineering",
      name: "Nischay Rawal",
      shortBio: "Nischay Rawal is an Honors Sophomore and SELF fellow dual majoring in Computer Science and Mathematics.",
      longBio:
        "Nischay is a Honors junior and SELF fellow majoring in Computer Science and Mathematics, serving as the VP of Engineering for Kansas Blockchain. Outside of school, Nischay loves to play sports, go on walks, travel, and do random side quests. He first got into this space because of his interest in zk proofs.",
      linkedin: "https://www.linkedin.com/in/nischay-rawal-821902288/",
      email: "mailto:nischay@kublockchain.com",
    },
    {
      headshot: "/images/headshots/WolfgangSell1.jpg.jpg",
      title: "Vice President of Education",
      name: "Wolfgang Sell",
      shortBio: "Wolfgang is a SELF Fellow Sophomore Majoring in Cybersecurity Engineering. He is from Shawnee, Kansas.",
      longBio:
        "Wolfgang is a junior cybersecurity engineering major at the University of Kansas currently serving as the Vice President of Education. He was inspired to join the web3 community because of the potential for blockchain technology to bring power back to the people, and what keeps him here is the challenge of supporting the club and building in web3 competitively. He is world-class violist who has performed abroad with the university's top orchestra and regularly takes gig opportunities. He also enjoys competitive strategy games such as chess.",
      linkedin: "https://www.linkedin.com/in/wolfgangsell/",
      email: "mailto:caleb@kublockchain.com",
    },
    {
      headshot: "/images/headshots/Alexandro Perez1.jpeg.jpeg",
      title: "Vice President of Business",
      name: "Alex Perez",
      shortBio: "Alex is a Senior and HSF Scholar majoring in Finance and Business Analytics. He is from Chino Hills, California.",
      longBio:
        "Alex is a Senior and HSF Scholar majoring in Finance and Business Analytics. Alex joined KUBI his freshman year and previously served as Director of Outreach/Growth. He is primarily interested in how tokenization will modernize traditional finance. Outside of KUBI Alex enjoys playing guitar and watching live music.",
      linkedin: "https://www.linkedin.com/in/alexandro-perez-596128243/",
      email: "mailto:charlie@kublockchain.com",
    },
    {
      headshot: "/images/headshots/ShivendiranKabaleeswaran.jpg.jpg",
      title: "Director of Engineering",
      name: "Shiva Kabaleeswaran",
      shortBio: "Shiva is a Honors sophomore and SELF Fellow majoring in Cybersecurity Engineering and Data Science. He is from Overland Park, Kansas.",
      longBio:
        "Shiva is a Honors sophomore and SELF Fellow majoring in Cybersecurity Engineering and Data Science, serving as the Director of Engineering at the KU Blockchain Institute. Outside of school, Shiva loves to stay active by going on walks or the gym. He is interested about the intersection of security and decentralized technology and how trust and transparency are built into every day systems.",
      linkedin: "https://www.linkedin.com/in/shivendirankabaleeswaran/",
      email: "mailto:shivendirankabaleeswaran@ku.edu",
    },
    {
      headshot: "/images/headshots/WillCalhounCorporatePhoto.jpg.jpg",
      title: "Director of Education",
      name: "Will Calhoun",
      shortBio: "Will Calhoun is a Senior studying Computer Science. He is from Overland Park, Kansas and previously served as the Director of Education.",
      longBio:
        "Will is a senior majoring in Computer Science, and serves as the Direct of Education at Kansas Blockchain. Outside of school, Will likes to hang out with friends and watch KU sports. He is currently interested in stablecoins and the modernization of banking infrastructure.",
      linkedin: "https://www.linkedin.com/in/will-calhoun-3400a52b8/",
      email: "mailto:will@kublockchain.com",
    },
    {
      headshot: "/images/headshots/HeetJani.jpg.jpg",
      title: "Director of Research",
      name: "Heet Jani",
      shortBio: "Heet is an Honors and SELF Fellow sophomore majoring in Computer Science and minoring in Data Science. He is from Dubai, UAE.",
      longBio:
        "Heet is an Honors and SELF Fellow sophomore majoring in Computer Science and minoring in Data Science, serving as the Director of Research at the KU Blockchain Institute. In his free time he likes to watch movies and show, when that has been binge watched he takes long walks from his dorm (GSP) to basically anywhere. He is interested in the intersection of AI and Web3 and how the both of them could change technology together.",
      linkedin: "https://www.linkedin.com/in/heet-jani/",
      email: "mailto:heetjani@ku.edu",
    },
    {
      headshot: "/images/headshots/AnthonyBlack.jpeg.jpeg",
      title: "Director of Finance",
      name: "Anthony Black",
      shortBio: "Anthony Black is a Honors Sophomore and in the BLP Program majoring in Finance and Data Science. He is from Roseville, Minnesota.",
      longBio:
        "Anthony Black is a Honors Sophomore and in the BLP Program majoring in Finance and Data Science, serving as the Director of Finance at Kansas Blockchain. Outside of classes, he likes to lift and hike. He is interested in Decentralized Finance and security in the Web3 space.",
      linkedin: "https://www.linkedin.com/in/anthony-black01/",
      email: "mailto:anthonyb@ku.edu",
    },
    {
      headshot: "/images/headshots/JagannathSritinathNair.jpg.jpg",
      title: "Director of Product & Innovation",
      name: "Jag Nair",
      shortBio: "Jag is a Honors sophomore and SELF Fellow majoring in Cybersecurity Engineering/minoring in Business.",
      longBio:
        "Jag is a Honors sophomore and SELF Fellow majoring in Cybersecurity Engineering and minoring in Business, serving as the Director of Product & Innovation at the KU Blockchain Institute. Outside of school, Jag loves to play pickleball and watch movies. He is interested in the real-world applications of blockchain and enjoys learning how emerging web3 technologies can be used to solve industry challenges and create new opportunities for innovation beyond the classroom.",
      linkedin: "https://www.linkedin.com/in/jagannath-sritinath-nair/",
      email: "mailto:jsritinathnair@ku.edu",
    },
    {
      headshot: "/images/headshots/SharivaPradhan.jpeg.jpeg",
      title: "Director of Public Relations",
      name: "Shariva Pradhan",
      shortBio: "Shariva is a sophomore and a SELF Fellow majoring in Mechanical Engineering. She is from Overland Park, Kansas.",
      longBio:
        "Shariva is a sophomore and a SELF Fellow majoring in Mechanical Engineering, serving as the Director of Public Relations at the KU Blockchain Institute. In her free time, Shariva plays the violin and is a member of KU's Philharmonic Orchestra. She is interested in blockchain's applications in physical engineering, and how decentralized systems can add transparency and security to manufacturing.",
      linkedin: "https://www.linkedin.com/in/sharivapradhan/",
      email: "mailto:shariva@ku.edu",
    },
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
