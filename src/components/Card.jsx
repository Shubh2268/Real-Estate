import React from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";

const Card = ({ img }) => {
  return (
    <button className='w-36 sm:w-64 h-full sm:h-full mx-1 sm:mx-3'>
      <div className='border-[1px] border-gray-300 rounded-md'>
        <img src={img} alt='' className='w-full h-full rounded-t-md' />
        <h2 className='px-2 pt-3 text-sm font-medium text-start'>Serene Haven Estates</h2>
        <div className='flex'>
          <div className=' flex items-center p-2 font-medium text-gray-600'>
            <HiOutlineLocationMarker />
            <p className='capitalize px-2 text-sm'>city center</p>
          </div>
          <p className='text-sm font-medium text-gray-600 p-2'>$4,000,000</p>
        </div>
      </div>
    </button>
  )
}

export default Card;
