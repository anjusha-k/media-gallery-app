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
          p={{ base: 4, md: 6 }}
          maxW={{ base: "95%", sm: "90%", md: "lg", lg: "xl" }}
          width="100%"
          mx={4}
          maxH={{ base: "95vh", md: "90vh" }}
          overflowY="auto"
          onClick={(e) => e.stopPropagation()}
        >
          <VStack gap={{ base: 4, md: 6 }} align="stretch">
            <HStack justify="space-between" align="center">
              <Heading size={{ base: "md", md: "lg" }} color="black">
                Character Details
              </Heading>
              <Button size="sm" variant="ghost" onClick={onClose}>
                ✕
              </Button>
            </HStack>

            <VStack gap={{ base: 4, md: 6 }} align="stretch">
              <Box textAlign="center">
                <Image
                  src={character.image}
                  alt={character.name}
                  borderRadius="lg"
                  maxW={{ base: "200px", sm: "250px", md: "300px" }}
                  w="100%"
                  mx="auto"
                  shadow="md"
                />
              </Box>

              <VStack gap={4} align="stretch">
                <Box textAlign="center">
                  <Heading
                    size={{ base: "lg", md: "xl" }}
                    mb={2}
                    color="black"
                    lineHeight="shorter"
                  >
                    {character.name}
                  </Heading>
                  <Badge
                    size={{ base: "md", md: "lg" }}
                    px={4}
                    py={2}
                    borderRadius="md"
                  >
                    {character.status}
                  </Badge>
                </Box>

                <VStack gap={3} align="stretch">
                  <Box p={4} bg="gray.50" borderRadius="md">
                    <Text fontSize="sm" color="gray.600" mb={1}>
                      Species
                    </Text>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="bold"
                      color="black"
                    >
                      {character.species}
                    </Text>
                  </Box>

                  <Box p={4} bg="gray.50" borderRadius="md">
                    <Text fontSize="sm" color="gray.600" mb={1}>
                      Character ID
                    </Text>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="bold"
                      color="black"
                    >
                      #{character.id}
                    </Text>
                  </Box>
                </VStack>
              </VStack>
            </VStack>

            <Button
              onClick={onClose}
              colorPalette="black"
              size={{ base: "md", md: "lg" }}
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
