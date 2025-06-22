"use client";
import { Box, HStack, Button, IconButton, Text } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationInfo {
  pages: number;
  next: number | null;
  prev: number | null;
}

interface PaginationControlsProps {
  currentPage: number;
  paginationInfo: PaginationInfo;
  onPageChange: (page: number) => void;
  resultsCount: number;
}

export const PaginationControls = ({
  currentPage,
  paginationInfo,
  onPageChange,
  resultsCount,
}: PaginationControlsProps) => {
  const handlePrevious = () => {
    if (paginationInfo.prev) {
      onPageChange(paginationInfo.prev);
    }
  };

  const handleNext = () => {
    if (paginationInfo.next) {
      onPageChange(paginationInfo.next);
    }
  };

  const generatePageNumbers = () => {
    const totalPages = paginationInfo.pages;
    const pages: number[] = [];

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <Box py={8}>
      <HStack justify="center" gap={2}>
        <IconButton
          aria-label="Previous page"
          onClick={handlePrevious}
          disabled={!paginationInfo.prev}
          variant="outline"
        >
          <FiChevronLeft />
        </IconButton>

        {generatePageNumbers().map((pageNum) => (
          <Button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            variant={pageNum === currentPage ? "solid" : "outline"}
            colorPalette={pageNum === currentPage ? "black" : "gray"}
            size="sm"
          >
            {pageNum}
          </Button>
        ))}

        <IconButton
          aria-label="Next page"
          onClick={handleNext}
          disabled={!paginationInfo.next}
          variant="outline"
        >
          <FiChevronRight />
        </IconButton>
      </HStack>

      <Text textAlign="center" color="gray.500" fontSize="sm" mt={4}>
        Showing {resultsCount} characters
      </Text>
    </Box>
  );
};
