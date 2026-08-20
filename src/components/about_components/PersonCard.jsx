import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { colors } from "@/styles/theme";

const PersonCard = ({ headshot, name, title, shortBio }) => {
  return (
    <Box
      position="relative"
      borderRadius="8px"
      maxWidth="100%"
      w="full"
      bg="rgba(24, 32, 60, 0.45)"
      minH="300px"
      overflow="hidden"
      border="1px solid rgba(180, 206, 239, 0.22)"
      boxShadow="0 12px 28px rgba(0, 0, 0, 0.28)"
      transition="transform 0.25s ease, box-shadow 0.25s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "0 22px 40px rgba(21, 34, 56, 0.16)",
      }}
    >
      <VStack
        p={5}
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
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: `3px solid ${colors.steel}`,
            }}
          />
        </Box>
        <Text
          mt={2}
          fontSize={["sm", "md"]}
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
          {name}
        </Text>
        <Text
          fontSize={["xs", "sm"]}
          fontWeight="700"
          textAlign="center"
          color={colors.cubeGold}
        >
          {title}
        </Text>
        {shortBio && (
          <Text
            fontSize={["xs", "sm"]}
            textAlign="center"
            color={colors.ice}
            opacity={0.8}
            noOfLines={4}
          >
            {shortBio}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default PersonCard;
