"use client";

import { useEffect, useState } from "react";
import { Lightbulb, ShieldAlert } from "lucide-react";
import { myths } from "@/lib/peplocked-content";
import { mythAccents } from "@/lib/landing-accents";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

export function SecuritySection() {
  const { ref, isVisible } = useSectionReveal();
  const [activeMyth, setActiveMyth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMyth((prev) => (prev + 1) % myths.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="myths" ref={ref} className="landing-section relative py-32 lg:py-40 overflow-hidden">
      <SectionBackdrop variant="lines" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="mb-16">
          <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow">
            <span className="section-eyebrow-line" />
            Built Different
          </RevealTextLine>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-tight">
            <RevealTextLine staggerIndex={1} className="text-foreground">
              Why most peptide advice
            </RevealTextLine>
            <RevealTextLine staggerIndex={2} className="text-muted-foreground">
              is wrong.
            </RevealTextLine>
          </h2>
          <RevealTextLine as="p" staggerIndex={3} className="mt-6 text-xl text-muted-foreground max-w-2xl">
            The peptide internet is full of confident misinformation. Here&apos;s what we do differently.
          </RevealTextLine>
        </RevealHeader>

        <RevealGroup isVisible={isVisible} className="grid lg:grid-cols-3 gap-4">
          {myths.map((item, index) => {
            const isActive = activeMyth === index;
            const tone = mythAccents[index] ?? "violet";
            return (
              <RevealItem key={item.myth} staggerIndex={index}>
                <button
                  type="button"
                  onClick={() => setActiveMyth(index)}
                  className={`reveal-card-surface text-left p-8 rounded-2xl w-full h-full transition-all duration-300 ${
                    isActive ? "surface-card-highlight" : "surface-card-pop"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <IconBadge icon={ShieldAlert} tone={isActive ? tone : undefined} variant="muted" size="sm" />
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Myth</p>
                  </div>
                  <p className="text-lg font-display mb-6 text-foreground">{item.myth}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <IconBadge icon={Lightbulb} tone={isActive ? tone : undefined} variant="muted" size="sm" />
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Reality</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.reality}</p>
                </button>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
