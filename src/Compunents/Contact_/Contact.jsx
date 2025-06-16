import React from 'react'

const Contact = () => {
    return (
        <section className='container mx-auto relative pb-10 bg-black'>
            <img src="/contact/contact.png" alt="" />
            <div className="text-center flex justify-center  ">
                <h2 className='absolute top-[200px] font-bold text-4xl text-white' >CONTACT US</h2>

            </div>

            <div className="py-10 bg-black text-white ">
                <p className='text-center '>Please contact the team with the enquiries you may have</p>


                    {/* main contact .................... */}

                <div className="flex mt-10 px-5 ">
                    <div className="w-[40%]  ">
                        <p>Mailing Address</p>
                        <p>2215 US Highway 1 South North Brunswick, NJ 08902</p><br />

                        <p>Phone</p>
                        <p>P : 732.398.9022</p>
                        <p>M: 917.518.4331</p>
                        <p>M: 347.784.9269</p><br />

                        <p>Fax</p>
                        <p>732.658 3700</p><br />

                        <p>Enquiries</p>
                        <p>gurupalace@hotmail.com</p><br />

                        <p> For Banquet / Catering Contact:</p>
                        <p>Mr. Singh</p>
                        <p>917.518.4331</p>
                        <p>347.784.9269</p>    


                    </div>

                    <div className="w-[60%]  ">
                        <input className='border-2 text-white w-full outline-none py-4 px-3 font-bold  ' type="text" name='name' placeholder='NAME* ' />
                        <input className='border-2 text-white w-full outline-none py-4 px-3 font-bold   mt-8  ' type="text" name='email' placeholder='E-MAIL* ' />
                        <input className='border-2 text-white w-full outline-none py-4 px-3 font-bold   mt-8  ' type="text" name='name' placeholder='SUBJECT* ' />
                        <textarea className='border-2 text-white w-full outline-none py-2 px-3 font-bold   mt-8 h-[150px] ' name="sms" id="message" placeholder='MESSAGE'></textarea>
                        <button className='border py-5 px-16 font-bold text-black mt-4 bg-[#D9D9D9] '>SUBMIT</button>


                    </div>
                </div>
            </div>

            <img src="/contact/contact_location.png" alt="" />
        </section>
    )
}

export default Contact
 