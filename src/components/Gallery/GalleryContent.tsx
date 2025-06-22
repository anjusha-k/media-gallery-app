"use client";
import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { useUser } from "@/contexts/UserContext";
import { GET_CHARACTERS, CharactersResponse } from "@/lib/queries";

export const GalleryContent = () => {
  const { userData } = useUser();

  const { loading, error, data } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    {
      variables: { page: 1 },
    }
  );

  return (
    <Container maxW="container.xl" py={12}>
      <VStack gap={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" mb={4} color="black">
            Rick and Morty Gallery
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Welcome {userData?.username}! Explore the characters from the
            multiverse.
          </Text>
        </Box>

        {loading && (
          <Box display="flex" justifyContent="center" py={8}>
            <Spinner size="xl" color="blue.500" />
          </Box>
        )}

        {error && (
          <Box
            p={4}
            borderRadius="md"
            bg="red.50"
            border="1px solid"
            borderColor="red.200"
          >
            <Text color="red.600">
              Error loading characters: {error.message}
            </Text>
          </Box>
        )}

        {data && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
            {data.characters.results.map((character) => (
              <Box
                key={character.id}
                p={4}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                bg="white"
                shadow="sm"
                _hover={{ shadow: "md", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                cursor="pointer"
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
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
};
