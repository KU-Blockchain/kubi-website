"use client";
import React from "react";
import {
  Box,
  Text,
  Stack,
  Card,
  CardBody,
  Button,
  Link,
  Image,
  Heading,
  HStack,
  Flex,
  VStack,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import { useLayout } from "@/contexts/LayoutContext";
import { colors } from "@/styles/theme.js";

const DAO_HOME_URL = "https://dao.kublockchain.com/home/";

const aboutText =
  "KUBI DAO (Decentralized Autonomous Organization) offers a unique model for collaboration, incentives, and privileges. Our hybrid tokenomics system combines KUBIX and KUBI tokens to create a platform that encourages active participation and fair distribution of rewards. This is all enabled by blockchain technology, built on the Polygon Mumbai testnet. Welcome to the KU Blockchain DAO!";

const instructions = [
  "Open the DAO by clicking the picture above or the Access the DAO button in the About section.",
  "Create an account so you can participate in tasks, voting, and more.",
  "Browse and claim tasks in the Task Manager to start earning KUBIX tokens.",
  "Participate in voting to have your say in club decisions and elections.",
  "Review the constitution to learn the rules and ethos governing the club.",
  "Check the leaderboard to see how your contributions compare with other members.",
];

export default function DaoPage() {
  const isMobile = useLayout();

  const aboutContent = (
    <Flex direction="column" justify="center" align="center" h="100%" textAlign="center">
      <Heading size="lg" mb={4}>
        About
      </Heading>
      <Text mb={6} lineHeight="1.75">{aboutText}</Text>
      <Button size="md" as={Link} href={DAO_HOME_URL} isExternal variant="accent" _hover={{ textDecoration: "none" }}>
        Access the DAO
      </Button>
    </Flex>
  );

  const daoImage = (
    <Link
      href={DAO_HOME_URL}
      isExternal
      display="block"
      maxW={isMobile ? "100%" : "45%"}
      flexShrink={0}
    >
      <Image
        width="100%"
        src="/images/projectImages/DAO.png"
        alt="KUBI DAO"
        cursor="pointer"
      />
    </Link>
  );

  return (
    <Box>
      <WebpageHeading heading="The KUBI DAO" />

      <Stack spacing={8}>
        <Card p={0}>
          {isMobile ? (
            <VStack spacing={0} align="stretch">
              {daoImage}
              <CardBody p={6}>{aboutContent}</CardBody>
            </VStack>
          ) : (
            <HStack align="stretch" spacing={0}>
              {daoImage}
              <CardBody display="flex" alignItems="center" justifyContent="center" p={8}>
                {aboutContent}
              </CardBody>
            </HStack>
          )}
        </Card>

        <Card p={isMobile ? 5 : 8}>
          <CardBody p={0}>
            <Flex
              direction={isMobile ? "column" : "row"}
              align="center"
              gap={isMobile ? 6 : 10}
            >
              <Box flex="1">
                <Heading size="lg" mb={4}>
                  How to Use the DAO
                </Heading>
                <OrderedList spacing={3} mb={6} color={colors.ice}>
                  {instructions.map((step) => (
                    <ListItem key={step} lineHeight="1.7">{step}</ListItem>
                  ))}
                </OrderedList>
                <Button size="md" as={Link} href="https://docs.kublockchain.com/" isExternal _hover={{ textDecoration: "none" }}>
                  Learn more
                </Button>
              </Box>
              <Image
                src="/images/projectImages/dao-jayhawk.png"
                alt="Jayhawk mascot"
                maxW={isMobile ? "180px" : "260px"}
                w="100%"
                flexShrink={0}
              />
            </Flex>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
}
