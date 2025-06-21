import type { Metadata } from "next";
import { ClientProviders } from "@/providers/Chakra";
import { UserProvider } from "@/contexts/UserContext";
import { Footer } from "@/components/Footer";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Media Gallery App",
  description:
    "A responsive media gallery application built with Next.js and GraphQL",
};

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
              <Box flex="1">{children}</Box>
              <Footer />
            </Box>
          </UserProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
