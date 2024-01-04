import React from "react"
import Image from "next/image"


interface heroContnetInterface {
  url: string,
  name: string
  focus: string
}

export const HeroContnet = ({ focus, name, url }: heroContnetInterface) => {
  return (
    <div className='flex flex-nowrap items-center gap-6 justify-left pt-12 mx-4'>
      <div className='sm:w-[120px] w-[80px] h-auto bg-slate-400 rounded-2xl'>
        <Image src={url} alt='' width={900} height={900} className='mx-auto' priority />
      </div>
      <div>
        <h1 className='mb-2 font-medium sm:text-3xl sm:font-semibold'>{name}</h1>
        <span className='text-custom-tertiary bg-[#77777745] rounded-xl p-1 text-xs'>{focus}</span>
      </div>
    </div>
  )
}