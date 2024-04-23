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
      minH="300px"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="white"
        opacity={0.7}
        borderRadius="lg"
      />
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
          height="150px" // Define a fixed height for the image container
          position="relative"
        >
          <Image
            src={headshot}
            alt={`${name} Headshot`}
            width={150}
            height={150}
            layout="fixed"
            style={{ borderRadius: "50%" }} // This ensures the image is rounded
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
