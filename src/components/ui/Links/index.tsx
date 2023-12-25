import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";

export type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function NavLink({ className, children, ...props }: NavLinkProps) {
  return (
    <a
      className={clsx(
        "text-base text-gray-200 font-jakarta font-normal",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
