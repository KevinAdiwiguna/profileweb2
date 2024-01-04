import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoCameraReverseOutline } from "react-icons/io5";
import { SectionAnimation } from "../provider/SectionAnimation";



export const About = () => {
  return (
    <SectionAnimation className="py-6 px-4 text-white">
      <h1 className="text-2xl font-semibold md:font-bold">About Me</h1>
      <div className='border-custom-secondary my-6 w-[20%] border-t-8 overflow-hidden rounded-full'></div>
      <div className="flex flex-col gap-4 text-sm text-custom-tertiary">
        <p>I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
        <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold md:font-bold mt-12">What I&apos;m Doing</h1>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-neutral-800 p-4 rounded-xl text-center sm:text-left text-custom-tertiary text-sm sm:flex sm:flex-nowrap sm:gap-6">
            <div className="text-custom-secondary text-3xl flex justify-center items-center my-2 md:text-4xl lg:text-5xl xl:text-4xl">
              <FiFigma />
            </div>
            <div>
              <h1 className="font-semibold text-xl">Web Design</h1>
              <p>The most modern and high-quality design made at a professional level.</p>
            </div>
          </div>
          <div className="bg-neutral-800 p-4 rounded-xl text-center sm:text-left text-custom-tertiary text-sm sm:flex sm:flex-nowrap sm:gap-6">
            <div className="text-custom-secondary text-3xl flex justify-center items-center my-2 md:text-4xl lg:text-5xl xl:text-4xl">
              <CgWebsite />
            </div>
            <div>
              <h1 className="font-semibold text-xl">Web Development</h1>
              <p>High-quality development of sites at the professional level.</p>
            </div>
          </div>
          <div className="bg-neutral-800 p-4 rounded-xl text-center sm:text-left text-custom-tertiary text-sm sm:flex sm:flex-nowrap sm:gap-6">
            <div className="text-custom-secondary text-3xl flex justify-center items-center my-2 md:text-4xl lg:text-5xl xl:text-4xl">
              <IoPhonePortraitSharp />
            </div>
            <div>
              <h1 className="font-semibold text-xl">Mobile Apps</h1>
              <p>Professional development of applications for iOS and Android.</p>
            </div>
          </div>
          <div className="bg-neutral-800 p-4 rounded-xl text-center sm:text-left text-custom-tertiary text-sm sm:flex sm:flex-nowrap sm:gap-6">
            <div className="text-custom-secondary text-3xl flex justify-center items-center my-2 md:text-4xl lg:text-5xl xl:text-4xl">
              <IoCameraReverseOutline />
            </div>
            <div>
              <h1 className="font-semibold text-xl">Photography</h1>
              <p>I make high-quality photos of any category at a professional level.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionAnimation>
  )
}