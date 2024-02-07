import React from 'react';

const Header = () => {

    return (
        <div>
            <div className='w-full bg-center bg-cover' style={{backgroundImage: `url('https://imagetolink.com/ib/cPyUD6C0ZY.jpg')`}}>
                <div className='flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 py-14'>
                    <div className='text-center'>
                        <div className='container px-4 mx-auto'>
                            <div className='max-w-4xl mx-auto text-center'>
                                <h2 className='mt-8 mb-6 text-4xl lg:text-5xl font-bold text-white'>Discover Your <span className='text-[#FFB901]'>Dream Home</span> Today!</h2>
                                <h3 className='max-w-3xl mx-auto mb-5 text-lg text-gray-100'>Explore, Envision, and Make it Yours! Start Your Journey Now.</h3>
                                <input type='text' className='block mx-auto w-4/5 my-8 outline-none py-1 sm:py-3   px-3 sm:px-5 capitalize rounded-md bg-gray-200' placeholder='Search Your Property...' />
                                <a className='inline-block sm:w-full md:w-auto mb-4 md:mr-6 py-2 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200'
                                    href='#'>get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
