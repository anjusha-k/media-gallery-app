// components/Header.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  HStack,
  Text,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { FiEdit2, FiLogOut } from "react-icons/fi";
import { useUser } from "@/contexts/UserContext";
import { UserModal } from "./UserModal";

export const Header = () => {
  const { isAuthenticated, userData, clearUserData } = useUser();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const router = useRouter();

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      clearUserData();
      router.push("/");
    }
  };

  return (
    <>
      <Box bg="white" borderBottom="1px solid" borderColor="gray.200" py={4}>
        <Container maxW="container.xl">
          <HStack justify="space-between" align="center">
            <Heading size="lg" color="black">
              Rick & Morty Gallery
            </Heading>

            <HStack gap={4} align="center">
              <Text color="gray.700" fontSize="md">
                {userData?.username} | {userData?.jobTitle}
              </Text>

              <IconButton
                aria-label="Edit profile"
                size="sm"
                variant="solid"
                onClick={() => setIsEditModalOpen(true)}
              >
                <FiEdit2 />
              </IconButton>

              <IconButton
                aria-label="Logout"
                size="sm"
                variant="solid"
                onClick={handleLogout}
              >
                <FiLogOut />
              </IconButton>
            </HStack>
          </HStack>
        </Container>
      </Box>

      <UserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        mode="edit"
      />
    </>
  );
};
