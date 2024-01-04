import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface iconsLink {
  url: string
  icons: any
}

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


export const IconsLink = ({ url, icons }: iconsLink) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-lg text-custom-secondary my-4 bg-[#77777745] p-2 rounded-full">
      <Link href={url} >
        {icons}
      </Link>
    </motion.div>
  )
}