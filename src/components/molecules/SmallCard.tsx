import React from "react";
import { delay, motion } from "framer-motion";

interface smallCradInterface {
  icons: any
  title: string
  description: string
}

const mobileLinkVars = {
  initial: {
    y: "40vh",
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

export const SmallCard = ({ description, icons, title }: smallCradInterface) => {
  return (
    <motion.div variants={mobileLinkVars} className='flex gap-4 items-center overflow-hidden'>
      <div className='bg-[#88888830] rounded-xl text-custom-secondary w-fit p-2 text-xl sm:text-2xl' >
        {icons}
      </div>
      <div>
        <p className='text-custom-tertiary text-xs font-medium uppercase sm:text-sm'>{title}</p>
        <p className='text-white text-xs sm:text-sm'>{description}</p>
      </div>
    </motion.div >
  )
}