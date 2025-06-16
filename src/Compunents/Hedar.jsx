import Link from 'next/link'
import React from 'react'



const Hedar = () => {
  return (
    <section className='container mx-auto bg-[#0b0532] text-white py-5 md:px-0 px-2 '>

      <div className="container mx-auto md:flex items-center gap-5">
        <img className='w-[200px] ' src="/Group.png" alt="" />

        <ul className='md:flex md:flex-row flex flex-col gap-8 md:mt-0 mt-4 md:gap-5 font-bold text-[14px] md:ml-[96px] '>
          <Link href={'/'} >
            <li>HOME</li>
          </Link>

          <Link href={'menu'} >
            <li>MENU</li>
          </Link>

          <Link href={'banq'} >
            <li>BANQUET FACELITY</li>
          </Link>

          <Link href={'gallery'} >
            <li>GALLERY</li>
          </Link>
          <Link href={"catering_page"} >
            <li>CATERING</li>
          </Link>
          <Link href={'contact-page'} >
            <li>CONTACT US</li>
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
