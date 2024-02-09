import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';

const Categories = () => {
  return (
    <div className='my-14'>
      <div className='container'>
        <h2 className='mx-7 my-3 sm:my-1 text-lg font-semibold text-center sm:text-start'>Explore Our Properties</h2>
        <HorizontalScrollbar />
      </div>
    </div>
  )
}

export default Categories;
