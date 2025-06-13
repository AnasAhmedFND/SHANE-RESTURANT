"use client"
import { Inter } from 'next/font/google'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/Styles/hero_slick.css";



const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})
const Hero = () => {
    var settings = {
        dots: true,       
        infinite: true,        
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    <style>

    </style>

    return (
        <section className='border container mx-auto  '>
           
            <Slider {...settings}>
                <div>
                    <div className="relative">

                <img className='h-[450px] w-full ' src="/hero/hero.png" alt="Hero Img" />
                <h1 className={`${inter.className} absolute top-52 left-52 italic text-4xl text-white`}>SERVING BEST RESTURENT CATRING & <br />BONQUET SERVICES IN NEW JERCY (1) </h1>
            </div>
                </div>
                <div>
                    <div className="relative">

                <img className='h-[450px] w-full ' src="/hero/hero3.jpg" alt="Hero Img2" />
                <h1 className={`${inter.className} absolute top-52 left-52 italic text-4xl text-white`}>SERVING BEST RESTURENT CATRING & <br />BONQUET SERVICES IN NEW JERCY (2) </h1>
            </div>
                </div>
                <div>
                    <div className="relative">

                <img className='h-[450px] w-full ' src="/hero/hero2.jpg" alt="Hero Img3" />
                <h1 className={`${inter.className} absolute top-52 left-52 italic text-4xl text-white`}>SERVING BEST RESTURENT CATRING & <br />BONQUET SERVICES IN NEW JERCY (3) </h1>
            </div>
                </div>
             
            </Slider>

        </section>
    )
}

export default Hero
