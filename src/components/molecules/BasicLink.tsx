'use client'
import Link from "next/link"
import { ReactNode } from "react"
import { motion } from 'framer-motion'


interface basicLinkInterface {
  href: string,
  children: ReactNode
}

export const BasicLink = ({ children, href }: basicLinkInterface) => {

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };



  return (
    <motion.div
      variants={mobileLinkVars}
    >
      <Link href={href}>{children}</Link>
    </motion.div>
  )
}