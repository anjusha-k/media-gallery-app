"use client";

import { useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { useUser } from "@/contexts/UserContext";

/**
 * User Form Component
 * Collects username and job title from user
 */
export const UserForm = () => {
  const { setUserData } = useUser();
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() && jobTitle.trim()) {
      setUserData({
        username: username.trim(),
        jobTitle: jobTitle.trim(),
      });
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      p={6}
      bg="white"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.200"
      shadow="md"
    >
      <form onSubmit={handleSubmit}>
        <VStack gap={4}>
          <Text fontSize="lg" textAlign="center" color="gray.600">
            Please provide your details to access the application
          </Text>

          <Input
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />

          <Input
            placeholder="Enter your job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />

          <Button
            type="submit"
            bg="black"
            width="100%"
            disabled={!username.trim() || !jobTitle.trim()}
          >
            Get Started
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
