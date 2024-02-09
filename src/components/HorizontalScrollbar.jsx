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
        {
            id: 7,
            img: 'https://imagetolink.com/ib/PvJmJMoR9C.jpg'
        },
        {
            id: 8,
            img: 'https://imagetolink.com/ib/8ZG66eaEsN.jpg'
        },
        {
            id: 9,
            img: 'https://imagetolink.com/ib/H58ECPVtIo.jpg'
        }
    ];

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div className='relative flex items-center my-1'>
            <FaChevronLeft onClick={slideLeft} className='cursor-pointer opacity-100 hover:opacity-50 ml-2 w-5 h-4' />
            <div id="slider" className='overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {data.map((item) => (
                    <div key={item.id} className='inline-block my-0 lg:my-5'>
                        <Card img={item.img} />
                    </div>
                ))}
            </div>
            <FaChevronRight onClick={slideRight} className='cursor-pointer opacity-100 hover:opacity-50 mr-2 w-5 h-4' />
        </div>
    )
}

export default HorizontalScrollbar;
