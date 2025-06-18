"use client" 
import Link from 'next/link'
import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { ImCross } from "react-icons/im";


const Hedar = () => {

  const [menu, setMenu] =useState(false);

  const hendeleMenu = () => {
    if (window.innerWidth < 768) {

      setMenu(!menu)
    }
  }


  return (
    <section className='md:sticky md:top-0 md:z-20 bg-[#0b0532] text-white py-5 md:px-0 px-2 '>

      <div onClick={hendeleMenu} className="md:hidden">
        <p className='px-2 flex justify-end font-bold text-2xl' > {menu === true ? <ImCross className='cursor-pointer' /> : <LuMenu className='cursor-pointer' />   }</p>
        
      </div>

      

      <div className={`container mx-auto md:flex items-center gap-5 md:mt-0 mt-2 md:pt-0 pt-2 ${menu ? " top-[50px] left-0  bg-black/80 w-full duration-1000 ease-in-out z-40 h-screen absolute " : " absolute top-19 -left-[872px] duration-700 ease-in-out" } `}>
        <img className='w-[200px] ' src="/Group.png" alt="" />

        <ul className='md:flex md:flex-row flex flex-col gap-8 md:mt-0 mt-4 md:gap-5 font-bold text-[14px] md:ml-[96px] md:px-0 px-4 '>
          <Link href={'/'} >
            <li onClick={hendeleMenu}>HOME</li>
          </Link>

          <Link href={'menu'} >
            <li onClick={hendeleMenu}>MENU</li>
          </Link>

          <Link href={'banq'} >
            <li onClick={hendeleMenu}>BANQUET FACELITY</li>
          </Link>

          <Link href={'gallery'} >
            <li onClick={hendeleMenu}>GALLERY</li>
          </Link>
          <Link href={"catering_page"} >
            <li onClick={hendeleMenu}>CATERING</li>
          </Link>
          <Link href={'contact-page'} >
            <li onClick={hendeleMenu}>CONTACT US</li>
          </Link>

        </ul>

        <Link href={'Book'}>
          <button className='bg-red-500 font-bold px-4 py-2 text-[14px] cursor-pointer md:mt-0 mt-2 '>BOOK A BANQUET</button>
        </Link>
      </div>

    </section>
  )
}

export default Hedar
