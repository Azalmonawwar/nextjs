import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Rubik } from 'next/font/google'
import { Roboto_Condensed } from 'next/font/google'
import SmallCard from './SmallCard'

const robotoc = Roboto_Condensed({ weight: ['700'], subsets: ['latin'] })
const rubik = Rubik({ weight: ['400', '500', '700'], subsets: ['latin'] })
//will delete later 
const products = [
    {
        "product_id": '1362027436337942980',
        "product_title": "Mens T-Shirt",
        "product_description": "Mens T-Shirt",
        "product_photos": [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKnxOT2tXmZFSlXnvEEPKtIt4XiR7kNSDbg-FNndBAq-B37cCG7v0hWMUiKHJCkZmcXNObIuxxpE6gO5G3I3mlIYaKOITaOw&usqp=CAE"
        ],
        "price_range": [
            300
        ]
    },
    {
        "product_id": '1362027436337942980',
        "product_title": "Mens T-Shirt",
        "product_description": "Mens T-Shirt",
        "product_photos": [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKnxOT2tXmZFSlXnvEEPKtIt4XiR7kNSDbg-FNndBAq-B37cCG7v0hWMUiKHJCkZmcXNObIuxxpE6gO5G3I3mlIYaKOITaOw&usqp=CAE"
        ],
        "price_range": [
            300
        ]
    },
    {
        "product_id": '1362027436337942980',
        "product_title": "Mens T-Shirt",
        "product_description": "Mens T-Shirt",
        "product_photos": [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKnxOT2tXmZFSlXnvEEPKtIt4XiR7kNSDbg-FNndBAq-B37cCG7v0hWMUiKHJCkZmcXNObIuxxpE6gO5G3I3mlIYaKOITaOw&usqp=CAE"
        ],
        "price_range": [
            300
        ]
    },
    {
        "product_id": '1362027436337942980',
        "product_title": "Mens T-Shirt",
        "product_description": "Mens T-Shirt",
        "product_photos": [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKnxOT2tXmZFSlXnvEEPKtIt4XiR7kNSDbg-FNndBAq-B37cCG7v0hWMUiKHJCkZmcXNObIuxxpE6gO5G3I3mlIYaKOITaOw&usqp=CAE"
        ],
        "price_range": [
            300
        ]
    },
]


const TrendingItems = () => {
    return (
        <section className='container mx-auto'>
            <div className='p-4 m-2'>
                <div className=' '>
                    <div className='flex flex-col justify-center items-center md:mb-20 mb-10'>
                        <h3 className={`${robotoc.className} font-bold text-3xl`}> WE LOVE TREND</h3>
                        <p className='text-sm text-gray-400'>Indulge in the latest trends with our curated collection of must-have items. Stay stylish and on point with these hot, in-demand products.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 '>
                        {products.map((product: any) => (
                            <SmallCard key={product.product_id} product={product} />
                        ))}
                    </div>
                    <div className='flex md:flex-row flex-col gap-4 mt-5'>
                        <div className='bg-gray-200 md:w-1/2 flex  '>
                            <div className='w-1/2 flex items-center justify-center flex-col'>
                                <h4 className={`${rubik.className} md:text-2xl text-base font-semibold mb-2`}>
                                    MENS T-SHIRT
                                </h4>
                                <Link href={'/men'} className='md:px-4 md:py-2 px-2 py-1 text-sm md:text-base bg-black text-white hover:bg-gray-900 '>SHOP NOW</Link>
                            </div>
                            <div className='w-1/2'>
                                <Image src={'/shirt.png'} alt='men' width={250} height={300} />
                            </div>
                        </div>
                        <div className='bg-gray-200 md:w-1/2 flex  '>
                            <div className='w-1/2 flex items-center justify-center flex-col'>
                                <h4 className={`${rubik.className} md:text-2xl text-base font-semibold mb-2`}>
                                    MENS HOODIE
                                </h4>
                                <Link href={'/men'} className='md:px-4 md:py-2 px-2 py-1 text-sm md:text-base bg-black text-white hover:bg-gray-900 '>SHOP NOW</Link>
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