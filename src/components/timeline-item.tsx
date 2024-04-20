import { motion } from "framer-motion";
import "./our-journey.css";
import { ReactNode } from "react";

export function TimelineItem({
  containerRef,
  image,
  alignment,
  children,
}: {
  containerRef: React.MutableRefObject<null>;
  image: string;
  alignment: "left" | "right";
  children: ReactNode;
}) {
  const viewport = {
    root: containerRef,
    amount: "all" as "all" | "some",
  };
  return alignment === "left" ? (
    <div className="section-container">
      <motion.div
        className="left image-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
      >
        <img src={image} className="image" />
      </motion.div>
      <motion.div
        className="right"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
      >
        {children}
      </motion.div>
    </div>
  ) : (
    <div className="section-container">
      <motion.div
        className="left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
      >
        {children}
      </motion.div>
      <motion.div
        className="right image-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
      >
        <img src={image} className="image" />
      </motion.div>
    </div>
  );
}
