import { AuthGuard } from "@/components/AuthGuard";
import { GalleryContent } from "@/components/Gallery/GalleryContent";

export default function GalleryPage() {
  return (
    <AuthGuard>
      <GalleryContent />
    </AuthGuard>
  );
}
