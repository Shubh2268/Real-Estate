import React from 'react'

const Card = ({ img }) => {
  return (
    <button className='w-64 h-40 mx-4'>
      <div className='border-[1px] border-gray-300 rounded-md'>
      <img src={img} alt='' className='w-full h-full rounded-t-md' />
      <h2 className='p-2 text-sm font-medium text-start'>Serene Haven Estates</h2>
      </div>
    </button>
  )
}

export default Card
