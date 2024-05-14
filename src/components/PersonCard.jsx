import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const PersonCard = ({ headshot, name, title, shortBio }) => {
  return (
    <Box
      position="relative"
      borderRadius="lg"
      borderWidth={3}
      m={3}
      maxWidth="100%"
      w="full"
      bg="white"
      opacity={0.8}
      minH="300px"
      maxH="500px"
      overflow="hidden"
    >
      <VStack
        p={4}
        position="relative"
        zIndex={1}
        align="stretch"
        spacing={3}
        height="100%"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="full"
          height="150px"
          position="relative"
        >
          <Image
            src={headshot}
            alt={`${name} Headshot`}
            width={150}
            height={150}
            layout="fixed"
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Text
          mt={2}
          fontSize={["sm", "md"]}
          fontWeight="bold"
          textAlign="center"
          textColor="black"
        >
          {name}
        </Text>
        <Text
          fontSize={["xs", "sm"]}
          fontWeight="bold"
          textAlign="center"
          textColor="black"
        >
          {title}
        </Text>
        <Text
          fontSize={["xs", "sm"]}
          textAlign="center"
          textColor="black"
          noOfLines={4}
        >
          {shortBio}
        </Text>
      </VStack>
    </Box>
  );
};

export default PersonCard;
