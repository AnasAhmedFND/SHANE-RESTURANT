import Link from 'next/link'
import React from 'react'



const Hedar = () => {
  return (
    <section className='bg-[#0b0532] text-white py-5'>
        <div className="container mx-auto flex items-center gap-5">
          <img className='w-[200px] ' src="/Group.png" alt="" />

          <ul className='flex gap-5 font-bold text-[14px] md:ml-[96px] '>
            <Link href={'/'} >
            <li>HOME</li>
            </Link>
            <Link href={'menu'} >
            <li>MENU</li>
            </Link>
            <li>BANQUET FACELITY</li>
            <li>GALLERY</li>
            <li>CATERING</li>
            <li>CONTACT US</li>

          </ul>
            <Link href={'Book'}>
          <button className='bg-red-500 font-bold px-4 py-2 text-[14px] cursor-pointer '>BOOK A BANQUET</button>
            </Link>
        </div>

    </section>
  )
}

export default Hedar
