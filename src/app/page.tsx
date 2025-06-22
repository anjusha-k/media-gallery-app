"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

export default function Home() {
  const { isAuthenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/gallery");
    } else {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  return null;
}
