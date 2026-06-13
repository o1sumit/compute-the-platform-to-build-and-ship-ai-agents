import { privacyPolicy } from "@/lib/legal-content";
import { createLegalMetadata, LegalPageShell } from "@/lib/create-legal-page";

export const metadata = createLegalMetadata(privacyPolicy);

export default function PrivacyPage() {
  return <LegalPageShell document={privacyPolicy} />;
}
