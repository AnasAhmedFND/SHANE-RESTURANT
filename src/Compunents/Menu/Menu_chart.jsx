"use client"
import React from 'react'

const Menu_chart = () => {
    const downloadsingleMenu = (url, fileName) => {
        const link = document.createElement("a");
        link.href = url ; 
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className='container mx-auto bg-black py-10 md:px-0 px-2  '>
            <div className="flex justify-center ">
                <button title="Click to download" onClick={() => downloadsingleMenu("/menu/menu-chart1.png", "Feeleat-menu.png") } className=' font-bold text-white border py-4 px-10 bg-red-500 tracking-widest cursor-pointer '>click here to download menu</button>

            </div>
            <img className='mt-4' src="/menu/menu-chart1.png" alt="" />

            <div className="flex justify-center mt-5 ">
                <button title="Click to download" onClick={() => downloadsingleMenu("/menu/menu-chart1.png", "food-menu.png") } className=' font-bold text-white border py-4 px-10 bg-red-500 tracking-widest cursor-pointer '>click here to download menu</button>

            </div>
            <img className='mt-4' src="/menu/menu-chart2.png" alt="" />

            <div className="flex justify-center mt-5 ">
                <button title="Click to download" onClick={() => downloadsingleMenu("/menu/menu-chart1.png", "drinks menu.png") } className=' font-bold text-white border py-4 px-10 bg-red-500 tracking-widest cursor-pointer '>click here to download menu</button>

            </div>
            <img className='mt-4' src="/menu/menu-chart3.png" alt="" />



        </section>
    )
}

export default Menu_chart
