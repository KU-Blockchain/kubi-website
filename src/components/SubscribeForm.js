import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Alert,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';
import { colors } from '@/styles/theme.js';

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
                setIsSubmitting(false);
                setMessage(result.message || 'Failed to subscribe.');
            }
        } catch (error) {
            setIsSubmitting(false);
            console.error('Error:', error);
            setMessage('An error occurred while subscribing.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            {message && (
                <Alert status="info" mb={4} borderRadius="8px">
                    <AlertIcon />
                    <AlertTitle fontSize="sm">{message}</AlertTitle>
                </Alert>
            )}
            <Stack spacing={4} w="100%">
                <FormControl isRequired>
                    <FormLabel color={colors.ice} fontSize="sm" mb={1}>
                        First name
                    </FormLabel>
                    <Input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                        bg="rgba(255, 255, 255, 0.96)"
                        color={colors.navy}
                        border="1px solid rgba(180, 206, 239, 0.35)"
                        borderRadius="8px"
                        _placeholder={{ color: 'gray.500' }}
                        _focus={{ borderColor: colors.blue, boxShadow: `0 0 0 1px ${colors.blue}` }}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel color={colors.ice} fontSize="sm" mb={1}>
                        Email
                    </FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        bg="rgba(255, 255, 255, 0.96)"
                        color={colors.navy}
                        border="1px solid rgba(180, 206, 239, 0.35)"
                        borderRadius="8px"
                        _placeholder={{ color: 'gray.500' }}
                        _focus={{ borderColor: colors.blue, boxShadow: `0 0 0 1px ${colors.blue}` }}
                    />
                </FormControl>
                <Button
                    type="submit"
                    isLoading={isSubmitting}
                    w="100%"
                    variant="accent"
                    mt={1}
                >
                    Subscribe
                </Button>
            </Stack>
        </form>
    );
};

export default SubscribeForm;
