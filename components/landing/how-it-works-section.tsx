"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  LineChart,
  MessagesSquare,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import { howItWorksSteps } from "@/lib/peplocked-content";
import { stepAccents } from "@/lib/landing-accents";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

const stepIcons: LucideIcon[] = [UserPlus, Brain, MessagesSquare, LineChart];

export function HowItWorksSection() {
  const { ref, isVisible } = useSectionReveal();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howItWorksSteps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden">
      <SectionBackdrop variant="grid" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="relative mb-16 lg:mb-20">
          <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow">
            <span className="section-eyebrow-line" />
            How It Works
          </RevealTextLine>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.9]">
            <RevealTextLine staggerIndex={1} className="text-foreground">
              Scattered to dialed-in.
            </RevealTextLine>
            <RevealTextLine staggerIndex={2} className="hero-accent">
              Fast.
            </RevealTextLine>
          </h2>
          <RevealTextLine as="p" staggerIndex={3} className="mt-6 text-lg text-muted-foreground max-w-xl">
            The fastest path from &ldquo;what should I take?&rdquo; to &ldquo;here&apos;s exactly what to do.&rdquo;
          </RevealTextLine>
        </RevealHeader>

        <RevealGroup isVisible={isVisible} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {howItWorksSteps.map((step, index) => {
            const StepIcon = stepIcons[index] ?? UserPlus;
            const accent = stepAccents[index] ?? "blue";
            const isActive = activeStep === index;
            return (
              <RevealItem key={step.number} staggerIndex={index}>
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`reveal-card-surface relative text-left p-8 rounded-2xl w-full h-full transition-all duration-300 ${
                    isActive
                      ? "surface-card-highlight"
                      : "surface-card-pop opacity-95 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <IconBadge
                      icon={StepIcon}
                      tone={isActive ? accent : undefined}
                      variant={isActive ? "default" : "muted"}
                    />
                    <span className={`text-sm font-mono ${isActive ? "text-primary" : "text-muted-foreground/50"}`}>
                      {step.number}
                    </span>
                  </div>
                  <div className="mb-4 h-px bg-border overflow-hidden">
                    {isActive && (
                      <div className="h-full w-full bg-foreground/20 motion-safe:animate-progress" />
                    )}
                  </div>
                  <h3 className="text-2xl font-display mb-1">{step.title}</h3>
                  <span className="text-lg text-muted-foreground font-display block mb-4">{step.subtitle}</span>
                  <p className={`text-muted-foreground leading-relaxed text-sm ${isActive ? "opacity-100" : "opacity-75"}`}>
                    {step.description}
                  </p>
                </button>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 6s linear forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-progress {
            animation: none;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
