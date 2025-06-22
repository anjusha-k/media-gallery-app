"use client";
import {
  Container,
  VStack,
  Box,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { useRouter, useSearchParams } from "next/navigation";
import { GET_CHARACTERS, CharactersResponse, Character } from "@/lib/queries";
import { GalleryHeader } from "./GalleryHeader";
import { CharacterCard } from "./CharacterCard";
import { PaginationControls } from "./PaginationControls";

export const GalleryContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const { loading, error, data } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    {
      variables: { page: currentPage },
    }
  );

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`/gallery?${params.toString()}`);
  };

  const handleCharacterClick = (character: Character) => {
    console.log("Character clicked:", character);
  };

  return (
    <Container maxW="container.xl" py={12}>
      <VStack gap={8} align="stretch">
        <GalleryHeader
          currentPage={currentPage}
          totalPages={data?.characters.info.pages}
          totalCount={data?.characters.info.count}
        />

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
          <>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              gap={6}
            >
              {data.characters.results.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onClick={handleCharacterClick}
                />
              ))}
            </SimpleGrid>

            <PaginationControls
              currentPage={currentPage}
              paginationInfo={data.characters.info}
              onPageChange={handlePageChange}
              resultsCount={data.characters.results.length}
            />
          </>
        )}
      </VStack>
    </Container>
  );
};
