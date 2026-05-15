"use client";

import { aloeveraDisplay_medium } from "@/utils/fonts";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

/* ---------- TYPES ---------- */

type AnimationState = Record<string, number | string>;

interface BlurTextProps {
  text: string;
  delay?: number; // ms between items
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number; // IntersectionObserver threshold
  rootMargin?: string; // IntersectionObserver rootMargin
  animationFrom?: AnimationState; // optional override
  animationTo?: AnimationState[]; // optional override (keyframes)
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number; // seconds per step
}

/* ---------- HELPERS ---------- */

const buildKeyframes = (
  from: AnimationState,
  steps: AnimationState[],
): Record<string, (string | number)[]> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, (string | number)[]> = {};

  keys.forEach((k) => {
    keyframes[k] = [from[k] ?? 0, ...steps.map((s) => s[k] ?? from[k] ?? 0)];
  });

  return keyframes;
};

/* ---------- COMPONENT ---------- */

const TextBlur: React.FC<BlurTextProps> = ({
  text,
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const elements = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [text, animateBy],
  );

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // 🔥 toggle true/false
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo<AnimationState>(() => {
    return direction === "top"
      ? { filter: "blur(10px)", opacity: 0, y: -50 }
      : { filter: "blur(10px)", opacity: 0, y: 50 };
  }, [direction]);

  const defaultTo = useMemo<AnimationState[]>(() => {
    return [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ];
  }, [direction]);

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);

  const times = useMemo(
    () =>
      Array.from({ length: stepCount }, (_, i) =>
        stepCount === 1 ? 0 : i / (stepCount - 1),
      ),
    [stepCount],
  );

  // build once (not inside map)
  const animateKeyframes = useMemo(
    () => buildKeyframes(fromSnapshot, toSnapshots),
    [fromSnapshot, toSnapshots],
  );

  return (
    <p
      ref={ref}
      className={className}
      style={{
        textAlign: "center",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: aloeveraDisplay_medium.style.fontFamily,
      }}
    >
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          className="inline will-change-[transform,filter,opacity]"
          initial={fromSnapshot}
          animate={inView ? animateKeyframes : fromSnapshot}
          transition={{
            duration: totalDuration,
            times,
            delay: (index * delay) / 1000,
            ease: easing,
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
        >
          {segment}
          {animateBy === "words" ? " " : ""}
        </motion.span>
      ))}
    </p>
  );
};

export default TextBlur;
