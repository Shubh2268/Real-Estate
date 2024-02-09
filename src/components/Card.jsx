import React from 'react'

const Card = ({ img }) => {
  return (
    <button className='w-64 h-40 mx-4'>
      <img src={img} alt='' className='w-full h-full rounded-t-md' />
      <div>
        <p className='bg-gray-100 text-gray-700 font-medium tracking-wide capitalize py-2 text-xs rounded-b-md'>sea view </p>
      </div>
    </button>
  )
}

export default Card
