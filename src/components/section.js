"use client";
import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "./globalStyles";
import styles from "@/components/globalstyles.module.css";
function Section({
  image,
  text,
  bgcolor = colors.blue1,
  heading,
  fontcolor = "white",
  headingColor = "white",
  type = 1,
  customStyle = {},
}) {
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: `${bgcolor}`,
    paddingTop: "5%",
    paddingBottom: "5%",
    borderRadius: "10px",
    maxHeight: "500px",
    justifyContent: "space-evenly",
    overflow: "hidden",
    ...customStyle,
    margin: "2rem",
    border: "2px solid gold",

    borderRadius: "20px",
  };

  if (type === 1) {
    return (
      <>
        <div style={sectionStyle} className={styles.sectionShadow}>
          <Box w="50%" p="4rem">
            <Center color={headingColor}>
              <Text fontSize="3xl">{heading}</Text>
            </Center>
            <div>
              <Text
                color={fontcolor}
                align="center"
                fontFamily="Times New Roman"
                fontWeight={500}
              >
                {text}
              </Text>
            </div>
          </Box>
          <Box>
            <Center>
              <Img src={image} width="30rem" p={5} />
            </Center>
          </Box>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={sectionStyle} className={styles.sectionShadow}>
          <Box>
            <Center>
              <Img src={image} width="30rem" p={5} />
            </Center>
          </Box>
          <Box w="50%" p="4rem">
            <Center color={headingColor}>
              <Text fontSize="3xl">{heading}</Text>
            </Center>
            <div>
              <Text
                color={fontcolor}
                align="center"
                fontFamily="Times New Roman"
                fontWeight={500}
              >
                {text}
              </Text>
            </div>
          </Box>
        </div>
      </>
    );
  }
}
export default Section;
