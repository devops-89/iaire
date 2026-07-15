"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

/* ---------- TYPES ---------- */

type AnimationProps = {
opacity?: number;
y?: number;
x?: number;
scale?: number;
};

interface SplitTextProps {
text: string;
className?: string;
delay?: number;
duration?: number;
ease?: string;
splitType?: "chars" | "words" | "lines";
from?: AnimationProps;
to?: AnimationProps;
threshold?: number;
rootMargin?: string;
textAlign?: "left" | "center" | "right";
tag?: React.ElementType;
onComplete?: () => void;
}

/* ---------- COMPONENT ---------- */

const SplitText: React.FC<SplitTextProps> = ({
text,
className = "",
delay = 50,
duration = 1,
ease = "power3.out",
splitType = "words",
from = { opacity: 0, y: 40 },
to = { opacity: 1, y: 0 },
threshold = 0.1,
rootMargin = "-100px",
textAlign = "center",
tag = "p",
onComplete,
}) => {
const ref = useRef<HTMLElement | null>(null);
const [ready, setReady] = useState(false);

/* ---------- WAIT FOR FONTS ---------- */
useEffect(() => {
if ((document as any).fonts?.ready) {
(document as any).fonts.ready.then(() => setReady(true));
} else {
setReady(true);
}
}, []);

/* ---------- GSAP ---------- */
useGSAP(
() => {
if (!ref.current || !ready) return;

  const el = ref.current as any;

  // Clean previous split
  if (el._splitInstance) {
    el._splitInstance.revert();
  }

  const split = new GSAPSplitText(el, {
    type: splitType,
    linesClass: "split-line",
    wordsClass: "split-word",
    charsClass: "split-char",
  });

  const targets =
    splitType === "chars"
      ? split.chars
      : splitType === "words"
      ? split.words
      : split.lines;

  gsap.fromTo(
    targets,
    { ...from },
    {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      scrollTrigger: {
                      trigger: el,
                      start: "top 85%",
                      end: "bottom 15%",
                      toggleActions: "play reverse play reverse",
                      },
      onComplete,
    }
  );

  el._splitInstance = split;

  return () => {
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === el) st.kill();
    });
    split.revert();
  };
},
{ dependencies: [text, ready], scope: ref }

);

/* ---------- RENDER ---------- */
const Tag = (tag || "p") as any;

return (
<Tag
ref={ref as any}
className={className}
style={{
textAlign,
display: "block",
whiteSpace: "normal",
overflow: "hidden",
}}
>
{text} </Tag>
);
};

export default SplitText;
