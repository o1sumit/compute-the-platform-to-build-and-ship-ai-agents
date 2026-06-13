import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ChatSection } from "@/components/landing/chat-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { CalculatorSection } from "@/components/landing/calculator-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { SecuritySection } from "@/components/landing/security-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="landing-surface relative">
        <ChatSection />
        <FeaturesSection />
        <CalculatorSection />
        <ProblemSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <MetricsSection />
        <InfrastructureSection />
        <SecuritySection />
        <DevelopersSection />
        <ComparisonSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </div>
      <FooterSection />
    </main>
  );
}
