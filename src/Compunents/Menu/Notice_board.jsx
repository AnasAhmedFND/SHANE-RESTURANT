"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/Styles/hero_slick.css";

const Notice_board = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className='border container mx-auto  text-white md:py-10 pb-10 md:px-0 px-2 '
            style={{ backgroundImage: "url('menu/notice-bord.png') " }}
        >

            <Slider {...settings}>
                
                    <div className="text-center ">
                        <h4 className='font-bold text-2xl mt-5 '>Food allergy notice: (1) </h4>
                        <p className='md:mt-5 md:mb-0 mb-2'>Food prepared in this establishment may contain wheat,dairy, and cashew nuts. <br /> <br /> Please tell your server if you have allergy because we are not responsible for any errors and cross contamination</p>

                    </div>
                
              
                    <div className="text-center ">
                        <h4 className='font-bold text-2xl mt-5 '>Food allergy notice: (2) </h4>
                        <p className='mt-5'>Food prepared in this establishment may contain wheat,dairy, and cashew nuts. <br /> <br /> Please tell your server if you have allergy because we are not responsible for any errors and cross contamination</p>

                    </div>
                
                
                    <div className="text-center ">
                        <h4 className='font-bold text-2xl mt-5 '>Food allergy notice: (3) </h4>
                        <p className='mt-5'>Food prepared in this establishment may contain wheat,dairy, and cashew nuts. <br /> <br /> Please tell your server if you have allergy because we are not responsible for any errors and cross contamination</p>

                    </div>
               

            </Slider>

            


        </section>
    )
}

export default Notice_board
