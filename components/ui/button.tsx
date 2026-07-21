import * as React from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", asChild, ...props }: ButtonProps) {
  if (asChild && React.isValidElement(props.children)) {
    const child = props.children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(
        "inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-champagne disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-champagne text-graphite hover:bg-[#d6bb81]",
        variant === "secondary" && "border border-champagne/40 bg-white/8 text-marble hover:bg-white/12",
        variant === "ghost" && "text-marble hover:bg-white/10",
        child.props.className,
        className
      )
    });
  }

  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-champagne disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-champagne text-graphite hover:bg-[#d6bb81]",
        variant === "secondary" && "border border-champagne/40 bg-white/8 text-marble hover:bg-white/12",
        variant === "ghost" && "text-marble hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
