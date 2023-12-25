import type { HTMLAttributes } from "react";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
}


type SpanProps = HTMLAttributes<HTMLSpanElement>;

export function Span({ className, children, ...props }: SpanProps) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}