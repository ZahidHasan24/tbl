import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isPrimary?: boolean;
};

export function Button({
  isPrimary = true,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "text-base font-semibold px-6 rounded-xl text-white font-jakarta leading-normal tracking-wide",
        isPrimary ? "bg-primary" : "bg-secondary",
        disabled && "opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
