/**
 * Framer Motion Animation Variants Library
 * CV Mandiri Multi Usaha
 *
 * Collection of reusable animation variants for consistent motion design
 */

import { Variants } from "framer-motion";

/**
 * Fade In Animation
 * Simple opacity fade with optional direction
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/**
 * Slide Up Animation
 * Slides element from bottom with fade
 */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Slide Down Animation
 * Slides element from top with fade
 */
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Slide Left Animation
 * Slides element from right with fade
 */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Slide Right Animation
 * Slides element from left with fade
 */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Scale In Animation
 * Scales element from small to normal with fade
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Scale Up Animation
 * Scales element from normal to large
 */
export const scaleUp: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/**
 * Stagger Container
 * Parent container for staggered children animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger Item
 * Child item for stagger animations
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Float Animation
 * Continuous floating effect
 */
export const float = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Rotate Animation
 * Continuous rotation effect
 */
export const rotate = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/**
 * Pulse Animation
 * Subtle scale pulsing effect
 */
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Glow Animation
 * Glowing effect using box shadow
 */
export const glow = {
  animate: {
    boxShadow: [
      "0 0 5px rgba(59, 130, 246, 0.5)",
      "0 0 20px rgba(59, 130, 246, 0.8)",
      "0 0 5px rgba(59, 130, 246, 0.5)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Card Tilt Animation
 * 3D tilt effect on hover
 */
export const cardTilt: Variants = {
  rest: { scale: 1, rotateX: 0, rotateY: 0 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/**
 * Flip Animation
 * 3D flip effect
 */
export const flip: Variants = {
  hidden: { rotateY: 0 },
  visible: {
    rotateY: 180,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Slide Fade Variants
 * Configurable slide with fade based on direction
 */
// export const slideFade = (
//   direction: "up" | "down" | "left" | "right",
//   distance: number = 60
// ): Variants => {
//   const axis = direction === "left" || direction === "right" ? "x" : "y";
//   const value = direction === "down" || direction === "right" ? distance : -distance;

//   return {
//     hidden: { opacity: 0, [axis]: value },
//     visible: {
//       opacity: 1,
//       [axis]: 0,
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//     },
//   };
// };

export const slideFade = (
  direction: "up" | "down" | "left" | "right",
  distance: number = 60
): Variants => {
  const isHorizontal = direction === "left" || direction === "right";
  const axis = isHorizontal ? "x" : "y";
  const value =
    direction === "down" || direction === "right"
      ? distance
      : -distance;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      [axis]: value,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  };

  return variants;
};

/**
 * Page Transition Variants
 * Smooth page transitions
 */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

/**
 * Modal Variants
 * Modal appear/disappear animations
 */
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

/**
 * Backdrop Variants
 * Modal backdrop fade
 */
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

/**
 * Draw Line Animation
 * SVG line drawing effect
 */
export const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 },
    },
  },
};

/**
 * Counter Animation
 * Number counting effect
 */
export const counterVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Reveal Animation
 * Text/content reveal from mask
 */
export const revealVariants: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Bounce In Animation
 * Bouncy entrance effect
 */
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};
