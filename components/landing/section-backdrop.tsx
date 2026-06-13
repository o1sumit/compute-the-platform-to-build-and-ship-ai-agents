"use client";

import { cn } from "@/lib/utils";

type SectionBackdropProps = {
  variant?: "mesh" | "grid" | "orbs" | "lines";
  className?: string;
};

export function SectionBackdrop({ variant = "mesh", className }: SectionBackdropProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {variant === "mesh" && (
        <>
          <div className="section-orb section-orb-primary section-orb-top-right" />
          <div className="section-orb section-orb-secondary section-orb-bottom-left" />
          <div className="section-orb section-orb-violet section-orb-center-right" />
          <div className="section-orb section-orb-coral section-orb-bottom-right" />
          <div className="section-dot-grid" />
        </>
      )}
      {variant === "grid" && (
        <>
          <div className="section-line-grid" />
          <div className="section-orb section-orb-primary section-orb-center" />
          <div className="section-orb section-orb-violet section-orb-top-left" />
        </>
      )}
      {variant === "orbs" && (
        <>
          <div className="section-orb section-orb-primary section-orb-top-left" />
          <div className="section-orb section-orb-secondary section-orb-bottom-right" />
          <div className="section-orb section-orb-tertiary section-orb-center-right" />
          <div className="section-orb section-orb-violet section-orb-top-right" />
          <div className="section-orb section-orb-coral section-orb-bottom-left" />
        </>
      )}
      {variant === "lines" && (
        <>
          <div className="section-line-grid section-line-grid-fade" />
          <div className="section-scan-line" />
        </>
      )}
    </div>
  );
}
