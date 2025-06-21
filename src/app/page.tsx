import { Button, Container, VStack, Heading, Text } from "@chakra-ui/react";

/**
 * Home page component
 * This will be the main entry point for the application
 */
export default function Home() {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack align="center" justify="center" minH="70vh">
        <Heading size="2xl" textAlign="center">
          Media Gallery App
        </Heading>

        <Text fontSize="lg" textAlign="center" color="gray.600">
          Welcome to the media gallery application
        </Text>

        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
}
