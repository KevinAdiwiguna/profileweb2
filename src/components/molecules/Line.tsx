import { motion } from "framer-motion"
export const Line = () => {
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

  return <motion.div variants={mobileLinkVars} className='border-t border-[#77777745] my-6 mx-4 overflow-hidden'></motion.div>
}