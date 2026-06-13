"use client";

import {
  Activity,
  Brain,
  Dumbbell,
  HeartPulse,
  Infinity,
  type LucideIcon,
} from "lucide-react";
import { compoundCategories } from "@/lib/peplocked-content";
import { compoundAccents } from "@/lib/landing-accents";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

const categoryIcons: LucideIcon[] = [HeartPulse, Dumbbell, Brain, Infinity, Activity];

export function IntegrationsSection() {
  const { ref, isVisible } = useSectionReveal();
  const standard = compoundCategories.filter((c) => !c.wide);
  const wide = compoundCategories.filter((c) => c.wide);

  const renderCard = (category: (typeof compoundCategories)[0], index: number) => {
    const CategoryIcon = categoryIcons[index] ?? HeartPulse;
    const tone = compoundAccents[index] ?? "blue";
    return (
      <RevealItem key={category.title} staggerIndex={index}>
        <div className="surface-card reveal-card-surface group relative flex flex-col p-8 h-full">
          <IconBadge icon={CategoryIcon} tone={tone} />
          <h3 className="mt-5 text-xl font-display tracking-wide text-foreground">{category.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{category.subhead}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.peptides.map((peptide) => (
              <span key={peptide} className="soft-chip px-3 py-1 text-xs font-mono">
                {peptide}
              </span>
            ))}
          </div>
        </div>
      </RevealItem>
    );
  };

  return (
    <section id="compounds" ref={ref} className="landing-section relative overflow-hidden py-24 lg:py-32">
      <SectionBackdrop variant="mesh" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="text-center mb-16">
          <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            Coverage
            <span className="section-eyebrow-line" />
          </RevealTextLine>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-tight">
            <RevealTextLine staggerIndex={1} className="text-foreground">
              40+ compounds, expanding weekly.
            </RevealTextLine>
            <RevealTextLine staggerIndex={2} className="text-muted-foreground">
              Organized by what you actually want.
            </RevealTextLine>
          </h2>
          <RevealTextLine as="p" staggerIndex={3} className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse by goal. Each compound includes mechanism, dosing, half-life, stacks, and research tier.
          </RevealTextLine>
        </RevealHeader>

        <RevealGroup isVisible={isVisible} className="grid md:grid-cols-3 gap-4 mb-4">
          {standard.map((category, index) => renderCard(category, index))}
        </RevealGroup>

        <RevealGroup isVisible={isVisible} className="grid md:grid-cols-2 gap-4">
          {wide.map((category, index) => renderCard(category, index + 3))}
        </RevealGroup>
      </div>
    </section>
  );
}
