import { disclaimer } from "@/lib/legal-content";
import { createLegalMetadata, LegalPageShell } from "@/lib/create-legal-page";

export const metadata = createLegalMetadata(disclaimer);

export default function DisclaimerPage() {
  return <LegalPageShell document={disclaimer} />;
}
