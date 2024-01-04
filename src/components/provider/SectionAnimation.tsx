'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'


interface scrollAnimation {
  children: ReactNode
  className?: string
}

export const SectionAnimation = ({ children, className }: scrollAnimation) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: "120px" },
        animate: { opacity: 1, y: "0px" }

      }}
      initial='initial'
      animate='animate'
      transition={{
        delay: 0.3,
        duration:0.4
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}