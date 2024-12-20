'use client';
import React, { useEffect, useState } from "react";
import { Box, Card, Heading, CardBody, Center, Flex, Img, Link, Text, Input, Textarea, Button, useToast, HStack, VStack, Image, FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import SubscribeForm from "@/components/SubscribeForm";
import { colors } from "@/styles/theme.js";
import { useLayout } from "@/contexts/LayoutContext";

export default function MembershipPage() {
  const isMobile = useLayout();

  return (
    <>
      { isMobile ? ( 
        <Box>
          <WebpageHeading heading={"Membership"} />

          <VStack style={{justify:"center"}}>
            <Text fontSize='3xl' align="center" fontWeight="bold">Steps to Join KUBI: </Text>
            <Text fontSize='2xl' align="center" fontWeight="bold">1. Join our Discord server</Text>
            <Button href="https://discord.gg/GAznpHUzny" target="_blank">Discord</Button>
            {/* <Text fontSize='2xl' align="center" fontWeight="bold">2. Join the DAO</Text>
            <Button>DAO</Button> */}
            <Text fontSize='2xl' align="center" fontWeight="bold">2. Come to our <Link href="/events">next meeting!</Link>!</Text>
          </VStack>
          <br></br>

          <Card 
            p={0}
          >
            <VStack spacing={4} align="center">
              <CardBody>
                <Flex alignItems='center' direction="column" justify="space-between" h="100%">
                <Heading size="lg" mb={2} textAlign="center">
                  Subscribe to our mailing list
                </Heading>
                <Box py={6} style={{width:"80%"}}>
                  <SubscribeForm />
                  <Text>Subscribe for newsletters and quarterly organization updates.</Text>
                </Box>
                </Flex>
              </CardBody>
            </VStack>
          </Card>

        </Box>
      ) : (
        <Box>
          <WebpageHeading heading={"Membership"} />

          <VStack style={{justify:"center"}}>
            <Text fontSize='3xl' align="center" fontWeight="bold">Steps to Join KUBI: </Text>
            <Text fontSize='2xl' align="center" fontWeight="bold">1. Join our Discord server</Text>
            <Button as="a" href="https://discord.gg/GAznpHUzny" target="_blank">Discord</Button>
            {/* <Text fontSize='2xl' align="center" fontWeight="bold">2. Join the DAO</Text>
            <Button>DAO</Button> */}
            <Text fontSize='2xl' align="center" fontWeight="bold">2. Come to our <Link href="/events">next meeting!</Link></Text>
          </VStack>
          <br></br>

          <Card 
              p={0}
              style={{borderRadius: "0px", backgroundColor: colors.headerBackground, color: "white"}}
              id="newsletter"
            >
              <HStack>
                <CardBody>
                  <Flex alignItems='center' direction="column" justify="space-between" h="100%">
                    <Heading size="xl" mb={4} textAlign="center">
                      Subscribe to our mailing list
                    </Heading>
                    <Box py={6} style={{width:"50%"}}>
                      <SubscribeForm />
                      <Text>Subscribe for weekly newsletters and quarterly organization updates.</Text>
                    </Box>
                  </Flex>
                </CardBody>
                <Image
                  width="35%"
                  maxW="50%"
                  paddingRight={4}
                  src="\images\WebsiteAssets\Blockchalk-450.png"
                  alt="KUBI"
                />
              </HStack>
            </Card>

          </Box>
        )}
    </>
  );
}
