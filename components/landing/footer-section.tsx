"use client";

import { ArrowUpRight } from "lucide-react";
import { footerLinks } from "@/lib/peplocked-content";
import {
  RevealGroup,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

export function FooterSection() {
  const { ref, isVisible } = useSectionReveal();
  const linkGroups = Object.entries(footerLinks);

  return (
    <footer ref={ref} className="relative border-t border-border bg-background">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-20">
          <RevealGroup isVisible={isVisible} className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            <RevealItem className="col-span-2" staggerIndex={0}>
              <div className="reveal-card-surface">
                <RevealTextLine staggerIndex={0}>
                  <a href="/" className="inline-flex items-center gap-2 mb-6">
                    <span className="text-2xl font-display text-foreground">Peplocked</span>
                  </a>
                </RevealTextLine>

                <RevealTextLine as="p" staggerIndex={1} className="text-muted-foreground leading-relaxed mb-8 max-w-xs text-sm">
                  AI-powered peptide research and protocol planning for men who train hard and want research-grade specificity.
                </RevealTextLine>
              </div>
            </RevealItem>

            {linkGroups.map(([title, links], index) => (
              <RevealItem key={title} staggerIndex={index + 1}>
                <div className="reveal-card-surface">
                  <h3 className="text-sm font-medium text-foreground mb-6">{title}</h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                          {...(link.href.startsWith("http") || link.href.startsWith("mailto:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {link.name}
                          {(link.href.startsWith("http") || link.href.startsWith("mailto:")) && (
                            <ArrowUpRight className="w-3 h-3 opacity-50" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup isVisible={isVisible}>
          <RevealItem>
            <div className="reveal-card-surface py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; 2026 Peplocked. All rights reserved.
              </p>

              <p className="text-sm text-muted-foreground font-mono">
                Educational research only. Not medical advice.
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </footer>
  );
}
