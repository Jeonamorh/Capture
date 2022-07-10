export const PageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 0.75,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75 } },
};

export const PhotoAnim = {
  hidden: { opacity: 0, scale: 1.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 0.75 } },
};

export const frameAnim = {
  hidden: { x: `-130%`, skew: `55deg` },
  show: {
    x: `100%`,
    skew: `0deg`,
    transition: { duration: 0.75, ease: `easeOut` },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, ease: "easeOut" } },
};
