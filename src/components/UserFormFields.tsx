"use client";
import { useState } from "react";
import { Button, Input, VStack, Text, HStack } from "@chakra-ui/react";
import { useUser } from "@/contexts/UserContext";

interface UserFormFieldsProps {
  mode: "create" | "edit";
  onSuccess?: () => void;
  onCancel?: () => void;
  showCancel?: boolean;
}

export const UserFormFields = ({
  mode,
  onSuccess,
  onCancel,
  showCancel = false,
}: UserFormFieldsProps) => {
  const { userData, setUserData } = useUser();

  const [username, setUsername] = useState(userData?.username || "");
  const [jobTitle, setJobTitle] = useState(userData?.jobTitle || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() && jobTitle.trim()) {
      setUserData({
        username: username.trim(),
        jobTitle: jobTitle.trim(),
      });

      onSuccess?.();
    }
  };

  const handleCancel = () => {
    setUsername(userData?.username || "");
    setJobTitle(userData?.jobTitle || "");

    onCancel?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack gap={4}>
        <Text fontSize="lg" fontWeight="bold" textAlign="center" color="black">
          {mode === "edit" ? "Edit Your Information" : "Enter Your Information"}
        </Text>

        <Text fontSize="sm" textAlign="center" color="gray.600">
          {mode === "edit"
            ? "Update your profile information"
            : "Please provide your details to access the application"}
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

        {showCancel ? (
          <HStack gap={3} width="100%">
            <Button
              type="submit"
              colorPalette="black"
              flex="1"
              disabled={!username.trim() || !jobTitle.trim()}
            >
              {mode === "edit" ? "Save Changes" : "Get Started"}
            </Button>

            <Button
              type="button"
              variant="outline"
              flex="1"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </HStack>
        ) : (
          <Button
            type="submit"
            colorPalette="black"
            width="100%"
            disabled={!username.trim() || !jobTitle.trim()}
          >
            {mode === "edit" ? "Save Changes" : "Get Started"}
          </Button>
        )}
      </VStack>
    </form>
  );
};
