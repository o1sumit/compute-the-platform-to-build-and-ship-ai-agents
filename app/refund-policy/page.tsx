import { refundPolicy } from "@/lib/legal-content";
import { createLegalMetadata, LegalPageShell } from "@/lib/create-legal-page";

export const metadata = createLegalMetadata(refundPolicy);

export default function RefundPolicyPage() {
  return <LegalPageShell document={refundPolicy} />;
}
