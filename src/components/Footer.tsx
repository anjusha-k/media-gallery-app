"use client";

import { Box, Text, Container } from "@chakra-ui/react";

/**
 * Footer component that displays the challenge version
 * This component is responsive and sticks to the bottom of the page
 */
export const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4} mt="auto" width="100%">
      <Container maxW="container.xl" centerContent>
        <Text fontSize="sm" textAlign="center">
          Challenge Version: v3.5
        </Text>
      </Container>
    </Box>
  );
};
