"use client";
import React, { useEffect, useState } from "react";
import CurrentExecTeam from "@/components/about_components/CurrentExecTeam";
import AdvisoryBoard from "@/components/about_components/AdvisoryBoard";
import WebpageHeading from "@/components/webpageheading";
import { Heading, Box, Stack } from "@chakra-ui/react";

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);


  return (
    <>
      { isMobile ? (
        <Box
          m="auto"
        >
          <WebpageHeading heading={"About KUBI"} />

          <Stack>
            <Heading as="h2" size="xl" textAlign="center" my={5}>
              Current Executive Team
            </Heading>
            <CurrentExecTeam />
          </Stack>

          <Stack>
            <Heading as="h2" size="xl" textAlign="center" my={5}>
              Advisory Board
            </Heading>
            <AdvisoryBoard />
          </Stack>

          <p>should have info on our history</p>
          <p>should have info on our election process</p>
        </Box>
      ) : (
        <Box
          m="auto"
          px={20}
          py={5}
        >
        <WebpageHeading heading={"About KUBI"} />

        <Stack>
          <Heading as="h2" size="xl" textAlign="center" my={5}>
            Current Executive Team
          </Heading>
          <CurrentExecTeam />
        </Stack>

        <Stack>
          <Heading as="h2" size="xl" textAlign="center" my={5}>
            Advisory Board
          </Heading>
          <AdvisoryBoard />
        </Stack>

        <p>should have info on our history</p>
        <p>should have info on our election process</p>
        </Box>
      )}
    </>
  );
}
