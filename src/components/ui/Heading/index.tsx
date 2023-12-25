import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

export function H1({ className, ...props }: HeadingProps) {
  return (
    <h1
      className={clsx(
        "text-6xl font-semibold font-clash leading-[68px] tracking-wide",
        className
      )}
      {...props}
    >
      {props.children}
    </h1>
  );
}

export function H2({ className, ...props }: HeadingProps) {
  return (
    <h2
      className={clsx(
        "text-5xl font-semibold font-clash leading-[60px] tracking-wide",
        className
      )}
      {...props}
    >
      {props.children}
    </h2>
  );
}

export function H3({ className, ...props }: HeadingProps) {
  return (
    <h3
      className={clsx("text-3xl md:text-5xl font-semibold", className)}
      {...props}
    >
      {props.children}
    </h3>
  );
}

export function H4({ className, ...props }: HeadingProps) {
  return (
    <h4
      className={clsx("text-2xl md:text-4xl font-semibold", className)}
      {...props}
    >
      {props.children}
    </h4>
  );
}

export function H5({ className, ...props }: HeadingProps) {
  return (
    <h5
      className={clsx(
        "text-xl font-semibold font-clash leading-7 tracking-wide",
        className
      )}
      {...props}
    >
      {props.children}
    </h5>
  );
}

export function H6({ className, ...props }: HeadingProps) {
    return (
      <h6
        className={clsx(
          "text-lg font-semibold font-clash leading-6 tracking-wide",
          className
        )}
        {...props}
      >
        {props.children}
      </h6>
    );
  }

