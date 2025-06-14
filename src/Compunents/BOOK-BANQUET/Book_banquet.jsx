import React from 'react'

const Book_banquet = () => {
  return (
    <section className='container mx-auto  py-10 bg-black flex justify-center'>
      <div className=" w-[70%] text-[#c8dee4] ">
      <h2 className='text-2xl font-bold text-red-500 text-center'>BOOK A BANQUET</h2>
      <input className='w-full py-2 px-2 mt-8 outline-none border rounded-md  ' type="text" placeholder='GUEST*' />
      <input className='w-full py-2 px-2 mt-4 outline-none border rounded-md  ' type="text" placeholder='EMAIL*' />
      <input className='w-full py-2 px-2 mt-4 outline-none border rounded-md  ' type="text" placeholder='NUMBER*' />
      <input className='w-full py-2 px-2 mt-4 outline-none border rounded-md  ' type="text" placeholder='DD/MM/YY*' />
      <input className='w-full py-2 px-2 mt-4 outline-none border rounded-md  ' type="text" placeholder='GUESTS*' />
      
      <textarea className='w-full py-2 px-2 mt-4 outline-none border rounded-md' name="sms" id="message" placeholder='YOUR MESSAGE'></textarea>

      <button className='font-bold border py-4 px-8 mt-4 hover:bg-green-600 hover:text-white cursor-pointer '>SEND INQUIRES</button>

      </div>


    </section>
  )
}

export default Book_banquet
