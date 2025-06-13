import React from 'react'

const Curbside = () => {
  return (
   <section className='container mx-auto relative'>

    <img src="/hero/Rectangle.png" alt="" />
    <div className="flex gap-5 items-center absolute top-[100px] left-[240px] ">
        <p className='text-white'>We are now serving authenitic indo-chines food</p>
        <button className='bg-white px-4 py-2 '>curbside pickup</button>
    </div>

   </section>
  )
}

export default Curbside
