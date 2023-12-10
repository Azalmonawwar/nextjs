'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const menuItems = ['home', 'men', 'women', 'kids', 'accessories', 'sale']
const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const isLogged = true
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className=' shadow-[0_8px_30px_rgb(0,0,0,0.12)]' >

            <nav className='flex  container mx-auto h-[60px] md:h-[80px] p-5 '>
                {/* Desktop nav */}
                <div className='hidden md:flex items-center justify-between'>
                    <div className='flex'>
                        <h1 className='font-bold text-xl mr-5'> Lyntra</h1>
                        <ul className='flex items-center gap-5 font-semibold'>
                            {
                                menuItems.map((item, index) => {
                                    return (
                                        <li key={index} className='capitalize text-sm'><Link href={`/${item}`}>{item}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <div className='relative flex '>
                            <input type="text" placeholder='Search for product,brand and more' className='p-2 text-sm w-auto  outline-none border-[1px] border-gray-200 bg-white rounded-md' />
                            <Image src={'/search1.png'} alt='search' width={24} height={24} />
                        </div>
                    </div>
                </div>


                {/* //mobile nav */}
                <div className='flex items-center gap-4 md:hidden'>
                    <Image src={'/hamburger.png'} width={24} height={24} className={'w-[20%] md:hidden block z-20'} alt={'menu'} onClick={toggleMenu} />
                    <h1 className='text-sm md:text-xl font-bold'>Lyntra</h1>
                </div>
                <div className='flex items-center gap-4 md:hidden'>
                    <Image src={'/search1.png'} width={20} height={20} alt={'user'} />
                    <Image src={'/heart.png'} width={20} height={20} alt={'user'} />
                    <Image src={'/cart.png'} width={20} height={20} alt={'user'} />
                </div>
                {/* sidemenu */}
                {
                    isOpen &&
                    <div className='absolute md:hidden top-0 left-0 py-24 px-5 w-[70%] bg-gray-100 h-screen'>
                        {
                            isLogged &&
                            <div className='flex  gap-4 items-center mb-6 '>
                                <p className=' text-xs whitespace-nowrap'>Azal monawwar</p>
                                <button className='btn-sm'>
                                    Logout
                                </button>

                            </div>
                        }
                        <ul className='flex flex-col items-stretch  text-xs font-bold  gap-4'>
                            {
                                menuItems.map((item, index) => {
                                    return (

                                        <li key={index} className='flex items-center justify-between py-3 capitalize'><Link href={`/${item}`}>{item}</Link> <Image src={'/next.png'} width={12} height={12} alt='next' /> </li>

                                    )
                                }
                                )
                            }
                        </ul>
                        <hr />
                        <div className='flex gap-3 mt-5'>
                            <button className='btn-sm'>
                                Sign up
                            </button>
                            <button className='btn-sm'>
                                Login
                            </button>
                        </div>
                    </div>
                }
            </nav>
        </header >
    )
}

export default Navbar   