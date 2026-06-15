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
import { RealTestimonialsSection } from "@/components/landing/real-testimonials";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { faqItems, siteMeta, pricingPlans } from "@/lib/peplocked-content";

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Peplocked",
  "url": siteMeta.url,
  "description": siteMeta.description,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteMeta.url}?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Peplocked",
  "url": siteMeta.url,
  "description": siteMeta.description,
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "offers": pricingPlans.map((plan) => ({
    "@type": "Offer",
    "name": plan.name,
    "price": plan.price.monthly.toString(),
    "priceCurrency": "USD",
    "description": plan.description,
  })),
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
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
          <RealTestimonialsSection />
          <FaqSection />
          <CtaSection />
        </div>
        <FooterSection />
      </main>
    </>
  );
}
