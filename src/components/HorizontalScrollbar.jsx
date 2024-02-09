import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from './Card';

const HorizontalScrollbar = () => {

    const data = [
        {
            id: 1,
            img: 'https://imagetolink.com/ib/PvJmJMoR9C.jpg'
        },
        {
            id: 2,
            img: 'https://imagetolink.com/ib/8ZG66eaEsN.jpg'
        },
        {
            id: 3,
            img: 'https://imagetolink.com/ib/H58ECPVtIo.jpg'
        },
        {
            id: 4,
            img: 'https://imagetolink.com/ib/PvJmJMoR9C.jpg'
        },
        {
            id: 5,
            img: 'https://imagetolink.com/ib/8ZG66eaEsN.jpg'
        },
        {
            id: 6,
            img: 'https://imagetolink.com/ib/H58ECPVtIo.jpg'
        },
    ];

    return (
        <div className='relative flex items-center my-10'>
            <FaChevronLeft size={25} className='cursor-pointer opacity-100 hover:opacity-50 mx-2' />
            <div id="slider" className='overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {data.map((item) => (
                    <div key={item.id} className='inline-block my-0 lg:my-5'>
                        <Card img={item.img} />
                    </div>
                ))}
            </div>
            <FaChevronRight size={25} className='cursor-pointer opacity-100 hover:opacity-50 mx-2' />
        </div>
    )
}

export default HorizontalScrollbar;
