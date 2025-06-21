"use client";
import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { useUser } from "@/contexts/UserContext";

export const AuthenticatedHome = () => {
  const { userData } = useUser();

  return (
    <Container maxW="container.xl" py={12}>
      <VStack gap={8} align="center">
        <Box textAlign="center">
          <Heading size="2xl" mb={4} color="black">
            Welcome, {userData?.username}!
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Ready to explore your personalized media gallery
          </Text>
        </Box>

        <Button size="lg" colorPalette="black" px={8} py={6}>
          Explore Gallery
        </Button>
      </VStack>
    </Container>
  );
};
