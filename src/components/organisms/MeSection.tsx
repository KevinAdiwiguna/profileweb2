import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { HeroContnet } from "@/components/molecules/HeroContent";
import { SmallCard } from "@/components/molecules/SmallCard";
import { IconsLink } from "@/components/molecules/IconsLink";
import { GoMail } from "react-icons/go";
import { IoPhonePortraitSharp, IoCalendarOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaChevronDown } from "react-icons/fa";
import { Line } from "@/components/molecules/Line";

export const MeSection = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleMenuHandler = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 1280) {
      setOpen(true);
    }
  }, [screenWidth]);

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className={`text-white rounded-2xl bg-custom-primary  origin-top duration-500 ${open ? "h-[510px] sm:h-[420px]" : "h-[150px] sm:h-[200px]"} md:mx-8 xl:mx-0 xl:h-fit xl:pb-4`}>
      <div className="bg-[#77777725] absolute right-4 text-center px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-lg md:right-12 xl:hidden" onClick={toggleMenuHandler}><FaChevronDown /></div>
      <HeroContnet focus='Web Developer' name='Kevin Adiwiguna' url='/images/me.png' />

      {open && (
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
        >

          <div className="overflow-hidden">
            <Line />
          </div>

          <div className='mx-4 grid gap-6 sm:grid-cols-2 overflow-hidden xl:grid-cols-1'>
            <SmallCard title='email' description='kepinkun@stmikunboxlabs.ac.id' icons={<GoMail />} />
            <SmallCard title='phone' description='+62 85253711498' icons={<IoPhonePortraitSharp />} />
            <SmallCard title='birthday' description='May 23, 2006' icons={<IoCalendarOutline />} />
            <SmallCard title='location' description='Mataram, Indonesia' icons={<IoCalendarOutline />} />
          </div>

          <div className="overflow-hidden">
            <Line />
          </div>

          <div className='w-full h-5 flex flex-nowrap justify-center items-center gap-6 overflow-hidden py-5'>
            <IconsLink icons={<BsTwitterX />} url='https://twitter.com/kepinkun112' />
            <IconsLink icons={<FaInstagram />} url='https://instagram.com/kepinkun112' />
          </div>
        </motion.div>
      )}
    </div>
  );
};
