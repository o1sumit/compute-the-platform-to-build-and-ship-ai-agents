"use client";

import { useEffect, useState } from "react";
import { ClipboardList, Target, UserRound } from "lucide-react";
import { personas } from "@/lib/peplocked-content";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

export function TestimonialsSection() {
  const { ref, isVisible } = useSectionReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % personas.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const active = personas[activeIndex];

  return (
    <section ref={ref} className="landing-section relative py-32 lg:py-40 overflow-hidden">
      <SectionBackdrop variant="orbs" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="mb-16">
          <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow">
            <span className="section-eyebrow-line" />
            Personalization
          </RevealTextLine>
          <h2 className="text-4xl lg:text-5xl font-display">
            <RevealTextLine staggerIndex={1} className="text-foreground" inline>
              Different inputs.
            </RevealTextLine>{" "}
            <RevealTextLine staggerIndex={2} className="text-muted-foreground" inline>
              Different protocols.
            </RevealTextLine>
          </h2>
          <RevealTextLine as="p" staggerIndex={3} className="mt-4 text-muted-foreground max-w-xl">
            See how the AI tailors recommendations based on what you tell it.
          </RevealTextLine>
        </RevealHeader>

        <RevealGroup isVisible={isVisible} className="grid lg:grid-cols-12 gap-6">
          <RevealItem className="lg:col-span-4" staggerIndex={0}>
            <div className="reveal-card-surface flex flex-col gap-2">
              {personas.map((persona, idx) => (
                <button
                  key={persona.name}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-3 text-left p-4 rounded-xl transition-all w-full ${
                    idx === activeIndex
                      ? "surface-card-highlight text-foreground"
                      : "surface-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <IconBadge icon={UserRound} variant={idx === activeIndex ? "highlight" : "muted"} size="sm" className="!transform-none" />
                  {persona.name}
                </button>
              ))}
            </div>
          </RevealItem>

          <RevealItem className="lg:col-span-8" staggerIndex={1}>
            <div key={activeIndex} className="surface-card-highlight reveal-card-surface p-8 lg:p-12 h-full">
              <div className="flex items-center gap-4 mb-6">
                <IconBadge icon={UserRound} variant="highlight" size="lg" />
                <p className="text-3xl font-display text-foreground">{active.name}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {active.tags.map((tag) => (
                  <span key={tag} className="soft-chip px-3 py-1 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl bg-muted/50 border border-border p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="size-4 text-primary" strokeWidth={1.75} />
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Goal</span>
                  </div>
                  <p className="text-lg text-foreground">{active.goal}</p>
                </div>
                <div className="rounded-xl bg-muted/50 border border-border p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <ClipboardList className="size-4 text-primary" strokeWidth={1.75} />
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Example output</span>
                  </div>
                  <p className="text-lg text-foreground/90">{active.stack}</p>
                </div>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Examples for illustration only. Your protocol depends on your inputs and goals. Not medical advice.
        </p>
      </div>
    </section>
  );
}
