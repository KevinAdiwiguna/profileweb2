'use client'
import React from "react"
import { motion } from 'framer-motion'



interface NavbarDesktopProps {
  navigation: string;
  setNavigation: React.Dispatch<React.SetStateAction<string>>;
}


export const NavbarDesktop = ({ navigation, setNavigation }: NavbarDesktopProps) => {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ delay: 0.3, duration: 0.5 }}
        initial='hidden'

        animate='visible'
        className={`w-full h-fit py-4 rounded-t-3xl fixed bg-[#77777740] left-0 bottom-0 right-0 origin-bottom text-center backdrop-blur-lg lg:hidden z-[1000]`}>
        <div className="flex flex-nowrap gap-4 sm:gap-6 text-xs sm:text-sm justify-center items-center text-custom-tertiary md:text-base md:gap-8">
          <p onClick={() => setNavigation('about')} className={`${navigation === "about" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>About</p>
          <p onClick={() => setNavigation('resume')} className={`${navigation === "resume" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>Resume</p>
          {/* <p onClick={() => setNavigation('portfolio')} className={`${navigation === "portfolio" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>Portfolio</p> */}
          {/* <p onClick={() => setNavigation('blog')} className={`${navigation === "blog" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>Blog</p> */}
          {/* <p onClick={() => setNavigation('contact')} className={`${navigation === "contact" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>Contact</p> */}
        </div>
      </motion.div>


      <div className="bg-neutral-800 lg:flex w-fit text-custom-tertiary gap-6 p-4 absolute right-12 rounded-bl-3xl rounded-tr-3xl hidden z-[1000]">
        <p onClick={() => setNavigation('about')} className={`${navigation === "about" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>About</p>
        <p onClick={() => setNavigation('resume')} className={`${navigation === "resume" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>Resume</p>
        {/* <p onClick={() => setNavigation('portfolio')} className={`${navigation === "portfolio" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>Portfolio</p> */}
        {/* <p onClick={() => setNavigation('blog')} className={`${navigation === "blog" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>Blog</p> */}
        {/* <p onClick={() => setNavigation('contact')} className={`${navigation === "contact" ? "text-custom-secondary" : "text-custom-tertiary"} cursor-pointer`}>Contact</p> */}
      </div>
    </>
  )
}