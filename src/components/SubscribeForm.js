import { useState } from 'react';
import {
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
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';

const SubscribeForm = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async e => {
        setIsSubmitting(true);
        e.preventDefault();

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, email }),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitting(false);
                setMessage('Successfully subscribed!');
                setFirstName('');
                setEmail('');
            } else {
                setMessage(result.message || 'Failed to subscribe.');
            }
        } catch (error) {
            setIsSubmitting(false);
            console.error('Error:', error);
            setMessage('An error occurred while subscribing.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {message && (
                    <Alert status="info">
                        <AlertIcon />
                        <AlertTitle>{message}</AlertTitle>
                    </Alert>
                )}
                <Stack spacing={3}>
                    <FormControl isRequired>
                        <FormLabel>First Name:</FormLabel>
                        <Input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                        />
                    </FormControl>
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
                        Subscribe
                    </Button>
                </Stack>
            </form>
        </>
    );
};

export default SubscribeForm;
