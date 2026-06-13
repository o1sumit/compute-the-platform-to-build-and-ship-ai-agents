import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { LegalDocumentPage } from "@/components/landing/legal-document-page";
import { FooterSection } from "@/components/landing/footer-section";
import type { LegalDocument } from "@/lib/legal-content";
import { siteMeta } from "@/lib/peplocked-content";

export function createLegalMetadata(document: LegalDocument): Metadata {
  return {
    title: `${document.title} | Peplocked`,
    description: document.description,
    openGraph: {
      title: `${document.title} | Peplocked`,
      description: document.description,
      url: `${siteMeta.url}/${document.slug}`,
      type: "website",
    },
  };
}

export function LegalPageShell({ document }: { document: LegalDocument }) {
  return (
    <main className="relative min-h-screen">
      <Navigation variant="subpage" />
      <LegalDocumentPage document={document} />
      <FooterSection />
    </main>
  );
}
