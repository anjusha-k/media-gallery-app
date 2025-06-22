"use client";
import type { PropsWithChildren } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ApolloClientProvider } from "./Apollo";

export function ClientProviders({ children }: PropsWithChildren) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ApolloClientProvider>{children}</ApolloClientProvider>
    </ChakraProvider>
  );
}
