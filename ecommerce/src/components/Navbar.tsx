'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import React, { use } from 'react'
import { Roboto_Condensed } from 'next/font/google'
import { login } from '@/store/authSlice'
import { getUser } from '@/actions/user.action'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

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
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        defaultValues: {
            search: '',
        },
    });
    const router = useRouter()
    const onSubmit = (data:any) => {
        const search = data.search.replace(/\s+/g, '-').toLowerCase()
        router.push(`/search/${search}?page=1`)
        reset()
    }
    const dispatch = useDispatch()
    const auth = useSelector((state: any) => state.auth)
    React.useEffect(() => {
        getUser().then((res) => {
            dispatch(login({ fullName: res?.user?.fullName, email: res?.user?.email, _id: res?.user?._id, isAdmin: res?.user?.isAdmin }))
        })
    }, [])


    //state to toggle the menu
    const [isOpen, setIsOpen] = React.useState(false)
    const [isInput, setIsInput] = React.useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    //logout
    const logout = async () => {
        try {
            const res = await fetch('/api/user/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.ok) {
                window.location.href = '/login'
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <header className='w-full fixed top-0 left-0  z-[100] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]' >
            {/* <Nothin/> */}
            <nav className='nav container md:mx-auto border-[2px] border-gray-200 my-2 '>
                {/* Desktop nav */}

                <div className='md:flex hidden'>
                    <h1 className={`font-bold text-xl mr-5 ${robotoc.className} uppercase`} ><Link href={'/'} >FabricFantasy</Link></h1>
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
                        <input type="text" id='search' {...register('search')} placeholder='Search for product,brand and more' className='p-2 text-sm w-[300px] md:w-auto lg:w-[350px]   outline-none border-[1px] border-gray-100 bg-gray-200 focus:bg-white transition rounded-md' />
                        <button  onClick={handleSubmit(onSubmit)}>
                            <Image src={'/search1.png'} alt='search' width={18} height={18} className='absolute top-[30%] right-[10px]  ' />
                            </button>
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
                    <h1 className={`text-xl font-bold ${robotoc.className} uppercase`}><Link href={'/'}>FabricFantasy</Link></h1>
                </div>
                {
                // isInput &&
                //  <div className='fixed z-[100] top-0 left-0 w-full p-4 '>
                //  <input type="text" id='search' {...register('search')} placeholder='Search for product,brand and more' className='w-full p-2  rounded-md text-white focus:outline-none ' />
                //  <button  onClick={handleSubmit(onSubmit)}>
                //             <Image src={'/search1.png'} alt='search' width={18} height={18} className='absolute top-[30%] right-[10px]  ' />
                // </button>
                // {/* <div className='w-full h-screen bg-black opacity-40'/> */}
                // </div>
                 }
                <div className='flex-center gap-4 md:hidden relative'>
                    <Image src={'/search1.png'} width={20} height={20} alt={'search'}  onClick={()=>setIsInput(!isInput)}/>
                    <Link href={'/profile'}><Image src={'/user.png'} width={20} height={20} alt={'user'} /></Link>
                    <Link href={'/cart'}><Image src={'/cart.png'} width={20} height={20} alt={'cart'} /></Link>
                    
                </div>
                {/* sidemenu */}
                {
                    isOpen &&
                    <>
                    <div className='z-40 absolute md:hidden top-0 left-0 py-24 px-5 w-[70%] bg-gray-100 h-screen'>
                        {
                            auth?.user?.fullName &&
                            <div className='flex  gap-4 items-center mb-6 '>
                                <p className=' text-xs whitespace-nowrap capitalize'>{auth?.user?.fullName}</p>
                                <button className='btn-sm' onClick={logout}>
                                    Logout
                                </button>

                            </div>
                        }
                        <ul className='flex flex-col items-stretch  text-xs font-bold  gap-4'>
                            {
                                menuItems.map((item, index) => {
                                    return (
                                        <li key={index} className='flex items-center justify-between py-3 capitalize' onClick={toggleMenu}><Link href={`${item.link}`}>{item.title}</Link> <Image src={'/next.png'} width={12} height={12} alt='next' /> </li>
                                    )
                                }
                                )
                            }
                        </ul>
                        <hr />
                        <div className='flex gap-3 mt-5'>
                            <Link href={'/signup'} className='btn-sm'>
                                Sign up
                            </Link>
                            <Link href={'/login'} className='btn-sm'>
                                Login
                            </Link>
                        </div>
                    </div>
                        <div className='h-[1000px] w-screen bg-black opacity-50 absolute top-0' onClick={toggleMenu}/>
                            </>
                }
            </nav>
        </header >
    )
}

export default Navbar   