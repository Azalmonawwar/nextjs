import Image from 'next/image'
import React from 'react'
const footer = [

    {
        title: 'Products',
        links: ['Delivery', 'Legal Notice', 'Price Drop', 'New Products', 'Best Sale']
    },
    {
        title: 'Company',
        links: ['About Us', 'Careers', 'Contact Us']
    },
    {
        title: 'Information',
        links: ['Terms of Use', 'Privacy Policy', 'Sitemap']
    },
    {
        title: 'Account',
        links: ['My Account', 'My Orders', 'My Wishlist', 'Addresses']
    }
]
const Footer = () => {
    return (
        <footer className="bg-black ">
            <div className=' text-white py-10 px-5'>
                <div className="container p-4  mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  ">
                    {footer.map((e, index) => {
                        return (
                            <div key={index}>
                                <h3 className=' text-center text-xl mb-5 mt-5'>{e.title}</h3>
                                {
                                    e.links.map((link, index) => {
                                        return (
                                            <p key={index} className='text-gray-400 md:w-1/2 mx-auto text-center  mb-2 hover:text-white cursor-pointer text-base'>{link}</p>
                                        )
                                    })
                                }
                            </div>
                        )
                    })}
                    <div>
                        <h3 className=' text-center text-xl mb-5 mt-5'>Follow Us</h3>
                        <div className='flex justify-center gap-4'>
                            <a href='#' className='text-gray-400    mb-2 hover:text-white cursor-pointer text-base'><Image src={'/facebook.png'} alt={'social logo'} height={24} width={24} className='text-white invert' /></a>
                            <a href='#' className='text-gray-400    mb-2 hover:text-white cursor-pointer text-base'><Image src={'/instagram.png'} alt={'social logo'} height={24} width={24} className='bg-white invert' /></a>
                            <a href='#' className='text-gray-400    mb-2 hover:text-white cursor-pointer text-base'><Image src={'/twitter.png'} alt={'social logo'} height={24} width={24} className='bg-white invert' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-around items-center bg-gray-300 text-gray-900  text-center'>
                <div>
                    <h4 className='sm:text-sm md:text-base text-xs'>
                        &#169;2023 - Lyntra By Azal Monawwar
                    </h4>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <Image src={'/amazon-pay.png'} alt='payment' height={40} width={40} />
                    <Image src={'/paypal.png'} alt='payment' height={40} width={40} />
                    <Image src={'/visa.png'} alt='payment' height={40} width={40} />
                    <Image src={'/upi.png'} alt='payment' height={40} width={40} />
                </div>
            </div>
        </footer >
    )
}

export default Footer