import type { Metadata } from "next";
import { ClientProviders } from "@/providers/Chakra";
import { UserProvider } from "@/contexts/UserContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Media Gallery App",
  description:
    "A responsive media gallery application built with Next.js and GraphQL",
};

/**
 * Root layout component that wraps the entire application
 * Provides the basic HTML structure and global providers
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }}>
        <ClientProviders>
          <UserProvider>
            <Box minH="100vh" display="flex" flexDirection="column">
              <Header />
              <Box flex="1">{children}</Box>
              <Footer />
            </Box>
          </UserProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
