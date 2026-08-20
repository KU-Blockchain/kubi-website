"use client";

import { Box, Badge, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { colors } from "@/styles/theme.js";

const MotionBox = motion(Box);

export default function HistoryCarousel({ milestones }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.15 }}
      w="100%"
      maxW="860px"
      mx="auto"
      px={{ base: 1, md: 4 }}
    >
      <Box
        sx={{
          ".history-carousel": {
            width: "100%",
            height: "420px",
            paddingBottom: "52px !important",
          },
          ".history-carousel .swiper-slide": {
            borderRadius: "16px",
            overflow: "hidden",
            width: "100%",
            height: "calc(100% - 48px)",
          },
          ".history-carousel .swiper-pagination-bullet": {
            backgroundColor: "#D7E5F0 !important",
            opacity: 0.35,
          },
          ".history-carousel .swiper-pagination-bullet-active": {
            backgroundColor: `${colors.cubeGold} !important`,
            opacity: 1,
          },
        }}
      >
        <Swiper
          className="history-carousel"
          spaceBetween={0}
          autoplay={{ delay: 2800, disableOnInteraction: true }}
          effect="creative"
          grabCursor
          slidesPerView="auto"
          centeredSlides
          loop
          pagination={{ clickable: true }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Pagination, Autoplay]}
        >
          {milestones.map((item) => (
            <SwiperSlide key={`${item.year}-${item.title}`}>
              <Box
                h="100%"
                p={{ base: 6, md: 10 }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                bg="rgba(24, 32, 60, 0.88)"
                border="1px solid rgba(180, 206, 239, 0.22)"
                backdropFilter="blur(12px)"
              >
                <Badge
                  alignSelf="flex-start"
                  bg={colors.cubeGold}
                  color="#0A0A0C"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="sm"
                  mb={4}
                >
                  {item.year}
                </Badge>
                <Heading as="h3" size={{ base: "md", md: "lg" }} color="white" mb={4} fontWeight="500">
                  {item.title}
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.75" color={colors.ice}>
                  {item.description}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </MotionBox>
  );
}
