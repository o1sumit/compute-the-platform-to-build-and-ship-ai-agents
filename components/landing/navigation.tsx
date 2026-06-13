"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/lib/peplocked-content";

type NavigationProps = {
  variant?: "landing" | "subpage";
};

export function Navigation({ variant = "landing" }: NavigationProps) {
  const isSubpage = variant === "subpage";
  const [isScrolled, setIsScrolled] = useState(isSubpage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onHero = !isScrolled && !isSubpage;

  const linkPrefix = isSubpage ? "/" : "";
  const pricingHref = `${linkPrefix}#pricing`;
  const homeHref = "/";

  useEffect(() => {
    if (isSubpage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSubpage]);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 motion-reduce:transition-none ${
        isScrolled || isSubpage ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 motion-reduce:transition-none ${
          isScrolled || isMobileMenuOpen || isSubpage
            ? "glass-nav rounded-2xl max-w-[1200px]"
            : "max-w-[1400px] bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled || isSubpage ? "h-14" : "h-20"
          }`}
        >
          <a href={homeHref} className="flex items-center gap-2">
            <span
              className={`font-display tracking-tight transition-all duration-500 ${
                onHero && !isMobileMenuOpen
                  ? "text-2xl text-foreground dark:text-white"
                  : "text-xl text-foreground"
              }`}
            >
              Peplocked
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`${linkPrefix}${link.href}`}
                className={`text-sm transition-colors duration-300 ${
                  onHero
                    ? "text-foreground/70 dark:text-white/70 hover:text-foreground dark:hover:text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle variant={onHero ? "hero" : "default"} />
            <a
              href={pricingHref}
              className={`px-3 text-sm transition-colors ${
                onHero
                  ? "text-foreground/70 dark:text-white/70 hover:text-foreground dark:hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign in
            </a>
            <Button
              size="sm"
              asChild
              className={`rounded-full transition-all duration-500 ${
                onHero
                  ? "bg-foreground text-background dark:bg-white dark:text-neutral-950 hover:bg-foreground/90 dark:hover:bg-white/90 px-6"
                  : "btn-pop px-4 h-8 text-xs"
              }`}
            >
              <a href={pricingHref}>Get Started</a>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle variant={onHero && !isMobileMenuOpen ? "hero" : "default"} />
            <button
              type="button"
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${onHero ? "text-white" : "text-foreground"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${onHero ? "text-white" : "text-foreground"}`} />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`${linkPrefix}${link.href}`}
                  className="text-lg text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a href={pricingHref} className="text-muted-foreground">
                  Sign in
                </a>
                <Button asChild className="rounded-full btn-pop">
                  <a href={pricingHref}>Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
