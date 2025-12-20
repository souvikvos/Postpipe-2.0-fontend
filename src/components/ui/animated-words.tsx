"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedWordsProps {
  text: string;
  className?: string;
  stagger?: number;
}

export function AnimatedWords({ text, className, stagger = 0.05 }: AnimatedWordsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  const letters = text.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const pVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9], // A nice ease-out-back like curve
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label={text}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={letter === 'P' ? pVariants : letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
