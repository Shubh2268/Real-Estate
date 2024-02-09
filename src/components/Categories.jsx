import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';

const Categories = () => {
  return (
    <div className='my-10'>
      <div className='container'>
        <h2 className='mx-7 my-1 text-lg font-semibold'>Explore Our Properties</h2>
        <HorizontalScrollbar />
      </div>
    </div>
  )
}

export default Categories;
