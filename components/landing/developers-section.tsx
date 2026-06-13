"use client";

import { Activity, ClipboardCheck, FileCheck, HeartPulse, Layers } from "lucide-react";
import { premiumTools } from "@/lib/peplocked-content";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import { AsciiScene } from "@/components/landing/ascii-scene";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

const toolIcons = [HeartPulse, Activity, FileCheck, ClipboardCheck];

export function DevelopersSection() {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section id="tools" ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden">
      <SectionBackdrop variant="grid" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Header & Tools Grid */}
          <div className="lg:col-span-7 flex flex-col">
            <RevealHeader isVisible={isVisible} className="mb-12">
              <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow">
                <span className="section-eyebrow-line" />
                <Layers className="size-3.5" strokeWidth={1.75} />
                Locked In
              </RevealTextLine>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.9]">
                <RevealTextLine staggerIndex={1} className="text-foreground">
                  Your full protocol
                </RevealTextLine>
                <RevealTextLine staggerIndex={2} className="text-muted-foreground">
                  command center.
                </RevealTextLine>
              </h2>
              <RevealTextLine as="p" staggerIndex={3} className="mt-6 text-xl text-muted-foreground max-w-xl">
                Premium tools that turn Peplocked into your private clinical lab and research engine.
              </RevealTextLine>
            </RevealHeader>

            <RevealGroup isVisible={isVisible} className="grid sm:grid-cols-2 gap-5">
              {premiumTools.map((tool, index) => {
                const Icon = toolIcons[index] ?? Activity;
                return (
                  <RevealItem key={tool.title} staggerIndex={index}>
                    <div className="surface-card reveal-card-surface p-6 h-full flex flex-col">
                      <IconBadge icon={Icon} variant="highlight" className="mb-4" />
                      <h3 className="font-medium mb-2 text-foreground">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{tool.description}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          {/* Right Side: Interactive ASCII Simulation Lab */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <RevealItem staggerIndex={2} className="h-full flex flex-col">
              <div className="surface-card-highlight reveal-card-surface p-6 min-h-[440px] flex-1 flex flex-col justify-between relative overflow-hidden group rounded-2xl select-none">
                {/* Background 3D ASCII Canvas */}
                <div className="absolute inset-0 z-0 opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                  <AsciiScene />
                </div>
                
                {/* Overlay Vignette shading for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none z-1" />
                
                {/* Card Content (layered above canvas) */}
                <div className="relative z-10 self-start">
                  <span className="soft-chip px-3 py-1 text-xs font-mono bg-black/75 backdrop-blur-md border border-border/40 text-primary rounded-full">
                    SIMULATION LAB
                  </span>
                </div>
                
                <div className="relative z-10 bg-black/75 border border-border/30 backdrop-blur-md p-4 rounded-xl mt-auto font-mono text-[10px] text-muted-foreground/80 space-y-1">
                  <p className="text-foreground font-semibold mb-1 text-[11px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Interactive Molecular Modulator
                  </p>
                  <p className="text-muted-foreground/60">Hover and move mouse to align peptide receptors.</p>
                  <p className="text-primary/95 pt-0.5">[MODEL] Target: BPC-157 / TB-500 binding complex</p>
                  <p className="opacity-70">[LOG] Receptor affinity score: 98.4% (Optimized)</p>
                  <p className="opacity-75">[LOG] Helical rotation angle: mouse-relative</p>
                  <p className="opacity-85">[LOG] Angiogenetic stimulation: active</p>
                </div>
              </div>
            </RevealItem>
          </div>
        </div>
      </div>
    </section>
  );
}
