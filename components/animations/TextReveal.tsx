"use client";

import React, { useEffect, useRef } from "react";

interface TextRevealProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;           // base delay in ms
  stagger?: number;         // ms between each word
  className?: string;
  style?: React.CSSProperties;
}

/**
 * TextReveal
 * Splits text into words and animates each word in with a blur + upward slide.
 * Triggered once when the element enters the viewport (IntersectionObserver).
 *
 * Usage:
 *   <TextReveal text="Our Mission Statement" tag="h2" delay={200} />
 */
const TextReveal: React.FC<TextRevealProps> = ({
  text,
  tag: Tag = "h2",
  delay = 0,
  stagger = 80,
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>(".tr-word");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            words.forEach((word, i) => {
              word.style.animationDelay = `${delay + i * stagger}ms`;
              word.classList.add("tr-word--visible");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger]);

  const words = text.split(" ");

  return (
    // @ts-ignore — Tag is constrained by type above
    <Tag
      ref={containerRef as any}
      className={className}
      style={{
        display: "inline",
        ...style,
      }}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span
            className="tr-word"
            style={{
              display: "inline-block",
              opacity: 0,
              transform: "translateY(14px)",
              filter: "blur(4px)",
              transition: "opacity 0.55s ease, transform 0.55s ease, filter 0.55s ease",
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && " "}
        </React.Fragment>
      ))}
      <style>{`
        .tr-word--visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
          filter: blur(0) !important;
        }
      `}</style>
    </Tag>
  );
};

export default TextReveal;
