import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-lounge", className)}
      {...props}
    />
  );
}
