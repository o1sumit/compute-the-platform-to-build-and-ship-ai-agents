"use client";

import { useState, useEffect } from "react";
import { Calculator, Info, RotateCcw, AlertTriangle, CheckCircle } from "lucide-react";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import { IconBadge } from "@/components/landing/icon-badge";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

type SyringeSize = 100 | 50 | 30;

const PRESETS = [
  { name: "BPC-157 (Recovery)", vial: 5, water: 2, dose: 250 },
  { name: "TB-500 (Healing)", vial: 5, water: 2, dose: 333 },
  { name: "Ipamorelin (GH)", vial: 2, water: 2, dose: 100 },
  { name: "Tirzepatide (Weight)", vial: 10, water: 2, dose: 2500 },
];

export function CalculatorSection() {
  const { ref, isVisible } = useSectionReveal();

  // Input states
  const [vialMg, setVialMg] = useState<number>(5);
  const [waterMl, setWaterMl] = useState<number>(2);
  const [doseMcg, setDoseMcg] = useState<number>(250);
  const [syringeSize, setSyringeSize] = useState<SyringeSize>(100);

  // Manual text input states (to avoid slider-only limitation)
  const [vialInput, setVialInput] = useState<string>("5");
  const [waterInput, setWaterInput] = useState<string>("2");
  const [doseInput, setDoseInput] = useState<string>("250");

  // Sync inputs
  useEffect(() => {
    setVialInput(vialMg.toString());
  }, [vialMg]);

  useEffect(() => {
    setWaterInput(waterMl.toString());
  }, [waterMl]);

  useEffect(() => {
    setDoseInput(doseMcg.toString());
  }, [doseMcg]);

  const handleVialChange = (val: string) => {
    setVialInput(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      setVialMg(num);
    }
  };

  const handleWaterChange = (val: string) => {
    setWaterInput(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      setWaterMl(num);
    }
  };

  const handleDoseChange = (val: string) => {
    setDoseInput(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      setDoseMcg(num);
    }
  };

  // Preset handler
  const applyPreset = (preset: typeof PRESETS[0]) => {
    setVialMg(preset.vial);
    setWaterMl(preset.water);
    setDoseMcg(preset.dose);
  };

  const resetCalculator = () => {
    setVialMg(5);
    setWaterMl(2);
    setDoseMcg(250);
    setSyringeSize(100);
  };

  // Reconstitution Calculations
  const vialMcg = vialMg * 1000;
  const concentration = waterMl > 0 ? vialMcg / waterMl : 0; // mcg per mL
  const doseMl = concentration > 0 ? doseMcg / concentration : 0;
  
  // 100 units = 1.0 mL. Therefore 1 unit = 0.01 mL.
  // Units to draw = mL to draw * 100.
  const unitsToDraw = doseMl * 100;

  // Syringe scale properties
  const isOverflow = unitsToDraw > syringeSize;
  const fraction = Math.min(1, Math.max(0, unitsToDraw / syringeSize));
  
  // Stopper X position (barrel starts at x=80, ends at x=480, span=400)
  const stopperX = 80 + fraction * 400;

  // Slider background fill percentages
  const vialPercent = Math.min(100, Math.max(0, ((vialMg - 1) / (100 - 1)) * 100));
  const waterPercent = Math.min(100, Math.max(0, ((waterMl - 0.5) / (10 - 0.5)) * 100));
  const dosePercent = Math.min(100, Math.max(0, ((doseMcg - 50) / (10000 - 50)) * 100));

  const trackBg = (percent: number) =>
    `linear-gradient(to right, var(--primary) 0%, var(--primary) ${percent}%, rgba(120, 120, 128, 0.25) ${percent}%, rgba(120, 120, 128, 0.25) 100%)`;

  return (
    <section id="calculator" ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden border-t border-border/40">
      <SectionBackdrop variant="orbs" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="mb-16">
          <div className="flex flex-col items-start gap-4">
            <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow">
              <span className="section-eyebrow-line" />
              Interactive Tool
            </RevealTextLine>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.9] text-foreground">
              <RevealTextLine staggerIndex={1}>Reconstitution</RevealTextLine>
              <br />
              <RevealTextLine staggerIndex={2} className="text-muted-foreground">
                & Dose Calculator.
              </RevealTextLine>
            </h2>
            <RevealTextLine as="p" staggerIndex={3} className="mt-4 text-xl text-muted-foreground max-w-xl">
              Calculate dilution and draw units precisely. Visualize the exact fill line on a custom-calibrated syringe.
            </RevealTextLine>
          </div>
        </RevealHeader>

        {/* Preset chips */}
        <RevealGroup isVisible={isVisible} className="mb-8 flex flex-wrap gap-2.5 items-center animate-fade-in">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mr-2">Presets:</span>
          {PRESETS.map((preset, idx) => (
            <RevealItem key={preset.name} staggerIndex={idx}>
              <button
                type="button"
                onClick={() => applyPreset(preset)}
                className="h-8 px-4 flex items-center justify-center rounded-full text-xs font-mono border border-white/30 dark:border-white/5 bg-white/20 dark:bg-white/5 text-muted-foreground hover:text-foreground hover:border-primary/45 dark:hover:border-primary/45 hover:bg-primary/10 dark:hover:bg-primary/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all cursor-pointer"
              >
                {preset.name}
              </button>
            </RevealItem>
          ))}
          <button
            type="button"
            onClick={resetCalculator}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-white/30 dark:border-white/5 bg-white/20 dark:bg-white/5 text-muted-foreground hover:text-foreground hover:border-primary/45 dark:hover:border-primary/45 hover:bg-primary/10 dark:hover:bg-primary/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all ml-auto cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </RevealGroup>

        <RevealGroup isVisible={isVisible} className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Inputs Panel (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-t-white/35 border-l-white/25 border-b-black/15 border-r-black/15 dark:border-t-white/10 dark:border-l-white/10 dark:border-b-black/40 dark:border-r-black/40 bg-white/35 dark:bg-neutral-950/45 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.35)] p-6 lg:p-8 flex flex-col gap-6 h-full relative">
              <h3 className="text-xl font-display text-foreground border-b border-border/30 pb-4">Configure Parameters</h3>

              {/* Vial Size */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="vial-size" className="text-sm font-medium text-foreground">Peptide Vial Quantity</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      value={vialInput}
                      onChange={(e) => handleVialChange(e.target.value)}
                      className="w-16 h-8 text-right bg-neutral-500/[0.06] border border-neutral-200/40 dark:border-neutral-800/40 rounded-lg text-sm px-2 focus:bg-background focus:border-primary/30 outline-none transition-all duration-200 font-mono text-foreground font-semibold focus:ring-0"
                    />
                    <span className="text-xs text-muted-foreground font-mono">mg</span>
                  </div>
                </div>
                <input
                  id="vial-size"
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={vialMg}
                  onChange={(e) => setVialMg(Number(e.target.value))}
                  style={{ background: trackBg(vialPercent) }}
                  className="w-full h-1 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-neutral-300 dark:[&::-webkit-slider-thumb]:border-neutral-700 [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-90 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-neutral-300 dark:[&::-moz-range-thumb]:border-neutral-700 [&::-moz-range-thumb]:shadow-md hover:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:scale-90"
                />
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                  <span>1 mg</span>
                  <span>50 mg</span>
                  <span>100 mg</span>
                </div>
              </div>

              {/* Bacteriostatic Water */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="water-vol" className="text-sm font-medium text-foreground">Bacteriostatic Water Added</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      step="0.1"
                      value={waterInput}
                      onChange={(e) => handleWaterChange(e.target.value)}
                      className="w-16 h-8 text-right bg-neutral-500/[0.06] border border-neutral-200/40 dark:border-neutral-800/40 rounded-lg text-sm px-2 focus:bg-background focus:border-primary/30 outline-none transition-all duration-200 font-mono text-foreground font-semibold focus:ring-0"
                    />
                    <span className="text-xs text-muted-foreground font-mono">mL</span>
                  </div>
                </div>
                <input
                  id="water-vol"
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={waterMl}
                  onChange={(e) => setWaterMl(Number(e.target.value))}
                  style={{ background: trackBg(waterPercent) }}
                  className="w-full h-1 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-neutral-300 dark:[&::-webkit-slider-thumb]:border-neutral-700 [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-90 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-neutral-300 dark:[&::-moz-range-thumb]:border-neutral-700 [&::-moz-range-thumb]:shadow-md hover:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:scale-90"
                />
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                  <span>0.5 mL</span>
                  <span>5 mL</span>
                  <span>10 mL</span>
                </div>
              </div>

              {/* Target Dose */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="target-dose" className="text-sm font-medium text-foreground">Desired Target Dose</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      step="50"
                      value={doseInput}
                      onChange={(e) => handleDoseChange(e.target.value)}
                      className="w-20 h-8 text-right bg-neutral-500/[0.06] border border-neutral-200/40 dark:border-neutral-800/40 rounded-lg text-sm px-2 focus:bg-background focus:border-primary/30 outline-none transition-all duration-200 font-mono text-foreground font-semibold focus:ring-0"
                    />
                    <span className="text-xs text-muted-foreground font-mono">mcg</span>
                  </div>
                </div>
                <input
                  id="target-dose"
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={doseMcg}
                  onChange={(e) => setDoseMcg(Number(e.target.value))}
                  style={{ background: trackBg(dosePercent) }}
                  className="w-full h-1 rounded-lg appearance-none cursor-pointer outline-none transition-all duration-150 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-neutral-300 dark:[&::-webkit-slider-thumb]:border-neutral-700 [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-90 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-neutral-300 dark:[&::-moz-range-thumb]:border-neutral-700 [&::-moz-range-thumb]:shadow-md hover:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:scale-90"
                />
              </div>

              {/* Syringe Selection Tabs */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-sm font-medium text-foreground">Insulin Syringe Size</span>
                <div className="grid grid-cols-3 bg-neutral-500/10 dark:bg-neutral-500/5 p-1 rounded-xl border border-neutral-200/30 dark:border-neutral-800/30 backdrop-blur-md">
                  {([100, 50, 30] as SyringeSize[]).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSyringeSize(size)}
                      className={`h-9 flex items-center justify-center rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                        syringeSize === size
                          ? "bg-white dark:bg-neutral-800 text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-neutral-200/20 dark:border-neutral-700/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      {size === 100 ? "1.0 mL" : size === 50 ? "0.5 mL" : "0.3 mL"}
                      <span className="text-[10px] opacity-60 ml-1">({size}U)</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Output & Visualizer (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-t-white/35 border-l-white/25 border-b-black/15 border-r-black/15 dark:border-t-white/10 dark:border-l-white/10 dark:border-b-black/40 dark:border-r-black/40 bg-white/35 dark:bg-neutral-950/45 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.35)] p-6 lg:p-8 flex flex-col justify-between h-full relative">
              <div>
                <div className="flex justify-between items-start mb-6 pb-6 border-b border-border/30">
                  <div>
                    <h3 className="text-xl font-display text-foreground">Calculated Draw</h3>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      Concentration: {concentration.toLocaleString()} mcg / mL
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl lg:text-5xl font-display text-foreground tracking-tight animate-pulse-subtle">
                      {unitsToDraw.toFixed(1)}
                    </span>
                    <span className="text-sm text-primary font-mono ml-1.5 uppercase font-semibold">Units</span>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      Volume: {doseMl.toFixed(3)} mL
                    </p>
                  </div>
                </div>

                {/* Notifications & Warning Banners */}
                <div className="space-y-3 mb-8">
                  {isOverflow ? (
                    <div className="flex items-start gap-3 rounded-2xl border border-destructive/20 dark:border-destructive/10 bg-destructive/5 dark:bg-destructive/5 p-4 text-sm backdrop-blur-md">
                       <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                       <div>
                         <p className="font-semibold text-destructive-foreground">Dose Exceeds Syringe Capacity</p>
                         <p className="mt-1 text-xs text-destructive-foreground/80 leading-relaxed">
                           A {syringeSize} Unit syringe can only hold up to {syringeSize * 10} mcg. You will need {unitsToDraw.toFixed(1)} units. Please use a larger syringe or decrease the water volume to increase the concentration.
                         </p>
                       </div>
                    </div>
                  ) : unitsToDraw < 5 && unitsToDraw > 0 ? (
                    <div className="flex items-start gap-3 rounded-2xl border border-amber-500/20 dark:border-amber-500/10 bg-amber-500/5 dark:bg-amber-500/5 p-4 text-sm backdrop-blur-md">
                       <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                       <div>
                         <p className="font-semibold text-amber-600 dark:text-amber-400">Low Draw Warning</p>
                         <p className="mt-1 text-xs text-amber-700/80 dark:text-amber-300/80 leading-relaxed">
                           Drawing less than 5 units ({unitsToDraw.toFixed(1)} U) is challenging to measure accurately on a U-{syringeSize} syringe. Consider adding more diluent water to increase the draw volume.
                         </p>
                       </div>
                    </div>
                  ) : doseMcg > vialMcg ? (
                    <div className="flex items-start gap-3 rounded-2xl border border-destructive/20 dark:border-destructive/10 bg-destructive/5 dark:bg-destructive/5 p-4 text-sm backdrop-blur-md">
                       <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                       <div>
                         <p className="font-semibold text-destructive-foreground">Invalid Dose</p>
                         <p className="mt-1 text-xs text-destructive-foreground/80 leading-relaxed">
                           The target dose ({doseMcg.toLocaleString()} mcg) is greater than the total amount of peptide in the vial ({vialMcg.toLocaleString()} mcg).
                         </p>
                       </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3 rounded-2xl border border-green-500/20 dark:border-green-500/10 bg-green-500/5 dark:bg-green-500/5 p-4 text-sm backdrop-blur-md">
                       <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                       <div>
                         <p className="font-semibold text-green-600 dark:text-green-400">Accurate Calculation</p>
                         <p className="mt-1 text-xs text-green-700/80 dark:text-green-300/80 leading-relaxed font-normal">
                           Reconstitute your {vialMg} mg vial with {waterMl} mL of Bac Water. Clean the vial stopper, inject the water slowly, and pull the syringe plunger to exactly the <strong>{unitsToDraw.toFixed(1)} U</strong> mark.
                         </p>
                       </div>
                    </div>
                  )}
                </div>

                {/* Interactive SVG Syringe Visualizer */}
                <div className="bg-neutral-500/[0.03] border border-white/35 dark:border-white/5 rounded-2xl p-4 lg:p-6 mb-4 overflow-x-auto select-none shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                  <div className="min-w-[550px] py-4">
                    <svg viewBox="0 0 940 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto overflow-visible">
                      <defs>
                        {/* Glowing Liquid Gradient */}
                        <linearGradient id="syringe-liquid-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--pop-coral)" />
                          <stop offset="70%" stopColor="var(--pop-violet)" />
                          <stop offset="100%" stopColor="var(--pop-blue)" />
                        </linearGradient>
                        {/* Reflections and highlights */}
                        <linearGradient id="glass-glare" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                          <stop offset="25%" stopColor="white" stopOpacity="0.05" />
                          <stop offset="50%" stopColor="white" stopOpacity="0" />
                          <stop offset="85%" stopColor="black" stopOpacity="0.05" />
                          <stop offset="100%" stopColor="black" stopOpacity="0.15" />
                        </linearGradient>
                      </defs>

                      {/* 1. Plunger assembly (drawn first so it layers behind the barrel cylinder) */}
                      {/* Plunger Shaft */}
                      <rect
                        x={stopperX + 16}
                        y={64}
                        width={400}
                        height={12}
                        fill="currentColor"
                        className="text-muted-foreground/35 transition-all duration-300"
                      />
                      {/* Plunger Thumb Flange */}
                      <rect
                        x={stopperX + 416}
                        y={42}
                        width={10}
                        height={56}
                        rx={2}
                        fill="currentColor"
                        className="text-muted-foreground/45 transition-all duration-300"
                      />
                      {/* Black Rubber Stopper Piston Head */}
                      <g className="transition-all duration-300">
                        {/* Main rubber seal */}
                        <rect x={stopperX} y={42} width={16} height={56} rx={1} fill="#111" />
                        {/* Inner ribs */}
                        <line x1={stopperX + 5} y1={42} x2={stopperX + 5} y2={98} stroke="#222" strokeWidth={2} />
                        <line x1={stopperX + 11} y1={42} x2={stopperX + 11} y2={98} stroke="#222" strokeWidth={2} />
                      </g>

                      {/* 2. Liquid fill (within the inner dimensions of the barrel, y=42 to 98) */}
                      {unitsToDraw > 0 && (
                        <rect
                          x={80}
                          y={42}
                          width={stopperX - 80}
                          height={56}
                          fill="url(#syringe-liquid-grad)"
                          opacity={0.8}
                          className="transition-all duration-300"
                        />
                      )}

                      {/* 3. Syringe Barrel markings and ticks */}
                      <g className="stroke-foreground/20" strokeWidth={1}>
                        {(() => {
                          const ticks = [];
                          const maxTicks = syringeSize;
                          
                          // Determine tick density to avoid visual noise
                          const interval = maxTicks === 100 ? 2 : 1;
                          
                          for (let i = 0; i <= maxTicks; i += interval) {
                            const x = 80 + (i / maxTicks) * 400;
                            const isMajor = i % 10 === 0;
                            const isMedium = !isMajor && i % 5 === 0;
                            
                            ticks.push(
                              <g key={`tick-${i}`} className="transition-all duration-300">
                                {/* Top and bottom tick segments */}
                                <line
                                  x1={x}
                                  y1={40}
                                  x2={x}
                                  y2={isMajor ? 53 : isMedium ? 48 : 45}
                                  className="stroke-foreground/35 dark:stroke-white/35"
                                  strokeWidth={isMajor ? 1.5 : 1}
                                />
                                <line
                                  x1={x}
                                  y1={100}
                                  x2={x}
                                  y2={isMajor ? 87 : isMedium ? 92 : 95}
                                  className="stroke-foreground/35 dark:stroke-white/35"
                                  strokeWidth={isMajor ? 1.5 : 1}
                                />
                                {/* Major numbers */}
                                {isMajor && i > 0 && (
                                  <text
                                    x={x}
                                    y={30}
                                    textAnchor="middle"
                                    fill="currentColor"
                                    className="text-[10px] font-mono text-muted-foreground font-semibold"
                                  >
                                    {i}
                                  </text>
                                )}
                              </g>
                            );
                          }
                          return ticks;
                        })()}
                      </g>

                      {/* 4. Glass Barrel Cylinder Outline */}
                      {/* Zero indicator line */}
                      <line x1={80} y1={40} x2={80} y2={100} stroke="currentColor" className="text-foreground/40" strokeWidth={2} />
                      
                      {/* Barrel Outline */}
                      <rect
                        x={80}
                        y={40}
                        width={400}
                        height={60}
                        rx={2}
                        stroke="currentColor"
                        className="text-foreground/30 dark:text-white/20"
                        strokeWidth={2}
                        fill="none"
                      />

                      {/* Glass Glare Overlay */}
                      <rect
                        x={80}
                        y={40}
                        width={400}
                        height={60}
                        fill="url(#glass-glare)"
                        pointerEvents="none"
                      />

                      {/* Barrel Flange (Finger grip handle at back) */}
                      <rect
                        x={480}
                        y={24}
                        width={12}
                        height={92}
                        rx={3}
                        fill="currentColor"
                        className="text-foreground/25 dark:text-white/15 border border-border"
                      />

                      {/* 5. Needle Hub & Needle */}
                      {/* Hub plastic connector */}
                      <path
                        d="M50 54 L80 40 L80 100 L50 86 Z"
                        fill="currentColor"
                        className="text-[#ff9d5c] dark:text-[#cc7233]"
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeOpacity={0.2}
                      />
                      {/* Needle Shaft */}
                      <line
                        x1={8}
                        y1={70}
                        x2={50}
                        y2={70}
                        stroke="#999"
                        strokeWidth={1.75}
                      />
                      {/* Needle bevel detail */}
                      <line
                        x1={8}
                        y1={70}
                        x2={14}
                        y2={68}
                        stroke="#999"
                        strokeWidth={1}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quick Math Summary */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-4 pt-6 border-t border-border/30 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  U-100 Standard: 1 Unit = 0.01 mL
                </span>
                <span>
                  Draw: {doseMl.toFixed(3)} mL · {unitsToDraw.toFixed(1)} units
                </span>
              </div>
            </div>
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
