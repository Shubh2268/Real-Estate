import React, { useState } from 'react';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {

    const [navigation, setNavigation] = useState(false);

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
        <div className='w-full h-14 z-20'>
            <div className='px-5 lg:px-14 flex items-center justify-between w-full h-full'>

                <div className='flex items-center'>
                    <h1 className='text-xl sm:text-2xl font-bold text-primary'>Property<span className='text-dark'>Pulse</span></h1>
                </div>

                <ul className='hidden lg:flex'>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='capitalize text-lg p-4 cursor-pointer hover:text-primary duration-200'>
                                <a>{link}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className='hidden lg:flex mr-4'>
                    <button className='mx-1 capitalize text-primary px-4 py-2'>log in</button>
                    <button className='mx-1 capitalize bg-primary text-white px-4 py-2 rounded-lg'>sign up</button>
                </div>

                <div className='lg:hidden'>
                    <div className='cursor-pointer'>
                        <HiBars3BottomLeft onClick={() => setNavigation(true)} size={25} />
                    </div>
                </div>

            </div>

            {/* mobile view */}
            <div className={navigation ? 'lg:hidden fixed left-0 top-0 w-full h-full backdrop-blur-sm' : ''}>
                <div className={navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gray-200 p-5 ease-in duration-500' : 'fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h2 onClick={() => setNavigation(false)} className='text-lg sm:text-2xl font-bold text-primary cursor-pointer'>Property<span className='text-dark'>Pulse</span></h2>
                            <div className='p-3 cursor-pointer'>
                                <LiaTimesSolid onClick={() => setNavigation(false)} size={25} />
                            </div>
                        </div>
                    </div>

                    <div className='mt-6 flex flex-col h-fit gap-12'>
                        <ul className='capitalize'>
                            {
                                links.map(({ id, link }) => (
                                    <li key={id} className='py-1 my-1 text-lg sm:text-xl tracking-wide cursor-pointer hover:text-primary'>
                                        <a onClick={() => setNavigation(false)} offset={-75}>
                                            {link}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='w-full mt-5'>
                        <button className='capitalize bg-primary text-white px-4 py-2 rounded-lg'>log in / sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
