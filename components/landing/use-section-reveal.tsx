"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type UseSectionRevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

const RevealHeaderContext = createContext<boolean | undefined>(undefined);

function useRevealOnScroll<T extends Element>(
  options: { threshold?: number; rootMargin?: string } = {}
) {
  const { threshold = 0.14, rootMargin = "0px 0px -4% 0px" } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

export function useSectionReveal(options: UseSectionRevealOptions = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -8% 0px" } = options;
  return useRevealOnScroll<HTMLElement>({ threshold, rootMargin });
}

type RevealGroupProps = {
  isVisible?: boolean;
  className?: string;
  children: ReactNode;
};

export function RevealGroup({ isVisible, className, children }: RevealGroupProps) {
  return (
    <div
      className={cn(
        "reveal-group",
        isVisible && "reveal-group-visible",
        className
      )}
    >
      {children}
    </div>
  );
}

type RevealItemProps = {
  className?: string;
  delay?: number;
  staggerIndex?: number;
  children: ReactNode;
};

export function RevealItem({
  className,
  delay,
  staggerIndex,
  children,
}: RevealItemProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  const transitionDelay =
    delay ?? (staggerIndex !== undefined ? staggerIndex * 75 : undefined);

  return (
    <div
      ref={ref}
      className={cn("reveal-item", isVisible && "reveal-item-visible", className)}
      style={
        transitionDelay !== undefined
          ? { transitionDelay: `${transitionDelay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}

type RevealHeaderProps = {
  isVisible?: boolean;
  className?: string;
  children: ReactNode;
};

export function RevealHeader({ isVisible, className, children }: RevealHeaderProps) {
  const { ref, isVisible: scrolledIntoView } = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.18,
    rootMargin: "0px 0px -5% 0px",
  });
  const visible = isVisible ?? scrolledIntoView;

  return (
    <RevealHeaderContext.Provider value={visible}>
      <div ref={ref} className={cn("reveal-header", className)}>
        {children}
      </div>
    </RevealHeaderContext.Provider>
  );
}

type RevealTextLineProps = {
  as?: ElementType;
  className?: string;
  delay?: number;
  staggerIndex?: number;
  immediate?: boolean;
  inline?: boolean;
  children: ReactNode;
};

export function RevealTextLine({
  as: Component = "span",
  className,
  delay,
  staggerIndex = 0,
  immediate = false,
  inline = false,
  children,
}: RevealTextLineProps) {
  const headerVisible = useContext(RevealHeaderContext);
  const inHeader = headerVisible !== undefined;
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [selfVisible, setSelfVisible] = useState(false);

  useEffect(() => {
    if (!immediate) return;
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, [immediate]);

  useEffect(() => {
    if (inHeader || immediate) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSelfVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -3% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inHeader, immediate]);

  const visible = immediate ? mounted : inHeader ? headerVisible : selfVisible;
  const transitionDelay = delay ?? staggerIndex * 90;

  return (
    <Component
      ref={ref}
      className={cn(
        "reveal-text-line",
        inline && "reveal-text-line-inline",
        visible && "reveal-text-line-visible",
        className
      )}
      style={{ transitionDelay: `${transitionDelay}ms` }}
    >
      {children}
    </Component>
  );
}
