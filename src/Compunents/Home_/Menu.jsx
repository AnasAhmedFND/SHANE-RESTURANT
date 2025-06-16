import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({
    subsets:["latin"],
    variable:"--font-inter"
})

const Menu = () => {
  return (
    <section className='container mx-auto md:px-0 px-2 '>
        {/* first menu ...........*/}
        <div className="py-5 text-center tracking-widest " 
        style={{ backgroundImage: "url('/hero/menu-bg1.png') " }} >

            <h2 className={`${inter.className} text-white mt-20 md:text-[16px] text-[14px] `} >CATTERING FOR ALL OCCASSION -GURU CATERS</h2>

            <div className="flex justify-around mt-10 py-10">
                <img className='w-[30%] ' src="/hero/menu1-1.png" alt="menu" />
                <img className='w-[30%] ' src="/hero/menu1-2.png" alt="menu" />
                <img className='w-[30%] ' src="/hero/menu1-3.png" alt="menu" />

            </div>

            <button className='font-bold text-[14px] py-2 px-5  bg-[#EAD7D7] '>click here for packages</button>


        </div>

        {/*  second  menu......... */}
        <div className="py-5 text-center bg-black"
        style={{backgroundImage: "url('/hero/manu2-bg.png') "  }}
        >

            <h3 className='mt-[80px] text-red-500 font-bold text-3xl tracking-widest '>our menu</h3>
            <p className={`${inter.className} text-white mt-10 tracking-widest `}>Guru Palace is the ideal location for whatever the occasion; a casual get together, a <br /> special occasion or group dining. We are equipped with the very best equipments for <br /> outdoors and our massive production line enables us to produce food for up to <br /> 2000 people.</p>

            <button className='mx-auto mt-10 py-2 px-5 bg-black text-white font-bold border '>check our full menu</button>

        </div>

        {/* third menu.............. */}
        <div className="">
            <img src="/hero/menu3-bg.png" alt="menu" />
        </div>

        
        {/* four menu    ........... */}
        <div className="flex">
        <img className='w-[20%] h-[350px] ' src="/hero/Rectangle 28.png" alt="menu" />
        <img className='w-[20%] h-[350px] ' src="/hero/Rectangle 29.png" alt="menu" />
        <img className='w-[20%] h-[350px] ' src="/hero/Rectangle 30.png" alt="menu" />
        <img className='w-[20%] h-[350px] ' src="/hero/Rectangle30.png" alt="menu" />
        <img className='w-[20%] h-[350px] ' src="/hero/Rectangle 31.png" alt="menu" />

        </div>


    </section>
  )
}

export default Menu
