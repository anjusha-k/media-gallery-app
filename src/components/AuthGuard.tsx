// components/AuthGuard.tsx
"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import { useUser } from "@/contexts/UserContext";
import { UserForm } from "./UserForm";

interface AuthGuardProps {
  children?: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return (
      <Box
        minH="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
        py={8}
      >
        <VStack gap={6} textAlign="center" maxW="lg" mx="auto" px={4}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="black" mb={2}>
              Welcome to Rick & Morty Gallery
            </Text>
            <Text color="gray.600">
              Please enter your information to access the gallery
            </Text>
          </Box>

          <UserForm />
        </VStack>
      </Box>
    );
  }

  return <>{children}</>;
};
