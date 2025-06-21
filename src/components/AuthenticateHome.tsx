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
  const { userData, clearUserData } = useUser();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      clearUserData();
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack gap={8} align="center">
        <Box textAlign="center">
          <Heading size="2xl" mb={4} color="black">
            Welcome, {userData?.username}!
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Ready to explore your personalized media gallery
          </Text>
        </Box>

        <VStack gap={3}>
          <Text fontSize="lg" fontWeight="semibold">
            Your Profile
          </Text>
          <Box textAlign="center">
            <Text color="gray.600">Username: {userData?.username}</Text>
            <Text color="gray.600">Job Title: {userData?.jobTitle}</Text>
          </Box>
          <Button
            size="sm"
            variant="outline"
            colorPalette="black"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};
