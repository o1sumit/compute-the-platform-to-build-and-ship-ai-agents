"use client";

import { useState } from "react";
import { ArrowRight, Check, Zap } from "lucide-react";
import { pricingPlans } from "@/lib/peplocked-content";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
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
                    ? "bg-background text-foreground premium-shadow"
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
                    ? "bg-background text-foreground premium-shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
              </button>
            </div>
          </div>
        </RevealHeader>

        <RevealGroup isVisible={isVisible} className="grid lg:grid-cols-3 gap-5">
          {pricingPlans.map((plan, planIndex) => {
            const planBody = (
              <>
                {plan.highlight && (
                  <div className="absolute -top-4 left-8 right-8 flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 btn-pop text-xs font-mono uppercase tracking-widest rounded-full">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  <div className="mb-8 pb-8 border-b border-border">
                    <h3 className="text-2xl lg:text-3xl font-display text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl lg:text-6xl font-display text-foreground">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground text-sm">/mo</span>
                    </div>
                    {plan.annualNote && (
                      <p className="text-xs text-muted-foreground mt-2 font-mono">{plan.annualNote}</p>
                    )}
                    {plan.name === "Free" && (
                      <p className="text-xs text-muted-foreground mt-2 font-mono">No card required</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#pricing"
                    className={`w-full py-3.5 flex items-center justify-center gap-2 text-sm font-medium rounded-xl transition-all group ${
                      plan.highlight
                        ? "btn-pop"
                        : "border border-border text-foreground hover:bg-accent"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </>
            );

            return (
              <RevealItem key={plan.name} staggerIndex={planIndex}>
                <div
                  className={`reveal-card-surface relative rounded-2xl h-full ${
                    plan.highlight
                      ? "surface-card-highlight-pop lg:scale-[1.02] lg:z-10"
                      : "surface-card-pop"
                  }`}
                >
                  {plan.highlight ? (
                    <div className="surface-card-highlight-inner h-full relative">{planBody}</div>
                  ) : (
                    planBody
                  )}
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-12 text-center">
          <a href="#pricing" className="text-sm text-primary hover:underline underline-offset-4">
            See full pricing →
          </a>
        </div>
      </div>
    </section>
  );
}
