import { Inter } from 'next/font/google'
import React from 'react'



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})


const Stories = () => {
  return (
    <section className='container mx-auto py-5 md:px-0 px-2  '
      style={{ backgroundImage: "url('/hero/stores-bg.png')" }}
    >
      <div className="md:flex justify-between  " >

        <div className="md:w-[48%] ">
          <img className='h-[380px] w-full  ' src="/hero/stories.png" alt="" />

        </div>

        <div className="md:w-[48%] ">
          <h3 className='font-bold text-2xl text-red-500 tracking-widest'><span className='underline'>OUR </span>  STORIE</h3>
          <p className={`${inter.className} mt-2 tracking-widest md:text-[16px] text-[14px] `}>At Guru Palace Indian Restaurant, we <br /> offer distinctive cuisine in an informal, <br /> friendly setting. Our restaurant enjoys a <br /> reputation for impeccable service, <br /> elegant Asian-style décor, and exquisite <br /> Indian food. Dining at our restaurant is <br /> like visiting India without leaving your <br /> hometown–an exciting blend of authentic <br /> Indian food, culture, and atmosphere <br /> awaits.</p>

          <button className='font-bold text-white py-2 px-5 mt-5 bg-[#433E3E] cursor-pointer '>KNOW ABOUT US</button>
        </div>

      </div>

      <div className="flex justify-around mt-4">
        <div className="text-center ">
          <img className='md:w-[200px] w-[100px] md:h-[200px] h-[100px]  ' src="/hero/st1.png" alt="logo" />
          <p className='tracking-widest text-green-500'> UBER <br /> EATS</p>

        </div>

        <img className='md:w-[200px] w-[100px] md:h-[200px] h-[100px]  ' src="/hero/st2.png" alt="logo" />

        <div className=' text-center text-red-500 text-xl'>
          <img className='md:w-[200px] w-[100px] md:h-[200px] h-[100px]  ' src="/hero/st3.png" alt="logo" />
          <p className='tracking-widest '>support</p>

        </div>
      </div>
    </section>
  )
}

export default Stories
