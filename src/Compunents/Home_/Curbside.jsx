import React from 'react'

const Curbside = () => {
  return (
   <section className='container mx-auto relative md:px-0 px-2 '>

    <img className='md:h-auto h-[150px] ' src="/hero/Rectangle.png" alt="" />
    <div className="md:flex gap-5 items-center absolute md:top-[100px] top-5 md:left-[240px] text-center ">
        <p className='text-white  text-center '>We are now serving authenitic indo-chines food</p>
        <button className='bg-white px-4 py-2 md:mt-0 mt-2 cursor-pointer '>curbside pickup</button>
    </div>

   </section>
  )
}

export default Curbside
