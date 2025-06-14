import React from 'react'

const Footer = () => {
  return (
    <section className=' bg-[#FFEDED] pt-10'>
      {/* top div ****************************** */}
      <div className="flex container mx-auto py-5 pb-10  justify-between">

        {/* first div........... */}
        <div className=" w-[25%]  ">
          <h4 className='font-bold text-xl'>have a message?</h4>
          <input className='border mt-4 py-2 rounded-md w-full bg-white text-[12px] px-2 ' type="text" placeholder='NAME*' />
          <input className='border mt-2 py-2 rounded-md w-full bg-white text-[12px] px-2 ' type="text" placeholder='EMAIL*' />
          <input className='border mt-2 py-2 rounded-md w-full bg-white text-[12px] px-2 ' type="text" placeholder='NUMBER*' />
          <textarea className='border mt-2 py-2 rounded-md w-full bg-white text-[12px] px-2 ' name="message" id="sms" placeholder='YOUR MESSAGE*' >

          </textarea>
          <button className='font-bold text-[12px] mt-2 border py-2 px-4 bg-[#433E3E] text-white  '>SEND INQUIRES</button>

        </div>

        {/* two .............*/}
        <div className=" w-[24%] ">
          <h4 className='font-bold text-xl '>contac us</h4>
          <p className='mt-4 '>2215 US Highway 1 South, North Brunswick, NJ 08902</p>
          <p className='mt-2 '>Call Us At</p>
          <p className='mt-2 '>P : 732.398.9022</p>
          <p className='mt-2 '>M: 917.518.4331</p>
          <p className='mt-2 '>M: 347.784.9269</p>
          <p className='mt-2 '>Fax: 732.658 3700</p>
          <p className='mt-2 '>Email: gurupalace@hotmail.com</p>

        </div>

        {/* three ...............*/}
        <div className=" w-[20%] ">
          <h4 className='font-bold text-xl'>Qucik lines</h4>
          <p className='mt-4'>Home</p>
          <p className='mt-2'>Menu </p>
          <p className='mt-2'>Banquet Facility</p>
          <p className='mt-2'>Gallery</p>
          <p className='mt-2'>Catering</p>
          <p className='mt-2'>Evenls</p>
          <p className='mt-2'>Contact Us</p>

        </div>

        {/*  four................*/}
        <div className=" w-[24%] ">
          <h4 className='font-bold text-xl'>Hours of opration</h4>
          <p className='mt-4 '>6 DAYS OPEN</p>
          <p className='mt-2 '>Monday, Wednesday-Friday : 11AM To 3PM</p>
          <p className='mt-2 '>Monday, Wednesday-Friday : 5PM To 9:30PM</p>
          <p className='mt-2 '>Saturday-Sunday : 10AM To 9:30PM</p>
          <p className='mt-2 '>Tuesday: Closed</p>

        </div>

      </div>

      {/* bottom div ******************** */}
      <div className="h-[250px] text-white bg-black items-center flex justify-center border relative">
        <img className='w-[250px] absolute -top-10 ' src="/Group2.png" alt="resturent-icon" />

      </div>
    </section>
  )
}

export default Footer
