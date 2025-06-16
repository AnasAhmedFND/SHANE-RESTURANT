import React from 'react'

const Package = () => {
    return (
        <section className='container mx-auto md:px-0 px-2  py-5' style={{ backgroundImage: "url('/Catering/package.png') " }} >
            <p className='text-center mt-2 font-bold'>Note: All catering package express,silver, gold and platinum for New Year eve 2022 minimum. 50 people.</p>

            <div className="md:flex justify-around mt-16">
                <div className="md:w-[20%]   h-[350px] ">
                    <div className="bg-[#F3C2C2] py-2 text-center font-bold ">
                        <h4>Express Package</h4>

                    </div>
                    <div className="bg-[#D9D9D9] px-8 pt-6 pb-2">
                        <p className=''>2 Appetizers</p>
                        <p>1 Veg Entrée</p>
                        <p>1 Non-Veg Entrée</p>
                        <p>Rice / Naan</p>
                        <p>1 Dessert</p>
                        <p>Min.50 people</p>
                        <p>All pricing subject</p>
                        <p>To change</p>

                    </div>

                    <button className='font-bold text-white py-2 px-5 bg-red-500 mt-4 w-full '>$13 PER PERSON</button>

                </div>

                <div className="md:w-[20%]   h-[420px] ">
                    <div className="bg-[#F3C2C2] py-2 text-center font-bold">
                        <h4>Silver Package</h4>

                    </div>
                    <div className="bg-[#D9D9D9] px-8 pt-6 pb-2">
                        <p className=''>3 Appetizers</p>
                        <p>2 Vegetarian + 1 Non – Veg</p>
                        <p>2 Veg Entrée</p>
                        <p>1 Non-Veg Entrée</p>
                        <p>Rice</p>
                        <p>Naan</p>
                        <p>1 Dessert</p>
                        <p>Min.50 people</p>
                        <p>All pricing subjects</p>
                        <p>to change</p>

                    </div>

                    <button className='font-bold text-white py-2 px-5 bg-red-500 mt-4 w-full '>$20 PER PERSON</button>

                </div>

                <div className="md:w-[20%]   h-[450px] ">
                    <div className="bg-[#F3C2C2] py-2 text-center font-bold">
                        <h4>Gold Package</h4>

                    </div>
                    <div className="bg-[#D9D9D9] px-8 pt-6 pb-2 md:h-[350px] ">
                        <p className=''>4 Appetizers</p>
                        <p>2 Vegetarian + 2 Non – Veg</p>
                        <p>2 Veg Entrée</p>
                        <p>2 Non-Veg Entrée</p>
                        <p>Pulao / Biryani</p>
                        <p>Assorted Bread</p>
                        <p>1 Dessert</p>
                        <p>Min.50 people</p>
                        <p>All pricing subjects</p>
                        <p>to change</p>

                    </div>

                    <button className='font-bold text-white py-2 px-5 bg-red-500 mt-4 w-full '>$50 PER PERSON</button>


                </div>

                <div className="md:w-[20%]  h-[400px] ">
                    <div className="bg-[#F3C2C2] py-2 text-center font-bold ">
                        <h4>Platinum Packge</h4>

                    </div>
                    <div className="bg-[#D9D9D9] px-8 pt-6 pb-2 ">
                        <p className=''>5 Appetizers</p>
                        <p>3 Vegetarian + 2 Non – Veg</p>
                        <p>3 Veg Entrée</p>
                        <p>2 Non-Veg Entrée</p>
                        <p>Pulao / Biryani</p>
                        <p>Assorted Bread</p>
                        <p>2 Dessert</p>
                        <p>Min.50 people</p>
                        <p>All pricing subjects</p>
                        <p>to change</p>

                    </div>

                    <button className='font-bold text-white py-2 px-5 bg-red-500 mt-4 w-full '>$40 PER PERSON</button>


                </div>


            </div>

        </section>
    )
}

export default Package
