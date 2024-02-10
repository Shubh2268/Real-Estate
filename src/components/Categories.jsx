import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';

const Categories = () => {
  return (
    <div className='my-14'>
      <div>
        <h2 className='mx-7 my-3 sm:my-1 text-lg font-semibold text-center sm:text-start'>Explore Our Properties</h2>
        <HorizontalScrollbar />
      </div>

      <div className='h-screen my-14 mx-4 md:mx-10'>
        <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-4 md:grid-cols-4 gap-3 md:gap-4 h-screen'>
          <div className='bg-indigo-100 col-span-1 md:row-span-2 md:col-span-2 w-full bg-center bg-cover rounded-md' style={{backgroundImage: `url('https://imagetolink.com/ib/cPyUD6C0ZY.jpg')`}}>
            <span className='text-white fixed bottom-2'>Penthouse</span>
          </div>
          <div className='bg-fuchsia-100 col-span-1 md:col-span-2 row-span-1 md:row-span-4 w-full bg-center bg-cover rounded-md' style={{backgroundImage: `url('https://imagetolink.com/ib/cPyUD6C0ZY.jpg')`}}>
            <span className='text-white fixed bottom-2'>Off Plan Property</span>
          </div>
          <div className='bg-purple-100 col-span-1 md:row-span-2 md:col-span-2 w-full bg-center bg-cover rounded-md' style={{backgroundImage: `url('https://imagetolink.com/ib/cPyUD6C0ZY.jpg')`}}>
            <span className='text-white fixed bottom-2'>Rented Apartment</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;
