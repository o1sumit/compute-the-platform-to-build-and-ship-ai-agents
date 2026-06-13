"use client";

import { Suspense, useEffect, useState } from "react";
import { Clock3, FlaskConical, MessagesSquare } from "lucide-react";
import { hero } from "@/lib/peplocked-content";
import { heroStatAccents } from "@/lib/landing-accents";
import { IconBadge } from "@/components/landing/icon-badge";
import { RevealItem, RevealTextLine } from "@/components/landing/use-section-reveal";
import { GenerativeArtScene } from "@/components/ui/anomalous-matter-hero";

const statIcons = [FlaskConical, Clock3, MessagesSquare];

function RotatingWord({ word }: { word: string }) {
  return (
    <span key={word} className="hero-accent word-fade-in">
      {word}
    </span>
  );
}

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % hero.rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-background transition-colors duration-500">
      <div className="absolute inset-0 z-0">
        {mounted ? (
          <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
            <GenerativeArtScene className="absolute inset-0 w-full h-full" meshOffsetX={1.45} />
          </Suspense>
        ) : (
          <div className="absolute inset-0 bg-background" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none dark:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/70 pointer-events-none dark:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-transparent pointer-events-none hidden dark:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70 pointer-events-none hidden dark:block" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="lg:max-w-[58%]">
          <RevealTextLine
            immediate
            staggerIndex={0}
            className="mb-8 inline-flex items-center gap-3 text-sm font-mono text-foreground/55 dark:text-white/55 tracking-wide uppercase"
          >
            <IconBadge icon={FlaskConical} variant="hero" tone="coral" size="sm" />
            {hero.eyebrow}
          </RevealTextLine>

          <h1 className="mb-12 text-left text-[clamp(2rem,6vw,5.5rem)] font-display leading-[0.95] tracking-tight text-foreground dark:text-white">
            <RevealTextLine immediate staggerIndex={1} className="text-foreground dark:text-white">
              {hero.headlineLine1}
            </RevealTextLine>
            <RevealTextLine immediate staggerIndex={2} className="mt-1 text-foreground dark:text-white">
              {hero.headlineLine2Prefix}{" "}
              <span className="relative inline-block">
                <RotatingWord word={hero.rotatingWords[wordIndex]} />
              </span>
            </RevealTextLine>
          </h1>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-6 lg:px-12 z-10">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-start gap-8 lg:gap-14">
          {hero.stats.map((stat, index) => {
            const StatIcon = statIcons[index] ?? FlaskConical;
            const tone = heroStatAccents[index] ?? "blue";
            return (
              <RevealItem key={stat.label} staggerIndex={index + 3}>
                <div className="flex items-start gap-3">
                  <IconBadge icon={StatIcon} variant="hero" tone={tone} size="sm" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl lg:text-3xl font-display text-foreground dark:text-white">{stat.value}</span>
                    <span className="text-xs text-foreground/50 dark:text-white/50 leading-tight max-w-[120px]">{stat.label}</span>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
