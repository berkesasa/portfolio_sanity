"use client"
import { motion } from "framer-motion";

const Transition = ({ children }) => (
  <motion.div
    initial={{ translateY: -100, opacity: 0 }}
    animate={{ translateY: 0, opacity: 1 }}
    exit={{ translateY: 100, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default Transition;