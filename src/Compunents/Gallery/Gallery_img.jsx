"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/Styles/hero_slick.css";

const Images = {
    "one": [
        "/Gallery/Rectangle 48.png",
        "/Gallery/Rectangle 49.png",
        "/Gallery/Rectangle 50.png",
        "/Gallery/Rectangle 51.png",
        "/Gallery/Rectangle 52.png",
        "/Gallery/Rectangle 53.png",
        "/Gallery/Rectangle 54.png",
        "/Gallery/Rectangle 55.png",
        "/Gallery/Rectangle 56.png",
        "/Gallery/Rectangle 57.png",
        "/Gallery/Rectangle 58.png",
        "/Gallery/Rectangle 59.png",
        "/Gallery/Rectangle 60.png",
        "/Gallery/Rectangle 61.png",
        "/Gallery/Rectangle 62.png",
        "/Gallery/Rectangle 63.png",
        "/Gallery/Rectangle51.png",
        "/Gallery/Rectangle52.png",
        "/Gallery/Rectangle53.png",
        "/Gallery/Rectangle 57.png",
    ],

    "two": [
        "/Gallery/Rectangle 54.png",
        "/Gallery/Rectangle 55.png",
        "/Gallery/Rectangle 56.png",
        "/Gallery/Rectangle 57.png",
        "/Gallery/Rectangle 58.png",
        "/Gallery/Rectangle 59.png",
        "/Gallery/Rectangle 60.png",
        "/Gallery/Rectangle 61.png",
        "/Gallery/Rectangle 62.png",
        "/Gallery/Rectangle 63.png",
        "/Gallery/Rectangle 48.png",
        "/Gallery/Rectangle 49.png",
        "/Gallery/Rectangle 50.png",
        "/Gallery/Rectangle 51.png",
        "/Gallery/Rectangle 52.png",
        "/Gallery/Rectangle 53.png",
        "/Gallery/Rectangle51.png",
        "/Gallery/Rectangle52.png",
        "/Gallery/Rectangle53.png",

    ],

    "three": [

        "/Gallery/Rectangle 48.png",
        "/Gallery/Rectangle 49.png",
        "/Gallery/Rectangle 50.png",
        "/Gallery/Rectangle50.png",
        "/Gallery/Rectangle 51.png",
        "/Gallery/Rectangle51.png",
        "/Gallery/Rectangle 52.png",
        "/Gallery/Rectangle52.png",
        "/Gallery/Rectangle 53.png",
        "/Gallery/Rectangle 54.png",
        "/Gallery/Rectangle 55.png",
         "/Gallery/Rectangle 56.png",
        "/Gallery/Rectangle 57.png",
        "/Gallery/Rectangle 58.png",
        "/Gallery/Rectangle 59.png",
        "/Gallery/Rectangle 60.png",
        "/Gallery/Rectangle 61.png",
        "/Gallery/Rectangle 62.png",
        "/Gallery/Rectangle 63.png",

    ],

    "four": [
        "/Gallery/Rectangle 56.png",
        "/Gallery/Rectangle 57.png",
        "/Gallery/Rectangle 58.png",
        "/Gallery/Rectangle 59.png",
        "/Gallery/Rectangle 60.png",
        "/Gallery/Rectangle 61.png",
        "/Gallery/Rectangle 50.png",
        "/Gallery/Rectangle50.png",
        "/Gallery/Rectangle 51.png",
        "/Gallery/Rectangle51.png",
        "/Gallery/Rectangle 52.png",
        "/Gallery/Rectangle52.png",
         "/Gallery/Rectangle 56.png",
        "/Gallery/Rectangle 57.png",
        "/Gallery/Rectangle 58.png",
        "/Gallery/Rectangle 59.png",
        "/Gallery/Rectangle 60.png",
        "/Gallery/Rectangle 61.png",
        "/Gallery/Rectangle 62.png",
        "/Gallery/Rectangle 63.png",

    ]
}

const Gallery_img = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className='container mx-auto   bg-black p-5 pt-10 md:px-0 px-2'>



            <Slider  {...settings}>
                {/* slick 1 */}
                <div className="pb-10  ">
                    <h2 className="text-white font-bold text-2xl">Portfolio (1) </h2>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {Images.one.map((imgSrc, index) => (
                            <img className='md:w-[19%] w-[20%]  border-2 border-white ' key={index} src={imgSrc} alt={`imges ${index + 1}`} />
                        ))}

                    </div>

                </div>

                {/* slick 2 */}

                <div className="border flex flex-wrap gap-3 justify-between pb-10">
                    <h2 className="text-white font-bold text-2xl  ">Portfolio (2) </h2>
                    <div className="flex flex-wrap gap-3 mt-2 ">
                        {Images.two.map((imgSrc, index) => (
                            <img className='w-[19%]  border-2 border-white ' key={index} src={imgSrc} alt={`imges ${index + 1}`} />
                        ))}

                    </div>


                </div>

                {/* slick 3 */}

                <div className="border flex flex-wrap gap-3 justify-between pb-10">
                    <h2 className="text-white font-bold text-2xl ">Portfolio (3) </h2>
                    <div className="flex flex-wrap gap-3 mt-2 ">
                        {Images.three.map((imgSrc, index) => (
                            <img className='w-[19%]  border-2 border-white ' key={index} src={imgSrc} alt={`imges ${index + 1}`} />
                        ))}

                    </div>


                </div>

                {/* slick \4 */}

                <div className="border flex flex-wrap gap-3 justify-between pb-10">
                    <h2 className="text-white font-bold text-2xl ">Portfolio (4) </h2>
                    <div className="flex flex-wrap gap-3 mt-2 ">
                        {Images.four.map((imgSrc, index) => (
                            <img className='w-[19%]  border-2 border-white ' key={index} src={imgSrc} alt={`imges ${index + 1}`} />
                        ))}

                    </div>


                </div>




            </Slider>





        </section>
    )
}

export default Gallery_img
