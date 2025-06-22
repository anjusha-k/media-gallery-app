// app/login/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useUser } from "@/contexts/UserContext";
import { UserForm } from "@/components/UserForm";

export default function LoginPage() {
  const { isAuthenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/gallery");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null;
  }

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
