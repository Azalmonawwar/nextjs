'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { Roboto_Condensed } from 'next/font/google'
import { login } from '@/store/authSlice'
import { getCart } from '@/actions/cart.action'
import { getUser } from '@/actions/user.action'
import { initCart } from '@/store/cartSlice'
const robotoc = Roboto_Condensed({ weight: ['700'], subsets: ['latin'] })


const menuItems = [
    {
        title:'home',
        link:'/'
    },
    {
        title:'men',
        link:'/men'
    },
    {
        title:'women',
        link:'/women'
    },
    {
        title:'kids',
        link:'/kids'
    },
    {
        title:'accessories',
        link:'/accessories'
    }
]

const Navbar = () => {
    const auth = useSelector((state: any) => state.auth)
    const dispatch = useDispatch()

    // getting cart length and user details from the server
    React.useEffect(() => {
        getUser().then((res) => {
            dispatch(login({ fullName: res?.user?.fullName, email: res?.user?.email, _id: res?.user?._id, isAdmin: res?.user?.isAdmin }))
        })
    }, [])


    //state to toggle the menu
    const [isOpen, setIsOpen] = React.useState(false)
    const isLogged = true
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <header className='w-full fixed top-0 left-0  z-[100] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]' >
            {/* <Nothin/> */}
            <nav className='nav container md:mx-auto border-[2px] border-gray-200 my-2 '>
                {/* Desktop nav */}

                <div className='md:flex hidden'>
                    <h1 className={`font-bold text-xl mr-5 ${robotoc.className} uppercase`} ><Link href={'/'} >Lyntra</Link></h1>
                    <ul className='flex items-center gap-5 font-semibold '>
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <li key={index} className='capitalize text-sm hover:text-blue-300 transition font-semibold'><Link href={`${item.link}`}>{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='md:flex hidden gap-4 '>
                    <div className='relative '>
                        <input type="text" placeholder='Search for product,brand and more' className='p-2 text-sm w-[300px] md:w-auto lg:w-[350px]   outline-none border-[1px] border-gray-100 bg-gray-200 focus:bg-white transition rounded-md' />
                        <Image src={'/search1.png'} alt='search' width={18} height={18} className='absolute top-[30%] right-[10px]  ' />
                    </div>
                    <div className='flex-center gap-4'>


                        <Link href={'/cart'} className='icons relative'>
                            <Image src={'/cart.png'} width={20} height={20} alt='cart' />
                            
                            <p >Cart</p>
                        </Link>

                        <Link href={'/profile'} className='icons'>
                            <Image src={'/user.png'} width={20} height={20} alt='user' />
                            <p>Profile</p>
                        </Link>
                    </div>
                </div>


                {/* //mobile nav */}
                <div className='flex-center gap-4 md:hidden'>
                    <Image src={'/hamburger.png'} width={24} height={24} className={'w-[20%] md:hidden block z-50'} alt={'menu'} onClick={toggleMenu} />
                    <h1 className={`text-xl font-bold ${robotoc.className} uppercase`}><Link href={'/'}>Lyntra</Link></h1>
                </div>
                <div className='flex-center gap-4 md:hidden relative'>
                    <Image src={'/search1.png'} width={20} height={20} alt={'user'} />
                    <Link href={'/profile'}><Image src={'/user.png'} width={20} height={20} alt={'user'} /></Link>
                    <Link href={'/cart'}><Image src={'/cart.png'} width={20} height={20} alt={'cart'} /></Link>
                    <div className='absolute top-0 right-0 bg-red-500 text-white text-[10px] px-1 rounded-full'>{length}</div>
                </div>
                {/* sidemenu */}
                {
                    isOpen &&
                    <div className='z-40 absolute md:hidden top-0 left-0 py-24 px-5 w-[70%] bg-gray-100 h-screen'>
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
                                        <li key={index} className='flex items-center justify-between py-3 capitalize'><Link href={`${item.link}`}>{item.title}</Link> <Image src={'/next.png'} width={12} height={12} alt='next' /> </li>
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