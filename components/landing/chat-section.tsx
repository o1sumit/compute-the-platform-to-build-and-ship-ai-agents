"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, MessageSquareText, Send, User, Sparkles, Dumbbell, Activity, Zap, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/landing/icon-badge";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";
import {
  chatSection,
  FREE_CHAT_LIMIT,
  getChatResponse,
} from "@/lib/peplocked-content";
import { FloatingPaths } from "@/components/ui/background-paths";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  {
    category: "Body Recomp",
    title: "Fat Loss & Muscle",
    prompt: "Best peptides for fat loss with muscle retention?",
    icon: Dumbbell,
  },
  {
    category: "Tissue Repair",
    title: "Tendon Recovery",
    prompt: "BPC-157 vs TB-500 for tendon recovery",
    icon: Activity,
  },
  {
    category: "GH Optimization",
    title: "Secretagogue Stacks",
    prompt: "Can I stack CJC-1295 with Ipamorelin?",
    icon: Zap,
  },
  {
    category: "Hormone Health",
    title: "Pre-TRT Optimization",
    prompt: "How do I optimize testosterone before TRT?",
    icon: Heart,
  },
];

export function ChatSection() {
  const { ref, isVisible } = useSectionReveal();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [assistantCount, setAssistantCount] = useState(0);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const limitReached = assistantCount >= FREE_CHAT_LIMIT;
  const remaining = Math.max(0, FREE_CHAT_LIMIT - assistantCount);

  useEffect(() => {
    if (messages.length === 0 && !isTyping) return;
    chatScrollRef.current?.scrollTo({ top: chatScrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping || limitReached) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setMessages((prev) => [...prev, { role: "assistant", content: getChatResponse(trimmed) }]);
    setAssistantCount((prev) => prev + 1);
    setIsTyping(false);
  };

  return (
    <section id="chat" ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden">
      {/* Full Background SVG Floating Paths */}
      <div className="absolute inset-0 -z-25 pointer-events-none overflow-hidden opacity-85 dark:opacity-60">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <SectionBackdrop variant="orbs" />
      <div className="relative z-10 max-w-[800px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="text-center mb-12">
          <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            AI Research Chat
            <span className="section-eyebrow-line" />
          </RevealTextLine>
          <div className="flex flex-col items-center gap-4 mb-2">
            <IconBadge icon={MessageSquareText} tone="cyan" size="lg" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-foreground">
              <RevealTextLine staggerIndex={1} className="text-foreground">
                {chatSection.title}
              </RevealTextLine>
            </h2>
          </div>
          <RevealTextLine as="p" staggerIndex={2} className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            {chatSection.subtitle}
          </RevealTextLine>
        </RevealHeader>

        <RevealGroup isVisible={isVisible}>
          <RevealItem className="relative">

            {/* Background Liquid Glass Glow Orbs (placed behind card, z-0) */}
            <div className="absolute -inset-8 -z-10 pointer-events-none opacity-40 dark:opacity-30 blur-[60px]">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400/20 dark:bg-cyan-500/15" />
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-400/20 dark:bg-purple-500/15" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-rose-400/15 dark:bg-rose-500/10" />
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.4)] relative">
              <div className="overflow-hidden">
                <div
                  ref={chatScrollRef}
                  className="h-[380px] md:h-[430px] overflow-y-auto p-4 md:p-6 space-y-6"
                >
                  {/* Empty State Onboarding: Clean Suggestions Grid with System Status */}
                  {messages.length === 0 && !isTyping && (
                    <div className="flex flex-col gap-6 h-full justify-center py-4 animate-[fadeIn_0.25s_ease-out]">
                      {/* Subtitle / System Line */}
                      <div className="flex items-center justify-between border-b border-neutral-200/20 dark:border-neutral-800/20 pb-3">
                        <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Peplocked Index Connected
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground/60">
                          v1.2
                        </span>
                      </div>

                      {/* Glass Tiles Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        {SUGGESTIONS.map((s) => {
                          const IconComponent = s.icon;
                          return (
                            <button
                              key={s.prompt}
                              type="button"
                              onClick={() => void sendMessage(s.prompt)}
                              disabled={isTyping || limitReached}
                              className="bg-neutral-50 dark:bg-neutral-900/50 hover:bg-primary/5 dark:hover:bg-primary/10 border border-neutral-200/50 dark:border-neutral-800/50 hover:border-primary/30 dark:hover:border-primary/30 p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer group flex items-start gap-4 h-24 shadow-xs"
                            >
                              <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors shadow-xs">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-[9px] font-mono font-medium uppercase tracking-wider text-muted-foreground/80">
                                  {s.category}
                                </span>
                                <h4 className="text-xs font-semibold text-foreground mt-0.5 transition-colors truncate">
                                  {s.title}
                                </h4>
                                <p className="text-[10px] text-muted-foreground line-clamp-1 italic mt-0.5">
                                  "{s.prompt}"
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Message Bubbles */}
                  {messages.map((msg, i) => (
                    <div
                      key={`${msg.role}-${i}`}
                      className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "assistant" && (
                        <div className="w-7 h-7 rounded-full bg-neutral-200/40 dark:bg-neutral-800/40 flex items-center justify-center text-neutral-500 dark:text-neutral-400 mt-0.5 shrink-0">
                          <Bot className="w-4.5 h-4.5" />
                        </div>
                      )}
                      <div
                        className={`max-w-[76%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed border ${
                          msg.role === "user"
                            ? "bg-primary text-white rounded-tr-sm shadow-md shadow-primary/10 border-primary/20 font-medium"
                            : "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-tl-sm shadow-xs border-neutral-200/60 dark:border-neutral-800/60"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-neutral-200/40 dark:bg-neutral-800/40 flex items-center justify-center text-neutral-500 dark:text-neutral-400 mt-0.5 shrink-0">
                        <Bot className="w-4.5 h-4.5" />
                      </div>
                      <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 rounded-2xl rounded-tl-sm px-4 py-3 shadow-xs">
                        <div className="flex gap-1 items-center h-4">
                          {[0, 1, 2].map((dot) => (
                            <span
                              key={dot}
                              className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 motion-safe:animate-pulse"
                              style={{ animationDelay: `${dot * 150}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Minimalist Capsule Chat Input Area */}
                <div className="border-t border-neutral-200/20 dark:border-neutral-800/20 p-4 bg-neutral-500/[0.02]">
                  {!limitReached && remaining < FREE_CHAT_LIMIT && messages.length > 0 && (
                    <p className="text-xs text-muted-foreground mb-3 font-mono flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      {remaining} free message{remaining === 1 ? "" : "s"} remaining
                    </p>
                  )}
                  {limitReached && (
                    <div className="mb-3 rounded-xl border border-red-200 dark:border-red-950 bg-red-50 dark:bg-red-950/20 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                      {chatSection.limitBanner}{" "}
                      <a href="#pricing" className="underline underline-offset-2 text-primary font-medium">
                        View plans
                      </a>
                    </div>
                  )}
                  <form onSubmit={(e) => { e.preventDefault(); void sendMessage(input); }} className="relative flex items-center bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full px-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] focus-within:bg-white dark:focus-within:bg-neutral-950 focus-within:border-primary/40 dark:focus-within:border-primary/30 transition-all duration-200">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={chatSection.inputPlaceholder}
                      disabled={isTyping || limitReached}
                      className="flex-1 bg-transparent border-0 outline-none text-sm py-1.5 pr-12 focus:ring-0 placeholder:text-muted-foreground/60 text-foreground"
                    />
                    <div className="absolute right-1.5 top-1.5">
                      <button
                        type="submit"
                        disabled={!input.trim() || isTyping || limitReached}
                        className={`h-8 w-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 shadow-xs ${
                          input.trim() 
                            ? "bg-primary text-white hover:scale-105" 
                            : "bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-400 dark:text-neutral-500 opacity-50 cursor-not-allowed"
                        }`}
                      >
                        <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                        <span className="sr-only">Send</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>

        <p className="mt-6 text-center text-xs text-muted-foreground">{chatSection.disclaimer}</p>
        <p className="mt-2 text-center">
          <a href="#pricing" className="text-sm text-primary hover:underline font-mono">
            {chatSection.signInLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
