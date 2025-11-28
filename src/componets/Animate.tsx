import { motion, useInView } from "framer-motion";
import { useRef } from "react";
type FadeInSectionProps = {
  children: React.ReactNode;
};

export const FadeInSection = ({ children }: FadeInSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
