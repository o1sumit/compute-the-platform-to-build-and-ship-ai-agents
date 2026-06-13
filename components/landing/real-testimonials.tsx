"use client";

import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

const testimonials: Testimonial[] = [
  {
    text: "This platform revolutionized our research workflows, streamlining peptide sequence lookup and reconstitution calculations.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    name: "Briana Patton",
    role: "Clinical Researcher",
  },
  {
    text: "Integrating the Peplocked index into our lab analysis was smooth and quick. The clean search interface is exceptionally intuitive.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    name: "Bilal Ahmed",
    role: "IT Lab Administrator",
  },
  {
    text: "The support team is exceptional, helping us configure the calculators and providing ongoing verification assistance.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    name: "Saman Malik",
    role: "Research Support Lead",
  },
  {
    text: "The AI's reconstitution and compounding formulas have enhanced our workflow. Highly recommend for any bio-research team.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    name: "Omar Raza",
    role: "Lead Biochemist",
  },
  {
    text: "Its robust peptide metrics database and quick tool support have transformed our daily research efficiency.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation of Peplocked calculators exceeded expectations, saving us hours of manual math each week.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
    name: "Aliza Khan",
    role: "Research Analyst",
  },
  {
    text: "Our research throughput improved significantly with their user-friendly design and responsive AI interface.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80",
    name: "Farhan Siddiqui",
    role: "Biotech Director",
  },
  {
    text: "They delivered an AI-driven tool that exceeded expectations, understanding custom dosing stack configurations.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&h=120&q=80",
    name: "Sana Sheikh",
    role: "Lab Supervisor",
  },
  {
    text: "Using Peplocked, our team gets accurate compounding ratios instantly, boosting total lab safety and compliance.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80",
    name: "Hassan Ali",
    role: "Compliance Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function RealTestimonialsSection() {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden">
      <SectionBackdrop variant="mesh" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="text-center mb-16">
          <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            Testimonials
            <span className="section-eyebrow-line" />
          </RevealTextLine>

          <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground mt-4">
            <RevealTextLine staggerIndex={1}>
              What our users say
            </RevealTextLine>
          </h2>
          <RevealTextLine as="p" staggerIndex={2} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            See how Peplocked is transforming laboratory research and peptide analysis for professionals.
          </RevealTextLine>
        </RevealHeader>

        <RevealGroup isVisible={isVisible}>
          <RevealItem>
            <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
              <TestimonialsColumn testimonials={firstColumn} duration={18} />
              <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
              <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
