import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode | string;
  secondary?: boolean;
  fullwidth?: boolean;
  large?: boolean;
  desabled?: boolean;
  outline?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  label,
  secondary,
  fullwidth,
  large,
  desabled,
  outline,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      disabled={desabled}
      onClick={onClick}
      type={type}
      className={cn(
        "rounded-full font-semibold border transition hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed",
        fullwidth ? "w-full" : "w-fit",
        secondary ? "bg-white text-black" : "bg-sky-500 text-white",
        large ? "text-xl py-3 px-5" : "text-md px-4 py-3",
        outline
          ? "bg-transparent border-slate-600 text-sky-500 hover:bg-slate-800/40"
          : ""
      )}
    >
      {label}
    </button>
  );
}
