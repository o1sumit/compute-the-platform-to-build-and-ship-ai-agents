"use client";

import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

export function CtaSection() {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden">
      <SectionBackdrop variant="mesh" />
      <div className="section-orb section-orb-coral section-orb-center absolute inset-0 mx-auto max-w-md opacity-60" aria-hidden />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealGroup isVisible={isVisible}>
          <RevealItem>
            <div className="surface-card-highlight-pop reveal-card-surface relative overflow-hidden">
              <div className="surface-card-highlight-inner relative overflow-hidden">
                <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24 text-center">
                  <div className="flex justify-center mb-6">
                    <IconBadge icon={Rocket} tone="coral" size="lg" />
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-6 leading-tight text-foreground">
                    <RevealTextLine staggerIndex={0} className="text-foreground" inline>
                      Ready to lock in your{" "}
                    </RevealTextLine>
                    <RevealTextLine staggerIndex={1} className="text-foreground" inline>
                      <span className="text-gradient-pop">research?</span>
                    </RevealTextLine>
                  </h2>
                  <RevealTextLine
                    as="p"
                    staggerIndex={2}
                    className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto"
                  >
                    Start free with 10 AI messages per day. Upgrade when you need unlimited chat and premium tools.
                  </RevealTextLine>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      size="lg"
                      asChild
                      className="btn-pop px-8 h-14 text-base rounded-full group"
                    >
                      <a href="#pricing">
                        Get started free
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-8 font-mono">
                    Educational research only. Not medical advice.
                  </p>
                </div>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
