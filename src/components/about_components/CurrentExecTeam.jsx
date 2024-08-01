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
      headshot: "/images/headshots/micah_borghese.JPG",
      title: "President",
      name: "Micah Borghese",
      shortBio: "Micah is a senior Honors student studying Computer Science and Mathematics. He was been involved with the KU Blockchain Institute since Fall 2023 but his interest in blockchain started long before then. In 8th grade, Micah gave a presentation on if Bitcoin would be the future of currency. Since then, he was explored developing on the blockchain, winning 3rd place at HackKU 2024 for his XRPL sidechain NFT supply chain solution.",
      longBio:
        "Micah is a senior Honors student studying Computer Science and Mathematics. He was been involved with the KU Blockchain Institute since Fall 2023 but his interest in blockchain started long before then. In 8th grade, Micah gave a presentation on if Bitcoin would be the future of currency. Since then, he was explored developing on the blockchain, winning 3rd place at HackKU 2024 for his XRPL sidechain NFT supply chain solution.",
      linkedin: "https://www.linkedin.com/in/micah-borghese/",
      email: "mailto:micah@kublockchain.com",
    },
    {
      headshot: "/images/headshots/yash_prajapati.jpeg",
      title: "VP of Finance",
      name: "Yash Prajapati",
      shortBio: "Yash has been VP of Finance at KU Blockchain Institute for over a year,  helping host workshops and the winter bootcamp. He researches market-predicting neural networks and is a campus student ambassador. Yash is the recipient of a Homecoming Award for his leadership and involvement on campus.",
      longBio:
        "Yash has been VP of Finance at KU Blockchain Institute for over a year,  helping host workshops and the winter bootcamp. He researches market-predicting neural networks and is a campus student ambassador. Yash is the recipient of a Homecoming Award for his leadership and involvement on campus.",
      linkedin: "https://www.linkedin.com/in/yashprajapati23/",
      email: "mailto:yash@kublockchain.com",
    },
    {
      headshot: "/images/headshots/jahnvi_maddila.jpeg",
      title: "VP of Engineering",
      name: "Jahnvi Maddila",
      shortBio: "Jahnvi is the VP of Engineering at KU Blockchain Institute, previously leading outreach, marketing, and retention. Her research focuses on Spectrum Management Framework for Unmanned Aerial Systems. Jahnvi is especially excited about applications of blockchain in DeFi and social networks.",
      longBio:
        "Jahnvi is the VP of Engineering at KU Blockchain Institute, previously leading outreach, marketing, and retention. Her research focuses on Spectrum Management Framework for Unmanned Aerial Systems. Jahnvi is especially excited about applications of blockchain in DeFi and social networks.",
      linkedin: "https://www.linkedin.com/in/jahnvi-maddila-228359250/",
      email: "mailto:jahnvi@kublockchain.com",
    },
    {
      headshot: "/images/headshots/kyle_spragg.jpg",
      title: "Director of Research and Development",
      name: "Kyle Spragg",
      shortBio: "Kyle Spragg will be a third year student at the University of Kansas this fall, studying Computer Science and Business. He is from Naperville, Illinois, and participates in athletics. He became an Academic All-American in his fourth year of high school sports, and pursued club lacrosse in college. Currently, Kyle is the Vice President of the Kansas Lacrosse Team and a Financial Analyst for the Rock Chalk Investment Club.",
      longBio:
        "Kyle Spragg will be a third year student at the University of Kansas this fall, studying Computer Science and Business. He is from Naperville, Illinois, and participates in athletics. He became an Academic All-American in his fourth year of high school sports, and pursued club lacrosse in college. Currently, Kyle is the Vice President of the Kansas Lacrosse Team and a Financial Analyst for the Rock Chalk Investment Club.",
      linkedin: "",
      email: "mailto:kyle@kublockchain.com",
    },
    {
      headshot: "/images/headshots/emma_du.JPG",
      title: "Director of Marketing and Communications",
      name: "Emma Du",
      shortBio: "Emma is a sophomore majoring in computer science and minoring in business. She has been involved in KU Blockchain Institute since Fall 2023. Emma is interested in blockchain's potential to create a more transparent and fair digital economy, as well as its applications in the healthcare industry. Outside of KUBI, she is a part of the KU SELF Program and plays the violin in the KU Symphony Orchestra. In her free time, she enjoys playing soccer and tennis.",
      longBio:
        "Emma is a sophomore majoring in computer science and minoring in business. She has been involved in KU Blockchain Institute since Fall 2023. Emma is interested in blockchain's potential to create a more transparent and fair digital economy, as well as its applications in the healthcare industry. Outside of KUBI, she is a part of the KU SELF Program and plays the violin in the KU Symphony Orchestra. In her free time, she enjoys playing soccer and tennis.",
      linkedin: "https://www.linkedin.com/in/emma-du-/",
      email: "mailto:emmadu@kublockchain.com",
    },
    {
      headshot: "",
      title: "Director of Outreach and Growth",
      name: "Alex Perez",
      shortBio: "To be added.",
      longBio:
        "To be added.",
      linkedin: "",
      email: "mailto:alex@kublockchain.com",
    },
    {
      headshot: "/images/headshots/emma_nasseri.jpeg",
      title: "Interim Director of Education",
      name: "Emma Nasseri",
      shortBio: "Emma is a final year Honors Computer Science and Visual Arts student. She was the previous President of the KU Blockchain Institute",
      longBio:
        "Emma is a final year Honors Computer Science and Visual Arts student. She was the previous President of the KU Blockchain Institute.",
      linkedin: "https://www.linkedin.com/in/emma-nasseri/",
      email: "mailto:emma@kublockchain.com",
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
    </Box>
  );
};

export default CurrentExecTeam;
