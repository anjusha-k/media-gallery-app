"use client";
import { Box, VStack, Text, Image } from "@chakra-ui/react";
import { Character } from "@/lib/queries";

interface CharacterCardProps {
  character: Character;
  onClick?: (character: Character) => void;
}

export const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  const handleClick = () => {
    onClick?.(character);
  };

  return (
    <Box
      p={4}
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      bg="white"
      shadow="sm"
      _hover={{ shadow: "md", transform: "translateY(-2px)" }}
      transition="all 0.2s"
      cursor="pointer"
      onClick={handleClick}
    >
      <VStack align="center" gap={3}>
        <Image
          src={character.image}
          alt={character.name}
          borderRadius="md"
          boxSize="200px"
          objectFit="cover"
        />
        <Text fontWeight="bold" fontSize="lg" textAlign="center">
          {character.name}
        </Text>
        <Text color="gray.600" textAlign="center">
          {character.species} • {character.status}
        </Text>
      </VStack>
    </Box>
  );
};
