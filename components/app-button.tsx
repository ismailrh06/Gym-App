import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  icon?: ReactNode;
};

export function AppButton({
  className,
  variant = "primary",
  icon,
  children,
  ...props
}: AppButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary"
          ? "bg-white text-black shadow-glow hover:-translate-y-0.5 hover:bg-accent hover:text-white"
          : "border border-border bg-white/5 text-white hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/10",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
