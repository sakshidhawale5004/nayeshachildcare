import { Link, type LinkProps } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Props = LinkProps & {
  children: ReactNode;
  tone?: "primary" | "light" | "outline";
};

export function NayeshaButton({ children, tone = "primary", ...props }: Props) {
  return (
    <Link
      {...props}
      className={`nayesha-button ${tone === "light" ? "nayesha-button-light" : tone === "outline" ? "nayesha-button-outline" : ""}`}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} />
    </Link>
  );
}