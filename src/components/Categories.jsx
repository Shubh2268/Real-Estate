import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';

const Categories = () => {
  return (
    <div className='my-14'>
      <div>
        <h2 className='mx-7 my-3 sm:my-1 text-lg font-semibold text-center sm:text-start'>Explore Our Properties</h2>
        <HorizontalScrollbar />
      </div>

      <div className='h-screen my-14 mx-4 md:mx-16'>
        <div className='grid grid-cols-1 grid-rows-4 md:grid-cols-4 gap-3 md:gap-6 h-screen'>
          <div className='col-span-1 md:row-span-2 md:col-span-2 w-full bg-center bg-cover rounded-3xl bg-gray-900 bg-opacity-50' style={{backgroundImage: `url('https://imagetolink.com/ib/XDfI3brYJD.jpg')`}}>
            <p className='text-[#FFB901] text-center mt-10 text-3xl font-bold'>Penthouse</p>
          </div>
          <div className='col-span-1 md:col-span-2 row-span-2 md:row-span-4 w-full bg-center bg-cover rounded-3xl' style={{backgroundImage: `url('https://imagetolink.com/ib/iArVjQlxxX.jpg')`}}>
            <p className='text-[#FFB901] text-center mt-10 text-3xl font-bold'>Off Plan Property</p>
          </div>
          <div className='col-span-1 md:row-span-2 md:col-span-2 w-full bg-center bg-cover rounded-3xl' style={{backgroundImage: `url('https://imagetolink.com/ib/nb3Vc2PmWx.jpg')`}}>
            <p className='text-[#FFB901] text-center mt-10 text-3xl font-bold'>Rented Apartment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;
