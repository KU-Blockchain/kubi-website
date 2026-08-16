"use client";

import { useState } from "react";
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Autoplay, EffectCoverflow, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { colors } from "@/styles/theme.js";

const MotionBox = motion(Box);

export default function ProjectCoverflow({ projects }) {
  const [active, setActive] = useState(0);
  const current = projects[active] || projects[0];

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      w="100%"
    >
      <Box
        sx={{
          ".project-coverflow": {
            width: "100%",
            paddingTop: "10px",
            paddingBottom: "50px !important",
          },
          ".project-coverflow .swiper-slide": {
            width: "490px",
            height: "428px",
            background: "rgba(24, 32, 60, 0.65)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(180, 206, 239, 0.22)",
          },
          ".project-coverflow .swiper-pagination-bullet": {
            backgroundColor: "#D7E5F0 !important",
            opacity: 0.35,
          },
          ".project-coverflow .swiper-pagination-bullet-active": {
            backgroundColor: `${colors.cubeGold} !important`,
            opacity: 1,
          },
        }}
      >
        <Swiper
          className="project-coverflow"
          spaceBetween={0}
          effect="coverflow"
          grabCursor
          allowTouchMove
          simulateTouch
          mousewheel={{
            enabled: true,
            forceToAxis: true,
            sensitivity: 0.8,
            releaseOnEdges: false,
          }}
          slidesPerView="auto"
          centeredSlides
          loop
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay, Mousewheel]}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="100%"
                w="100%"
                bg="#0A0A0C"
                pointerEvents="none"
              >
                <Box
                  as="img"
                  src={project.preview_image}
                  alt={project.title}
                  maxW="100%"
                  maxH="100%"
                  w="auto"
                  h="auto"
                  objectFit="contain"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {current && (
        <Box mt={8} w="100%" px={2} textAlign="center" pb={10}>
          <Heading size="lg" mb={4} fontWeight="500">
            {current.title}
          </Heading>
          <Text
            lineHeight="1.7"
            color={colors.ice}
            maxW="1265px"
            mx="auto"
            mb={8}
          >
            {current.description}
          </Text>
          <Button as={Link} href={current.link} isExternal _hover={{ textDecoration: "none" }}>
            Learn more
          </Button>
        </Box>
      )}
    </MotionBox>
  );
}
