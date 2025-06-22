"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useUser } from "@/contexts/UserContext";

interface GalleryHeaderProps {
  currentPage: number;
  totalPages?: number;
  totalCount?: number;
}

export const GalleryHeader = ({
  currentPage,
  totalPages,
  totalCount,
}: GalleryHeaderProps) => {
  const { userData } = useUser();

  return (
    <Box textAlign="center">
      <Heading size="2xl" mb={4} color="black">
        Rick and Morty Gallery
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Welcome {userData?.username}! Explore the characters from the
        multiverse.
      </Text>
      {totalPages && totalCount && (
        <Text fontSize="sm" color="gray.500" mt={2}>
          Page {currentPage} of {totalPages} • {totalCount} total characters
        </Text>
      )}
    </Box>
  );
};
