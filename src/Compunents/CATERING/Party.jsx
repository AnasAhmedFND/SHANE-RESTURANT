import React from 'react'

const Party = () => {
    return (
        <section className='container mx-auto py-8 ' style={{ backgroundImage: "url('/Catering/package.png') " }} >
            <h2 className='text-center md:text-4xl text-2xl tracking-widest text-red-500 py-2 '>PART<span className='border-b-2 pb-2'>Y TRAYS</span>TO GO</h2>

            <div className="border text-white bg-black md:w-[60%] md:ml-[20%] mt-5 ">

                {/* top /..............*/}
                <div className="border-b-2 flex pb-5 pt-2 px-2 items-center  ">
                    <h6 className='md:w-[40%] w-[30%] '>Tray</h6>
                    <ul className='flex justify-between md:w-[60%] w-[70%] py-5   '>
                        <li>Veg</li>
                        <li>Non-Veg</li>
                        <li>Seafood</li>
                        <li>Bread</li>
                        <li>Rice</li>
                    </ul>

                </div>

                <div className="p-2 mt-8 ">
                    
                    {/* one */}
                        <div className="flex ">
                            <p className="w-[40%] ">Small Tray (10-12 people) </p>
                            <div className="flex  w-[60%] justify-between">
                                <p>$50</p>
                                <p>$60</p>
                                <p>$70</p>
                                <p>$30</p>
                                <p>$30</p>



                            </div>

                        </div>

                        <div className="flex mt-4 ">
                            <p className="w-[40%] ">Medium Tray (20-25 people) </p>

                            <div className="flex  w-[60%]  justify-between">
                                <p>$50</p>
                                <p>$60</p>
                                <p>$70</p>
                                <p>$30</p>
                                <p>$30</p>



                            </div>

                        </div>

                        <div className="flex mt-4 ">
                            <p className="w-[40%] ">Semi Large Tray (30-35 people)</p>
                            <div className="flex  w-[60%]  justify-between">
                                <p>$150</p>
                                <p>$160</p>
                                <p>$170</p>
                                <p>$130</p>
                                <p>$130</p>

                            </div>

                        </div>

                        <div className="flex mt-4 ">
                            <p className="w-[40%] ">Large Tray (45-55 people)</p>
                            <div className="flex  w-[60%] justify-between">
                                <p>$150</p>
                                <p>$160</p>
                                <p>$170</p>
                                <p>$130</p>
                                <p>$130</p>

                            </div>

                        </div>

                        <div className="flex mt-4 ">
                            <p className="w-[40%] ">Extra Large Tray (65-75 people)</p>
                            <div className="flex  w-[60%] justify-between">
                                <p>$150</p>
                                <p>$160</p>
                                <p>$170</p>
                                <p>$130</p>
                                <p>$130</p>

                            </div>

                        </div>


                    </div>




             

            </div>
        </section>
    )
}

export default Party
