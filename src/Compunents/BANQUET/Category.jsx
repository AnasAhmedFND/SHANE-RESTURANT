"use client"
import React, { useState } from 'react'

const Categorys = {
    "FILTER-ALL" :
    [
        "/banq/Rectangle 74.png",
        "/banq/Rectangle 75.png",
        "/banq/Rectangle 76.png",
        "/banq/Rectangle 77.png",
        "/banq/Rectangle 78.png",
        "/banq/Rectangle 79.png",
        "/banq/Rectangle 80.png",
        "/banq/Rectangle 81.png",
        "/banq/Rectangle 83.png",


    ],

    "SHANE" : [
        "/banq/Rectangle 78.png",
        "/banq/Rectangle 79.png",
        "/banq/Rectangle 80.png",
        "/banq/Rectangle 81.png",
        "/banq/Rectangle 83.png",

    ],

     "SHAGUN" : [
        "/banq/Rectangle 74.png",
        "/banq/Rectangle 75.png",
        "/banq/Rectangle 76.png",
        "/banq/Rectangle 77.png",
    ],

     "TABLE CLOTHS" : [
        "/banq/Rectangle 78.png",
        "/banq/Rectangle 79.png",
        "/banq/Rectangle 80.png",
        "/banq/Rectangle 81.png",
        "/banq/Rectangle 83.png",

    ],

     "NAPKINS AVLABLE " : [
       "/banq/Rectangle 76.png",
        "/banq/Rectangle 77.png",
        "/banq/Rectangle 78.png",
        "/banq/Rectangle 79.png",
        "/banq/Rectangle 80.png",
        "/banq/Rectangle 81.png",

    ],
}

const Category = () => {

    const [active, setActive] = useState("FILTER-ALL")
    

    return (
        <section className='container mx-auto py-10 bg-black text-white '>
            <div className="text-center">
                <h3 className='text-red-500 text-xl'> WE HAVE 3 PARTY HALL</h3>
                <h3>SHANE Banquet – 60 to 125 people</h3>
                <h3>Shagun – New one 100 to 300 people</h3>

            </div>
            <ul className='flex  justify-around mt-10 '>               

                {Object.keys(Categorys).map((portfolio) => (
                    <li onClick={() => setActive(portfolio)} key={portfolio} className={`bg-[#d694f1] text-black hover:bg-red-500 hover:text-white py-2 px-4 font-bold rounded-md cursor-pointer ${active === portfolio ?' bg-[#ff6600] text-white' : 'bg-[#f5f] '} `}  > 

                    {portfolio}

                    </li>

                ))}

            </ul>

            <div className="py-5 flex flex-wrap gap-5 justify-between  mt-10 text-center items-center ">
                  {  Categorys[active].map((imgSrc, index) => (
                    <img className='w-[23%] ' key={index} src={imgSrc} alt={`Imges ${index + 1} `} />

            ))
        }  
            </div>

        </section>
    )
}

export default Category
