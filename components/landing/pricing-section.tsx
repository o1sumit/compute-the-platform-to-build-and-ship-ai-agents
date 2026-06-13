"use client";

import { useState } from "react";
import { pricingPlans } from "@/lib/peplocked-content";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import { PricingCard, ShaderCanvas } from "@/components/ui/animated-glassy-pricing";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

export function PricingSection() {
  const { ref, isVisible } = useSectionReveal();
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" ref={ref} className="landing-section relative py-32 lg:py-40 overflow-hidden">
      {/* WebGL Fluid Circle Shader Backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-30 dark:opacity-15">
        <ShaderCanvas />
      </div>
      <SectionBackdrop variant="orbs" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8">
            <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow">
              <span className="section-eyebrow-line" />
              Pricing
            </RevealTextLine>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.9]">
              <RevealTextLine staggerIndex={1} className="text-foreground">
                Pick your
              </RevealTextLine>
              <RevealTextLine staggerIndex={2} className="text-muted-foreground">
                level.
              </RevealTextLine>
            </h2>
            <RevealTextLine as="p" staggerIndex={3} className="mt-6 text-xl text-muted-foreground max-w-lg">
              Start free, upgrade when you&apos;re ready to track everything.
            </RevealTextLine>
          </div>

          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end">
            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 p-1">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`h-8 w-24 flex items-center justify-center text-sm rounded-full transition-all cursor-pointer ${
                  !isAnnual
                    ? "bg-background text-foreground premium-shadow font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`h-8 w-24 flex items-center justify-center text-sm rounded-full transition-all cursor-pointer ${
                  isAnnual
                    ? "bg-background text-foreground premium-shadow font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
              </button>
            </div>
          </div>
        </RevealHeader>

        <RevealGroup isVisible={isVisible} className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-stretch w-full max-w-5xl mx-auto">
          {pricingPlans.map((plan, planIndex) => {
            const priceVal = isAnnual ? plan.price.annual : plan.price.monthly;
            return (
              <RevealItem key={plan.name} staggerIndex={planIndex} className="flex flex-1 justify-center">
                <PricingCard
                  planName={plan.name}
                  description={plan.description}
                  price={priceVal.toString()}
                  features={plan.features}
                  buttonText={plan.cta}
                  isPopular={plan.highlight}
                  buttonVariant={plan.highlight ? "primary" : "secondary"}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.location.hash = "pricing";
                    }
                  }}
                />
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-16 text-center">
          <a href="#pricing" className="text-sm text-primary hover:underline underline-offset-4 font-mono">
            See full pricing →
          </a>
        </div>
      </div>
    </section>
  );
}
