/**
 * Card Component
 * Reusable card with 3D tilt effect and variants
 */

"use client";

import { HTMLAttributes, forwardRef } from "react";
import { HTMLMotionProps } from "framer-motion";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// interface CardProps extends HTMLAttributes<HTMLDivElement> {
//   variant?: "default" | "bordered" | "elevated" | "glass";
//   hover?: boolean;
//   tilt?: boolean;
//   clickable?: boolean;
// }

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "bordered" | "elevated" | "glass";
  hover?: boolean;
  tilt?: boolean;
  clickable?: boolean;
}


const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hover = true,
      tilt = false,
      clickable = false,
      children,
      ...props
    },
    ref
  ) => {
    // 3D tilt effect states
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!tilt) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      if (!tilt) return;
      x.set(0);
      y.set(0);
    };

    const baseStyles = "rounded-2xl overflow-hidden transition-all duration-300";

    const variants = {
      default: "bg-white dark:bg-gray-900",
      bordered: "bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800",
      elevated: "bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl dark:shadow-none",
      glass:
        "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white/20 dark:border-gray-800/20",
    };

    const hoverStyles = hover
      ? "hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 hover:-translate-y-1"
      : "";

    const clickableStyles = clickable ? "cursor-pointer" : "";

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, clickableStyles, className)}
        style={
          tilt
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
            : {}
        }
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={hover && !tilt ? { scale: 1.02 } : {}}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
