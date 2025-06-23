import { Box } from "@chakra-ui/react";
import { UserFormFields } from "./UserFormFields";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "create" | "edit";
}

export const UserModal = ({ isOpen, onClose, mode }: UserModalProps) => {
  if (!isOpen) {
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
          p={6}
          maxW="md"
          width="90%"
          mx={4}
          onClick={(e) => e.stopPropagation()}
        >
          <UserFormFields
            mode={mode}
            onSuccess={onClose}
            onCancel={onClose}
            showCancel={mode === "edit"}
          />
        </Box>
      </Box>
    </>
  );
};
