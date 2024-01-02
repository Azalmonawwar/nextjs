import React from 'react'
import { Roboto_Condensed } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { getDataByDepartment, getDataByHighestPrice, getDataByHighestRating } from '@/actions/getData'

const robotoc = Roboto_Condensed({ weight: ['700'], subsets: ['latin'] })

const SpecialProducts = async () => {
    const special = await getDataByHighestRating()
    return (
        <section className='container mx-auto'>
            <div className='p-4 m-2 '>
                <div className='md:m-10 md:p-5 m-5 p-2 flex flex-col '>
                    <div className='flex flex-col justify-center items-center md:mb-20 mb-10'>
                        <h3 className={`${robotoc.className} font-bold text-3xl`}> SPECIAL PRODUCTS</h3>
                        <p className='text-sm text-gray-400'>Elevate your style with our Special types cloth &#9472; a perfect fusion of comfort and fashion, designed to make every moment special.</p>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mb-4'>
                        {
                            special.map((item :any, index:number) => {
                                return (
                                    <div key={index} className="card-container relative overflow-hidden border-gray-300 border-[1px]   flex justify-center items-center ">
                                        <Image src={item.image} alt={item.image} height={400} width={300} />
                                        <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                                            <div className="text-white text-center">
                                                <h2 className="text-2xl font-thin mb-2 uppercase tracking-[5px]">{item.title}</h2>
                                                <Link href={`/product/${item.id}`} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
       
    )
}

export default SpecialProducts