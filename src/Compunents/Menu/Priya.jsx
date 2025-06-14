"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Priya = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className='container mx-auto  relative  '>
             <Slider {...settings}>
        <div>
          <img className='' src="/menu/priya.png" alt="" />
            <div className="text-center mt-5 absolute top-2  ">
                <p className=''>We held our daughter's first birthday at the Guru Palace banquet hall. We were more than happy with this experience. The staff were friendly, <br /> helpful, and efficient. The owner came to check on us several times during the party to ensure all our needs were met. All the guests lovthe <br /> food. We would highly recommend this restaurant for your future events.</p>

                <h2 className='font-bold text-4xl mt-5 text-center '>Priya (1) </h2>
            </div>
        </div>
        <div>
          <img className='' src="/menu/priya.png" alt="" />
            <div className="text-center mt-5 absolute top-2  ">
                <p className=''>We held our daughter's first birthday at the Guru Palace banquet hall. We were more than happy with this experience. The staff were friendly, <br /> helpful, and efficient. The owner came to check on us several times during the party to ensure all our needs were met. All the guests lovthe <br /> food. We would highly recommend this restaurant for your future events.</p>

                <h2 className='font-bold text-4xl mt-5 text-center '>Priya (2) </h2>
            </div>
        </div>
       
       
        
      </Slider>
            
        </section>
    )
}

export default Priya
