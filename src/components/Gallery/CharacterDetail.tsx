"use client";
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Button,
  Heading,
  Badge,
} from "@chakra-ui/react";
import { Character } from "@/lib/queries";

interface CharacterDetailProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CharacterDetail = ({
  character,
  isOpen,
  onClose,
}: CharacterDetailProps) => {
  if (!isOpen || !character) {
    return null;
  }

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="black.600"
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
          maxW="lg"
          width="90%"
          mx={4}
          maxH="90vh"
          overflowY="auto"
          onClick={(e) => e.stopPropagation()}
        >
          <VStack gap={6} align="stretch">
            <HStack justify="space-between" align="center">
              <Heading size="lg" color="black">
                Character Details
              </Heading>
              <Button size="sm" variant="ghost" onClick={onClose}>
                ✕
              </Button>
            </HStack>

            <Box textAlign="center">
              <Image
                src={character.image}
                alt={character.name}
                borderRadius="lg"
                maxW="300px"
                mx="auto"
                shadow="md"
              />
            </Box>

            <VStack gap={4} align="stretch">
              <Box textAlign="center">
                <Heading size="xl" mb={2} color="black">
                  {character.name}
                </Heading>
                <Badge size="lg" px={3} py={1} borderRadius="md">
                  {character.status}
                </Badge>
              </Box>

              <VStack gap={3} align="stretch">
                <Box p={4} bg="gray.50" borderRadius="md">
                  <Text fontSize="sm" color="gray.600" mb={1}>
                    Species
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="black">
                    {character.species}
                  </Text>
                </Box>

                <Box p={4} bg="gray.50" borderRadius="md">
                  <Text fontSize="sm" color="gray.600" mb={1}>
                    Character ID
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="black">
                    #{character.id}
                  </Text>
                </Box>
              </VStack>
            </VStack>

            <Button
              onClick={onClose}
              colorPalette="black"
              size="lg"
              width="100%"
            >
              Close
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
};
