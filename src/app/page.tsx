"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { AuthGuard } from "@/components/AuthGuard";

export default function Home() {
  const { isAuthenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/gallery");
    }
  }, [isAuthenticated, router]);

  return <AuthGuard />;
}
