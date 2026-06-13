import { termsOfService } from "@/lib/legal-content";
import { createLegalMetadata, LegalPageShell } from "@/lib/create-legal-page";

export const metadata = createLegalMetadata(termsOfService);

export default function TermsPage() {
  return <LegalPageShell document={termsOfService} />;
}
