import { cn } from "@/lib/utils";
import type { PopAccent } from "@/lib/landing-accents";
import type { LucideIcon } from "lucide-react";

const variantStyles = {
  default: "border-border bg-accent text-primary",
  highlight: "border-primary/25 bg-primary/10 text-primary",
  hero: "border-white/20 bg-white/10 text-white backdrop-blur-sm",
  muted: "border-border bg-muted text-muted-foreground",
  success: "border-primary/20 bg-primary/10 text-primary",
};

const toneStyles: Record<PopAccent, string> = {
  blue: "icon-tone-blue",
  violet: "icon-tone-violet",
  coral: "icon-tone-coral",
  cyan: "icon-tone-cyan",
};

const toneHeroStyles: Record<PopAccent, string> = {
  blue: "icon-tone-hero-blue",
  violet: "icon-tone-hero-violet",
  coral: "icon-tone-hero-coral",
  cyan: "icon-tone-hero-cyan",
};

const sizeStyles = {
  sm: "h-8 w-8 rounded-lg [&_svg]:size-3.5",
  md: "h-10 w-10 rounded-xl [&_svg]:size-4",
  lg: "h-12 w-12 rounded-xl [&_svg]:size-5",
};

type IconBadgeProps = {
  icon: LucideIcon;
  variant?: keyof typeof variantStyles;
  tone?: PopAccent;
  size?: keyof typeof sizeStyles;
  className?: string;
};

export function IconBadge({
  icon: Icon,
  variant = "default",
  tone,
  size = "md",
  className,
}: IconBadgeProps) {
  const toneClass = tone
    ? variant === "hero"
      ? toneHeroStyles[tone]
      : toneStyles[tone]
    : null;

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center border",
        toneClass ?? variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <Icon strokeWidth={1.75} aria-hidden />
    </div>
  );
}
