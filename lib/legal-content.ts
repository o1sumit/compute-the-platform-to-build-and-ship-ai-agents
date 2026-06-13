export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  description:
    "How Peplocked collects, uses, and protects your information when you use our AI peptide research platform.",
  lastUpdated: "February 13, 2026",
  intro:
    "Peplocked (“we,” “us,” or “our”) operates the Peplocked website and platform at peplocked.com. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using Peplocked, you agree to the practices described here.",
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We collect information you provide directly, information generated when you use the platform, and limited technical data needed to operate the service securely.",
      ],
      listItems: [
        "Account information such as your name, email address, and authentication credentials when you sign up or sign in.",
        "Profile and protocol inputs you choose to share, including research goals, compound interests, and optional health-related notes you enter into tools or chat.",
        "Payment and billing details processed by our payment provider when you subscribe to a paid plan (we do not store full card numbers on our servers).",
        "Communications you send us, including support requests and feedback.",
        "Usage data such as feature interactions, session timestamps, and device/browser type.",
        "Chat messages and uploads you submit to AI research tools, calculators, bloodwork analysis, COA verification, and related features.",
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      paragraphs: ["We use collected information to provide, improve, and protect Peplocked:"],
      listItems: [
        "Deliver AI research chat, compound library access, calculators, and premium analysis tools.",
        "Personalize your experience and remember preferences across sessions.",
        "Process subscriptions, send receipts, and manage your account.",
        "Monitor usage limits on free and paid tiers.",
        "Detect abuse, fraud, and security incidents.",
        "Send service-related notices such as policy updates or critical account alerts.",
        "Improve product quality, including evaluating and training our AI systems using de-identified or aggregated data where permitted.",
      ],
    },
    {
      id: "ai-and-chat",
      title: "AI Research Chat & Uploaded Content",
      paragraphs: [
        "Peplocked provides educational research tools only — not medical advice. Messages you send to our AI chat and files you upload may be processed by third-party AI infrastructure providers under strict contractual safeguards.",
        "Do not submit information you are not comfortable sharing with our processors. Avoid uploading identifiable medical records unless you understand they will be used to generate research summaries within your account.",
        "We may retain chat history to provide continuity, enforce usage limits, and improve safety. You can request deletion of your account data as described below.",
      ],
    },
    {
      id: "sharing",
      title: "How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We share data only in these circumstances:",
      ],
      listItems: [
        "Service providers that host infrastructure, process payments, send email, or power AI features — bound by confidentiality and data-processing agreements.",
        "Legal requirements when we believe disclosure is necessary to comply with law, regulation, legal process, or governmental request.",
        "Business transfers in connection with a merger, acquisition, or sale of assets, with notice where required by law.",
        "With your consent or at your direction.",
      ],
    },
    {
      id: "security",
      title: "Data Security",
      paragraphs: [
        "We use industry-standard technical and organizational measures to protect your data, including encryption in transit (TLS) and access controls on production systems.",
        "No method of transmission or storage is completely secure. You are responsible for maintaining the confidentiality of your account credentials.",
      ],
    },
    {
      id: "retention",
      title: "Data Retention",
      paragraphs: [
        "We retain personal information for as long as your account is active or as needed to provide the service, comply with legal obligations, resolve disputes, and enforce our agreements.",
        "When you delete your account, we delete or de-identify associated personal data within a reasonable period, except where retention is required by law or legitimate business needs such as fraud prevention.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Choices & Rights",
      paragraphs: [
        "Depending on your location, you may have rights to:",
        "To exercise these rights, contact us at support@peplocked.com. We may verify your identity before fulfilling a request.",
      ],
      listItems: [
        "Access, correct, or delete personal information we hold about you.",
        "Export your data in a portable format.",
        "Opt out of marketing emails via unsubscribe links.",
        "Restrict or object to certain processing where applicable law provides those rights.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies & Similar Technologies",
      paragraphs: [
        "We use cookies and similar technologies to keep you signed in, remember theme preferences, understand how the site is used, and improve performance.",
        "You can control cookies through your browser settings. Disabling cookies may limit some functionality.",
      ],
    },
    {
      id: "children",
      title: "Children's Privacy",
      paragraphs: [
        "Peplocked is intended for adults. We do not knowingly collect personal information from anyone under 18. If you believe a minor has provided us data, contact us and we will delete it promptly.",
      ],
    },
    {
      id: "international",
      title: "International Users",
      paragraphs: [
        "If you access Peplocked from outside the United States, your information may be processed in the U.S. or other countries where we or our service providers operate. By using the service, you consent to that transfer subject to applicable safeguards.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. We will post the revised version on this page and update the “Last updated” date. Material changes may be communicated by email or in-product notice where appropriate.",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      paragraphs: [
        "Questions about this Privacy Policy or our data practices:",
        "Email: support@peplocked.com",
        "Peplocked — peplocked.com",
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  slug: "terms",
  title: "Terms of Service",
  description:
    "Terms and conditions for using Peplocked, our AI peptide research platform, subscriptions, and premium tools.",
  lastUpdated: "May 28, 2026",
  intro:
    "These Terms of Service (“Terms”) govern your access to and use of Peplocked at peplocked.com and related services (collectively, the “Service”). By creating an account or using Peplocked, you agree to these Terms. If you do not agree, do not use the Service.",
  sections: [
    {
      id: "eligibility",
      title: "Eligibility",
      paragraphs: [
        "You must be at least 18 years old and able to form a binding contract to use Peplocked. The Service is intended for adults interested in educational peptide and performance research.",
        "You represent that the information you provide is accurate and that you will keep your account credentials confidential.",
      ],
    },
    {
      id: "educational-only",
      title: "Educational Research Only — Not Medical Advice",
      paragraphs: [
        "Peplocked provides educational research tools, AI-generated summaries, calculators, and reference content. Nothing on the Service constitutes medical advice, diagnosis, treatment, or a recommendation to use any compound, drug, or therapy.",
        "Always consult a qualified healthcare professional before making health or treatment decisions. You assume full responsibility for how you use information from Peplocked.",
      ],
    },
    {
      id: "accounts",
      title: "Accounts & Acceptable Use",
      paragraphs: ["You agree not to:"],
      listItems: [
        "Use the Service for unlawful purposes or in violation of applicable regulations.",
        "Share account access or resell Service access without authorization.",
        "Attempt to reverse engineer, scrape, or overload our systems.",
        "Submit content that is abusive, fraudulent, or infringes third-party rights.",
        "Use outputs to misrepresent medical credentials or provide unauthorized clinical advice to others.",
        "Circumvent usage limits, payment requirements, or security controls.",
      ],
    },
    {
      id: "subscriptions",
      title: "Subscriptions & Billing",
      paragraphs: [
        "Paid plans (Explorer, Locked In, and future tiers) are billed on a recurring basis through our payment processor. Prices and features are described on our pricing page and may change with notice for future billing periods.",
        "Free tiers include usage limits (such as daily AI messages). Exceeding limits may require upgrading or waiting until limits reset.",
        "Taxes may apply depending on your location. You authorize us and our payment partners to charge your selected payment method.",
        "Refunds are governed by our Refund Policy at peplocked.com/refund-policy.",
      ],
    },
    {
      id: "ai-content",
      title: "AI-Generated Content",
      paragraphs: [
        "Research chat, protocol summaries, bloodwork interpretations, COA reviews, and other AI outputs may be incomplete, outdated, or inaccurate. Compounds and regulations change; verify critical information independently.",
        "We do not guarantee that any output is correct, safe, or suitable for your circumstances. You are solely responsible for decisions based on AI-generated content.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      paragraphs: [
        "Peplocked, our logos, software, and original content are owned by us or our licensors. We grant you a limited, non-exclusive, non-transferable license to access and use the Service for personal research purposes in accordance with these Terms.",
        "You retain ownership of content you submit. You grant us a license to host, process, and use that content to operate and improve the Service, including AI features, as described in our Privacy Policy.",
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      paragraphs: [
        "Our Privacy Policy explains how we collect and use personal information. By using Peplocked, you also agree to the Privacy Policy at peplocked.com/privacy.",
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      paragraphs: [
        "THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
        "We do not warrant uninterrupted, error-free, or secure operation. See our Disclaimer at peplocked.com/disclaimer for additional limitations.",
      ],
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, PEPLOCKED AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.",
        "Our total liability for any claim relating to the Service is limited to the greater of (a) amounts you paid us in the twelve (12) months before the claim or (b) one hundred U.S. dollars (USD $100), except where prohibited by law.",
      ],
    },
    {
      id: "indemnity",
      title: "Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless Peplocked from claims, damages, and expenses (including reasonable legal fees) arising from your use of the Service, your content, or your violation of these Terms or applicable law.",
      ],
    },
    {
      id: "termination",
      title: "Termination",
      paragraphs: [
        "You may stop using the Service and cancel your subscription at any time. We may suspend or terminate access if you violate these Terms, create risk for us or other users, or as required by law.",
        "Upon termination, your right to use the Service ends. Provisions that by nature should survive (including disclaimers, liability limits, and dispute terms) will survive.",
      ],
    },
    {
      id: "changes",
      title: "Changes to These Terms",
      paragraphs: [
        "We may update these Terms from time to time. We will post the updated version on this page and revise the “Last updated” date. Continued use after changes become effective constitutes acceptance of the revised Terms.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law & Disputes",
      paragraphs: [
        "These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your jurisdiction apply.",
        "Disputes should first be emailed to support@peplocked.com. Where permitted by law, you agree to resolve disputes through binding individual arbitration rather than class actions, unless you opt out within thirty (30) days of account creation by emailing support@peplocked.com.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        "Questions about these Terms:",
        "Email: support@peplocked.com",
        "Peplocked — peplocked.com",
      ],
    },
  ],
};

export const disclaimer: LegalDocument = {
  slug: "disclaimer",
  title: "Disclaimer",
  description:
    "Important limitations on Peplocked content — educational research only, not medical advice.",
  lastUpdated: "May 28, 2026",
  intro:
    "Peplocked is an educational research platform. Please read this Disclaimer carefully before using our website, AI chat, calculators, compound library, or premium analysis tools.",
  sections: [
    {
      id: "not-medical-advice",
      title: "Not Medical Advice",
      paragraphs: [
        "Nothing on Peplocked — including AI chat responses, protocol examples, dosing calculators, compound profiles, bloodwork interpretations, COA reviews, or user testimonials — is medical advice, diagnosis, or treatment.",
        "Peplocked is not a healthcare provider. We do not prescribe, recommend, or endorse the use of any peptide, drug, supplement, or therapy for any individual.",
        "Always seek the advice of a qualified physician or other licensed healthcare provider with questions about a medical condition, treatment, or before starting, stopping, or changing any health-related program.",
      ],
    },
    {
      id: "research-compounds",
      title: "Research Compounds & Regulatory Status",
      paragraphs: [
        "Many compounds discussed on Peplocked may be intended for laboratory or research use only in certain jurisdictions and may not be approved for human consumption by regulatory agencies such as the FDA.",
        "Peplocked does not sell, ship, or supply compounds. We do not verify that users comply with local laws. You are solely responsible for understanding and following applicable laws and regulations in your jurisdiction.",
      ],
    },
    {
      id: "ai-accuracy",
      title: "AI & Information Accuracy",
      paragraphs: [
        "AI-generated content can contain errors, omissions, or outdated information. Research literature, dosing conventions, and regulatory status change over time.",
        "Compound library entries, stack suggestions, and personalized examples are for educational illustration. They are not validated for your specific health status, labs, medications, or goals.",
        "Do not rely on Peplocked as your sole source of information for decisions that affect your health or legal compliance.",
      ],
    },
    {
      id: "no-relationship",
      title: "No Doctor–Patient Relationship",
      paragraphs: [
        "Using Peplocked does not create a doctor–patient, pharmacist–patient, or other professional healthcare relationship between you and Peplocked or any of our team members, contractors, or AI systems.",
      ],
    },
    {
      id: "assumption-of-risk",
      title: "Assumption of Risk",
      paragraphs: [
        "Peptide research, self-experimentation, and performance optimization carry inherent risks, including adverse reactions, drug interactions, contamination, and legal exposure.",
        "You voluntarily assume all risks associated with interpreting or acting on information from Peplocked. We are not responsible for outcomes resulting from your decisions.",
      ],
    },
    {
      id: "third-party",
      title: "Third-Party Links & Vendors",
      paragraphs: [
        "Peplocked may reference third-party vendors, studies, or communities. We do not control and are not responsible for external sites, products, or advice. References do not constitute endorsement.",
      ],
    },
    {
      id: "no-warranties",
      title: "No Warranties",
      paragraphs: [
        "The Service and all content are provided “as is” without warranties of any kind. We disclaim all warranties, express or implied, including accuracy, completeness, merchantability, and fitness for a particular purpose.",
      ],
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Peplocked shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or reliance on the Service or its content.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        "Questions about this Disclaimer:",
        "Email: support@peplocked.com",
      ],
    },
  ],
};

export const refundPolicy: LegalDocument = {
  slug: "refund-policy",
  title: "Refund Policy",
  description:
    "When and how Peplocked issues refunds for subscriptions, including our 7-day money-back guarantee.",
  lastUpdated: "May 28, 2026",
  intro:
    "This Refund Policy explains when and how Peplocked (“we,” “us,” “our”) issues refunds for subscriptions purchased through peplocked.com.",
  sections: [
    {
      id: "money-back-guarantee",
      title: "7-Day Money-Back Guarantee (First Purchase Only)",
      paragraphs: [
        "If you are not satisfied with Peplocked, you may request a full refund within seven (7) days of your initial subscription purchase. This guarantee applies only to:",
      ],
      listItems: [
        "Your first paid subscription with Peplocked",
        "Monthly plans",
      ],
    },
    {
      id: "not-covered",
      title: "What Is Not Covered",
      paragraphs: ["The 7-day money-back guarantee does NOT apply to:"],
      listItems: [
        "Annual / yearly plans (the discounted yearly price is offered in exchange for your annual commitment and is non-refundable)",
        "Subscription renewals (monthly or annual)",
        "Any second or subsequent subscription purchased by the same customer or household",
        "Add-on purchases, credit packs, or one-time fees",
      ],
    },
    {
      id: "cancellation",
      title: "Cancellation",
      paragraphs: [
        "You may cancel your subscription at any time from your account settings or by emailing support@peplocked.com. Cancellation takes effect at the end of your current billing period. You will retain access to paid features until the end of that period. We do not offer pro-rated refunds for unused time within a billing period.",
      ],
    },
    {
      id: "how-to-request",
      title: "How to Request a Refund",
      paragraphs: [
        "To request a refund within the 7-day window, email support@peplocked.com from the email address associated with your Peplocked account. Include your account email and the date of purchase. We will process eligible refunds within 5–10 business days. Refunds are issued to the original payment method.",
      ],
    },
    {
      id: "exceptions",
      title: "Exceptions and Denied Refunds",
      paragraphs: ["We reserve the right to deny refund requests in cases of:"],
      listItems: [
        "Subscription abuse (e.g., repeatedly subscribing and refunding)",
        "Violation of our Terms of Service",
        "Chargebacks initiated before contacting us for a refund",
        "Fraudulent payment activity",
        "Accounts terminated for misconduct",
      ],
    },
    {
      id: "chargebacks",
      title: "Chargebacks",
      paragraphs: [
        "If you initiate a chargeback with your bank or card issuer before contacting us, we reserve the right to terminate your account and deny future service. We encourage you to email support@peplocked.com first — most issues can be resolved directly.",
      ],
    },
    {
      id: "statutory-rights",
      title: "Statutory Rights",
      paragraphs: [
        "Nothing in this Refund Policy limits your statutory consumer rights under the laws of your jurisdiction.",
      ],
    },
    {
      id: "questions",
      title: "Questions",
      paragraphs: [
        "If you have any questions about this Refund Policy, contact us at support@peplocked.com.",
        "For our legal entity information, see our Terms of Service.",
      ],
    },
  ],
};
