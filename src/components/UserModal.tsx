"use client";

import { useState } from "react";
import { Box, Button, Input, VStack, Text, HStack } from "@chakra-ui/react";
import { useUser } from "@/contexts/UserContext";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "create" | "edit";
}

export const UserModal = ({ isOpen, onClose, mode }: UserModalProps) => {
  const { userData, setUserData } = useUser();

  const [username, setUsername] = useState(userData?.username || "");
  const [jobTitle, setJobTitle] = useState(userData?.jobTitle || "");

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() && jobTitle.trim()) {
      setUserData({
        username: username.trim(),
        jobTitle: jobTitle.trim(),
      });
      onClose();
    }
  };

  const handleCancel = () => {
    setUsername(userData?.username || "");
    setJobTitle(userData?.jobTitle || "");
    onClose();
  };

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
        zIndex="modal"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={onClose}
      >
        <Box
          bg="white"
          borderRadius="lg"
          p={6}
          maxW="md"
          width="90%"
          mx={4}
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit}>
            <VStack gap={4}>
              <Text
                fontSize="lg"
                fontWeight="bold"
                textAlign="center"
                color="black"
              >
                {mode === "edit"
                  ? "Edit Your Information"
                  : "Enter Your Information"}
              </Text>

              {mode === "edit" && (
                <Text fontSize="sm" textAlign="center" color="gray.600">
                  Update your profile information
                </Text>
              )}

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

              <HStack gap={3} width="100%">
                <Button
                  type="submit"
                  colorPalette="black"
                  flex="1"
                  disabled={!username.trim() || !jobTitle.trim()}
                >
                  {mode === "edit" ? "Save Changes" : "Get Started"}
                </Button>

                {mode === "edit" && (
                  <Button
                    type="button"
                    variant="outline"
                    flex="1"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                )}
              </HStack>
            </VStack>
          </form>
        </Box>
      </Box>
    </>
  );
};
