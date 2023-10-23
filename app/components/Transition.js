"use client"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

import React from 'react'

export default function Transition({children}) {
  let pathname = usePathname();

  return (
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
  )
}
