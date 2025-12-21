"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedWordsProps {
  text: string;
  className?: string;
}

export function AnimatedWords({ text, className }: AnimatedWordsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const letters = text.split("");

  return (
    <div ref={ref} className={cn("inline-block", className)} aria-label={text}>
      {letters.map((letter, index) => {
        let y;
        let opacity;

        if (index < 4) {
          // Fade-in for "Post"
          opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
          y = 0; // No vertical movement
        } else if (index < 6) { // 'P' and 'i'
          const start = 0.1 + (index - 4) * 0.1;
          const end = 0.5 + (index - 4) * 0.1;
          y = useTransform(scrollYProgress, [start, end], [70, -20]);
          opacity = useTransform(scrollYProgress, [start, end], [0.9, 1]);
        } else { // 'p' and 'e' have separate motion
          const start = 0.2 + (index - 6) * 0.15; // Slightly more delay
          const end = 0.6 + (index - 6) * 0.15;
          y = useTransform(scrollYProgress, [start, end], [90, -35]); // Different start/end positions
          opacity = useTransform(scrollYProgress, [start, end], [0.9, 1]);
        }
        
        return (
          <motion.span
            key={index}
            className="inline-block"
            style={{ y, opacity }}
          >
            {letter}
          </motion.span>
        );
      })}
    </div>
  );
}
