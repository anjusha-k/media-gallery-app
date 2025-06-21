"use client";

import { Box } from "@chakra-ui/react";
import { UserFormFields } from "./UserFormFields";

export const UserForm = () => {
  return (
    <Box
      maxW="md"
      mx="auto"
      p={6}
      bg="white"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.200"
      shadow="md"
    >
      <UserFormFields mode="create" />
    </Box>
  );
};
