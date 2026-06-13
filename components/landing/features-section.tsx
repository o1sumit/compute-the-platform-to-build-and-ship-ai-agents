"use client";

import {
  BookOpen,
  Bot,
  Calculator,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/peplocked-content";
import { featureAccents } from "@/lib/landing-accents";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

const featureIcons: LucideIcon[] = [Bot, BookOpen, Calculator, ScanSearch];

export function FeaturesSection() {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section id="features" ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden">
      <SectionBackdrop variant="mesh" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="relative mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow">
                <span className="section-eyebrow-line" />
                Features
              </RevealTextLine>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95]">
                <RevealTextLine staggerIndex={1} className="text-foreground">
                  Tools built
                </RevealTextLine>
                <RevealTextLine staggerIndex={2} className="text-muted-foreground">
                  for serious protocols.
                </RevealTextLine>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <RevealTextLine
                as="p"
                staggerIndex={3}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Every feature is designed to feel credible, intentional, and useful for real protocols.
              </RevealTextLine>
            </div>
          </div>
        </RevealHeader>

        <RevealGroup isVisible={isVisible} className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {features.map((feature, index) => {
            const FeatureIcon = featureIcons[index] ?? Bot;
            const accent = featureAccents[index] ?? "blue";
            return (
              <RevealItem key={feature.title} staggerIndex={index}>
                <div className="surface-card-pop reveal-card-surface p-8 lg:p-10 group h-full flex flex-col">
                  <IconBadge icon={FeatureIcon} tone={accent} size="md" />
                  <h3 className="mt-6 text-2xl lg:text-[1.75rem] font-display tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  <div className="reveal-card-stat mt-8 pt-2">
                    <span className="text-3xl lg:text-4xl font-display tracking-tight text-foreground">
                      {feature.stats.value}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-1.5">
                      {feature.stats.label}
                    </span>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-10 text-center">
          <RevealItem>
            <a
              href="#pricing"
              className="reveal-card-surface inline-flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <RevealTextLine staggerIndex={0} className="text-lg font-display">
                See all features
              </RevealTextLine>
              <RevealTextLine staggerIndex={1} className="text-sm">
                Compare plans and unlock the full toolkit.
              </RevealTextLine>
            </a>
          </RevealItem>
        </div>
      </div>
    </section>
  );
}
