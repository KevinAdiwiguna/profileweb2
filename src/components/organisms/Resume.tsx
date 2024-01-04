import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SectionAnimation } from "../provider/SectionAnimation";

export const Resume = () => {
  return (
    <SectionAnimation

      className="py-6 px-4 text-white -z-20">
      <h1 className="text-2xl font-semibold md:font-bold">Resume</h1>

      <div className='border-custom-secondary my-6 w-[20%] border-t-8 overflow-hidden rounded-full'></div>

      <div>
        <h1 className="mb-4 text-2xl font-semibold md:font-bold mt-12">My Education</h1>
        <div>
          <ol className="border-l ml-3 border-custom-tertiary">
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-custom-secondary"></div>
                <p className="text-sm text-custom-tertiary">
                  2021 - 2024
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">SMKN 2 Mataram</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  scelerisque diam non nisi semper, et elementum lorem ornare.
                  Maecenas placerat facilisis mollis. Duis sagittis ligula in
                  sodales vehicula.
                </p>
              </div>
            </li>


            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-custom-secondary"></div>
                <p className="text-sm text-custom-tertiary">
                  2021 - 2018
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">SMPN 7 Mataram</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  scelerisque diam non nisi semper, et elementum lorem ornare.
                  Maecenas placerat facilisis mollis. Duis sagittis ligula in
                  sodales vehicula.
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-custom-secondary"></div>
                <p className="text-sm text-custom-tertiary">
                  2018 - 2011
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">SDN 44 Mataram</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  scelerisque diam non nisi semper, et elementum lorem ornare.
                  Maecenas placerat facilisis mollis. Duis sagittis ligula in
                  sodales vehicula.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>


      <div>
        <h1 className="mb-4 text-2xl font-semibold md:font-bold mt-12">Experience</h1>
        <div>
          <ol className="border-l ml-3 border-custom-tertiary">
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-custom-secondary"></div>
                <p className="text-sm text-custom-tertiary">
                  2022
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">CloudGakkai Internship</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  scelerisque diam non nisi semper, et elementum lorem ornare.
                  Maecenas placerat facilisis mollis. Duis sagittis ligula in
                  sodales vehicula.
                </p>
              </div>
            </li>


            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-custom-secondary"></div>
                <p className="text-sm text-custom-tertiary">
                  2022
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">FullstackLombok Internship</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  scelerisque diam non nisi semper, et elementum lorem ornare.
                  Maecenas placerat facilisis mollis. Duis sagittis ligula in
                  sodales vehicula.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h1 className="mb-4 text-2xl font-semibold md:font-bold mt-12">My Skills</h1>
        <div className="flex-wrap flex gap-4 ml-2">
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <IoLogoJavascript />
          </div>
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <TbBrandTypescript />
          </div>
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <IoLogoHtml5 />
          </div>
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <FaCss3Alt />
          </div>
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <FaReact />
          </div>
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <TbBrandNextjs />
          </div>
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <SiTailwindcss />
          </div>
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <BiLogoPostgresql />
          </div>
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <SiPostman />
          </div>
          <div className="bg-slate-500 text-2xl p-4 rounded-lg">
            <SiExpress />
          </div>

        </div>
      </div>
    </SectionAnimation>
  )
}