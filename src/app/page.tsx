import { AuthenticatedHome } from "@/components/AuthenticateHome";
import { AuthGuard } from "@/components/AuthGuard";

export default function Home() {
  return (
    <AuthGuard>
      <AuthenticatedHome />
    </AuthGuard>
  );
}
