"use client";

import {
  AlertCircle,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
} from "lucide-react";
import { problemComparison } from "@/lib/peplocked-content";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

export function ProblemSection() {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden">
      <SectionBackdrop variant="lines" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="mb-16">
          <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow">
            <span className="section-eyebrow-line" />
            {problemComparison.eyebrow}
          </RevealTextLine>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-tight max-w-4xl">
            <RevealTextLine staggerIndex={1}>
              {problemComparison.title}
            </RevealTextLine>
          </h2>
          <RevealTextLine as="p" staggerIndex={2} className="mt-6 text-xl text-muted-foreground max-w-2xl">
            {problemComparison.subtitle}
          </RevealTextLine>
        </RevealHeader>

        <RevealGroup isVisible={isVisible} className="grid lg:grid-cols-2 gap-6">
          <RevealItem staggerIndex={0}>
            <div className="surface-card reveal-card-surface p-6 lg:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <IconBadge icon={AlertCircle} variant="muted" />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {problemComparison.without.label}
                </p>
              </div>
              <div className="mt-2 space-y-3">
                {problemComparison.without.sources.map((source) => (
                  <div key={source.title} className="rounded-xl border border-border bg-muted/40 p-4">
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" strokeWidth={1.75} />
                      <div>
                        <p className="text-xs font-mono text-muted-foreground">{source.title}</p>
                        <p className="mt-1 text-sm text-foreground/85">&ldquo;{source.quote}&rdquo;</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                {problemComparison.without.summary}
              </p>
            </div>
          </RevealItem>

          <RevealItem staggerIndex={1}>
            <div className="surface-card-highlight reveal-card-surface p-6 lg:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <IconBadge icon={CheckCircle2} variant="success" />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                  {problemComparison.with.label}
                </p>
              </div>
              <div className="mt-2 rounded-xl border border-border bg-accent/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ClipboardList className="size-4 text-primary" strokeWidth={1.75} />
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {problemComparison.with.planTitle}
                  </p>
                </div>
                <p className="text-lg font-display text-foreground">{problemComparison.with.planSubtitle}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {problemComparison.with.items.map((item) => (
                    <li key={item.name} className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="text-muted-foreground">{item.dose}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase">
                      {problemComparison.with.track.label}
                    </span>
                    <p className="mt-1 text-foreground">{problemComparison.with.track.value}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase">
                      {problemComparison.with.retest.label}
                    </span>
                    <p className="mt-1 text-foreground">{problemComparison.with.retest.value}</p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                {problemComparison.with.summary}
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
