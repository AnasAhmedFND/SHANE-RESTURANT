import React from 'react'

const Wedding_pkg = () => {
    return (
        <section className='container mx-auto  py-5 md:px-0 px-2 '>
          
            <h2 className='font-bold text-2xl text-center '>WEDDI<span className='border-b-4 border-red-500 pb-2' >NG PAC</span>KAGES</h2>
            <p className='mt-4 text-center'>All items to be selected from our Banquet Menu</p>

            <div className="py-5 md:flex border justify-center  bg-linear-60/longer from-red-400 to-blue-400">

                {/* left ,,,,,, */}
                <div className="md:w-[20%] px-2 bg-white/50 h-[200px] flex flex-col justify-between  ">
                    <h6 className='border-b text-red-500 '>STANDARD WEEDING</h6>

                    <p className='md:border-none border-b-2 md:pb-0 pb-2 '>DELUX WEEDING</p>
                    <p className='md:border-none border-b-2 md:pb-0 pb-2 '>GOLD PACKAGES</p>
                    <p className='md:border-none border-b-2 md:pb-4 pb-2 '>OPTIONAL ITEMS</p>

                </div>
                {/* Right ............*/}
                <div className="md:w-[70%] md:flex px-2  bg-white/50 " >
                    {/* one.................... */}
                    <div className="md:w-[25%]  ">
                        <h5 className='font-bold '>COCKTAIL HOUR</h5>

                        <div className="mt-4 text-[14px] flex flex-col gap-2 ">
                        <p>One Vegetarian Appetizer</p>
                        <p>( Butler Pass )</p>
                        <p>One Non-Veg Appetizer</p>
                        <p>( Butler Pass )</p>
                        <p>Two Vegetarian Appetizers</p>
                        <p>( Tabled )</p>
                        <p>One Non-Veg Appetizer</p>
                        <p>( Tabled )</p>

                        </div>


                    </div>

                    {/* two.............................. */}
                    <div className="md:w-[35%] pb-2  ">
                        <h5 className='font-bold'> THE WEDDING BUFFET DINNER</h5>
                        <div className="flex flex-col gap-2 text-[14px] mt-4 ">
                        <p> One Chicken Entree</p>
                        <p>One Lamb or Goat Entree</p>
                        <p>One Paneer Entree</p>
                        <p>Two Vegetable Entree</p>
                        <p> One Dal/ Lentil Entree</p>
                        <p>One Choice of Rice</p>
                        <p>Three Choices of Bread</p>
                        <p>Salad Bar</p>
                        <p>Raita</p>
                        <p>Achar</p>
                        <p>Papad</p> 

                        </div>
                        
                    </div>

                    {/* three ........................*/}
                    <div className="md:w-[20%]   ">
                        <h5 className='font-bold '>DESSERTS</h5>

                        <div className="flex flex-col gap-2 text-[14px] mt-4 ">
                        <p>Choice of Two</p>
                        <p>Desserts</p>                

                        </div>


                    </div>

                    {/* four.......................... */}
                    <div className="md:w-[20%]  ">
                        <h5 className='font-bold '>EXTRAS</h5>

                        <div className="flex flex-col gap-2 mt-4 text-[14px] ">
                        <p>Sales Tax /</p>
                        <p> Catering Staff /</p>
                        <p>Food Handlers</p>

                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Wedding_pkg
