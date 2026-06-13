"use client";

import type { LegalDocument } from "@/lib/legal-content";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

type LegalDocumentPageProps = {
  document: LegalDocument;
};

export function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  const { ref, isVisible } = useSectionReveal();

  return (
    <div ref={ref as any} className="landing-surface relative min-h-screen">
      <SectionBackdrop variant="mesh" />

      <div className="relative z-10 pt-28 pb-8 lg:pt-32">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <RevealHeader isVisible={isVisible} className="mb-12 lg:mb-16">
            <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow">
              <span className="section-eyebrow-line" />
              Legal
            </RevealTextLine>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05] text-foreground">
              <RevealTextLine staggerIndex={1}>{document.title}</RevealTextLine>
            </h1>
            <RevealTextLine
              as="p"
              staggerIndex={2}
              className="mt-4 text-sm font-mono text-muted-foreground"
            >
              Last updated {document.lastUpdated}
            </RevealTextLine>
            <RevealTextLine
              as="p"
              staggerIndex={3}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              {document.intro}
            </RevealTextLine>
          </RevealHeader>

          <RevealGroup isVisible={isVisible} className="space-y-5 pb-16 lg:pb-24">
            {document.sections.map((section, index) => (
              <RevealItem key={section.id} staggerIndex={index}>
                <article
                  id={section.id}
                  className="surface-card reveal-card-surface p-8 lg:p-10 scroll-mt-28"
                >
                  <h2 className="text-xl lg:text-2xl font-display tracking-tight text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="legal-prose text-muted-foreground leading-relaxed">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.listItems && (
                      <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-primary/60">
                        {section.listItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </div>
  );
}
