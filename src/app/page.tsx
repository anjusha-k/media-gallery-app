import { AuthenticatedHome } from "@/components/AuthenticateHome";
import { AuthGuard } from "@/components/AuthGuard";

/**
 * Home Page
 * Shows login form to unauthenticated users
 * Shows authenticated content to logged-in users
 */
export default function Home() {
  return (
    <AuthGuard>
      <AuthenticatedHome />
    </AuthGuard>
  );
}
