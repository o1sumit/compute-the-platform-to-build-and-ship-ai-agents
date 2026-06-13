"use client";

import {
  Gift,
  HelpCircle,
  PackageX,
  RotateCcw,
  Shield,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/peplocked-content";
import { faqAccents } from "@/lib/landing-accents";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

const faqIcons: LucideIcon[] = [Shield, PackageX, Gift, RotateCcw];

export function FaqSection() {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section id="faq" ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden">
      <SectionBackdrop variant="grid" />
      <div className="relative z-10 max-w-[800px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="text-center mb-12">
          <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            FAQ
            <span className="section-eyebrow-line" />
          </RevealTextLine>
          <div className="flex flex-col items-center gap-4">
            <IconBadge icon={HelpCircle} tone="violet" size="lg" />
            <h2 className="text-4xl md:text-5xl font-display tracking-tight">
              <RevealTextLine staggerIndex={1}>
                Frequently asked questions
              </RevealTextLine>
            </h2>
          </div>
        </RevealHeader>

        <RevealGroup isVisible={isVisible}>
          <RevealItem>
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="surface-card reveal-card-surface divide-y divide-border overflow-hidden"
            >
              {faqItems.map((item, index) => {
                const FaqIcon = faqIcons[index] ?? HelpCircle;
                const tone = faqAccents[index] ?? "violet";
                return (
                  <AccordionItem key={item.question} value={`faq-${index}`} className="border-0 px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6 gap-4">
                      <IconBadge icon={FaqIcon} tone={tone} size="sm" className="!transform-none" />
                      <span className="flex-1 font-display text-lg text-foreground">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-14">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
