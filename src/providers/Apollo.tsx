"use client";

import { PropsWithChildren } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apollo-client";

export function ApolloClientProvider({ children }: PropsWithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
