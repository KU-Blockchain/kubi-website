'use client';
import React, { useEffect, useState } from "react";
import {
    Card,
    Box,
    HStack,
    CardBody,
    Heading,
    Image,
    Flex,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Alert,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';
import WebpageHeading from "@/components/PageHeading";
import { colors } from "@/styles/theme.js";
import { useLayout } from "@/contexts/LayoutContext";

export default function UnsubscribeForm() {
    const isMobile = useLayout();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async e => {
        setIsSubmitting(true);
        e.preventDefault();

        try {
            const response = await fetch('/api/unsubscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitting(false);
                setMessage('Successfully unsubscribed!');
                setEmail('');
            } else {
                setIsSubmitting(false);
                setMessage(result.message || 'Failed to unsubscribe. Is the email correct?');
            }
        } catch (error) {
            setIsSubmitting(false);
            console.error('Error:', error);
            setMessage('An error occurred while unsubscribing.');
        }
    };

  return (
    <>
        <Box>
            <WebpageHeading heading={"Unsubscribe From Updates"} />

            { isMobile ? (
                <Card 
                p={0}
                style={{borderRadius: "0px", backgroundColor: colors.headerBackground, color: "white"}}
                id="newsletter"
                >
                    <CardBody>
                    <Flex alignItems='center' direction="column" justify="space-between" h="100%">
                        <Heading size="xl" mb={4} textAlign="center">
                        Sorry to see you go!
                        </Heading>
                        <Box py={6} style={{width:"50%"}}>
                        <form onSubmit={handleSubmit}>
                            {message && (
                                <Alert status="info">
                                    <AlertIcon />
                                    <AlertTitle>{message}</AlertTitle>
                                </Alert>
                            )}
                            <Stack spacing={3}>
                                <FormControl isRequired>
                                    <FormLabel>Email:</FormLabel>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                    />
                                </FormControl>
                                <Button 
                                    type="submit"
                                    isLoading={isSubmitting}
                                >
                                    Unsubscribe
                                </Button>
                            </Stack>
                        </form>
                        </Box>
                    </Flex>
                    </CardBody>
                </Card>
            ) : (
                <Card 
                    p={0}
                    style={{borderRadius: "0px", backgroundColor: colors.headerBackground, color: "white"}}
                    id="newsletter"
                >
                    <HStack>
                        <CardBody>
                        <Flex alignItems='center' direction="column" justify="space-between" h="100%">
                            <Heading size="xl" mb={4} textAlign="center">
                            Sorry to see you go!
                            </Heading>
                            <Box py={6} style={{width:"50%"}}>
                            <form onSubmit={handleSubmit}>
                                {message && (
                                    <Alert status="info">
                                        <AlertIcon />
                                        <AlertTitle>{message}</AlertTitle>
                                    </Alert>
                                )}
                                <Stack spacing={3}>
                                    <FormControl isRequired>
                                        <FormLabel>Email:</FormLabel>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                        />
                                    </FormControl>
                                    <Button 
                                        type="submit"
                                        isLoading={isSubmitting}
                                    >
                                        Unsubscribe
                                    </Button>
                                </Stack>
                            </form>
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
            )}

        </Box>
    </>
  );
}