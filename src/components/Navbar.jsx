import React from 'react';

const Navbar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'properties'
        },
        {
            id: 3,
            link: 'agents'
        },
        {
            id: 4,
            link: 'about us'
        }
    ];

    return (
        <div className='w-screen h-14 z-20 fixed'>
            <div className='px-14 flex items-center justify-between w-full h-full'>

                <div className='flex items-center'>
                    <h1 className='text-xl font-bold text-primary'>Property<span className='text-dark'>Pulse</span></h1>
                </div>

                <ul className='hidden md:flex'>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='capitalize text-lg p-4 cursor-pointer hover:text-primary duration-200'>
                                <a>{link}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className='hidden md:flex mr-4'>
                    <button className='mx-1 capitalize text-primary px-4 py-2'>log in</button>
                    <button className='mx-1 capitalize bg-primary text-white px-4 py-2 rounded-md'>sign up</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
