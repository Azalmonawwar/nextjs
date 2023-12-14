import React from 'react'
import Product from './Product'
import Link from 'next/link'
import Image from 'next/image'
import { Rubik } from 'next/font/google'
import { Roboto_Condensed } from 'next/font/google'

const robotoc = Roboto_Condensed({ weight: ['700'], subsets: ['latin'] })
const rubik = Rubik({ weight: ['400', '500', '700'], subsets: ['latin'] })
//will delete later 
const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: '/purse.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: '/purse.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: '/purse.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: '/purse.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: '/purse.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: '/purse.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: '/purse.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: '/purse.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },


    // More products...
]


const TrendingItems = () => {
    return (
        <section className='container mx-auto'>
            <div className='p-4 m-2'>
                <div className='md:m-10 md:p-5 m-5 p-2'>
                    <div className='flex flex-col justify-center items-center md:mb-20 mb-10'>
                        <h3 className={`${robotoc.className} font-bold text-3xl`}> WE LOVE TREND</h3>
                        <p className='text-sm text-gray-400'>Indulge in the latest trends with our curated collection of must-have items. Stay stylish and on point with these hot, in-demand products.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 '>
                        {products.map((product) => (
                            <Product key={product.id} id={product.id} name={product.name} href={product.href} imageSrc={product.imageSrc} imageAlt={product.imageAlt} price={product.price} desc={product.desc} />
                        ))}
                    </div>
                    <div className='flex md:flex-row flex-col gap-4 mt-5'>
                        <div className='bg-gray-200 md:w-1/2 flex  '>
                            <div className='w-1/2 flex items-center justify-center flex-col'>
                                <h4 className={`${rubik.className} md:text-2xl text-base font-semibold mb-2`}>
                                    MEN'S T-SHIRT
                                </h4>
                                <Link href={'/product/t-shirt'} className='md:px-4 md:py-2 px-2 py-1 text-sm md:text-base bg-black text-white hover:bg-gray-900 '>SHOP NOW</Link>
                            </div>
                            <div className='w-1/2'>
                                <Image src={'/shirt.png'} alt='men' width={250} height={300} />
                            </div>
                        </div>
                        <div className='bg-gray-200 md:w-1/2 flex  '>
                            <div className='w-1/2 flex items-center justify-center flex-col'>
                                <h4 className={`${rubik.className} md:text-2xl text-base font-semibold mb-2`}>
                                    MEN'S HOODIE
                                </h4>
                                <Link href={'/product/hoodie'} className='md:px-4 md:py-2 px-2 py-1 text-sm md:text-base bg-black text-white hover:bg-gray-900 '>SHOP NOW</Link>
                            </div>
                            <div className='w-1/2'>
                                <Image src={'/hoodie.png'} alt='men' width={250} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendingItems