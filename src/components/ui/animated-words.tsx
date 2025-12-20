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
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
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

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={wordVariants}
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
