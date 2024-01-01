'use client'
import Image from 'next/image'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const CarouselImg = () => {
    return (
        <section className='container mx-auto  '>
            <div className='p-4 m-2 '>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={1000}
                    dynamicHeight={true}
                    showArrows={false}
                    emulateTouch={true}
                    swipeable={true}
                    stopOnHover={true}
                    // centerMode={true}
                >
                    <div className='relative'>
                        <picture >
                            <source media='(max-width:768px)' srcSet='/shoes.jpg' />
                            {/* <source media='(max-width:769px)' srcSet='/menshirt.webp' /> */}
                        <Image src='/menshirt.webp'  alt='boy' height={500} width={1000} />
                        <div className='h-full w-full bg-black opacity-30 z-[999] absolute top-0 md:hidden block'/>
                        </picture>
                        <p className='text-3xl mx-3 font-bold absolute bottom-[20%] text-white z-[1000] md:hidden block '><Link href={'/search/shoes'}>Best Shoes</Link></p>
                        
                    </div>
                    <div  className='relative'>
                        <picture>
                            <source media='(max-width:768px)' srcSet='/saree.jpg' />
                            {/* <source media='(max-width:769px)' srcSet='/menshirt.webp' /> */}
                        <Image src='/Cpurse.webp'  alt='boy' height={500} width={1000} />
                        <div className='h-full w-full bg-black opacity-30 z-[999] absolute top-0 md:hidden block'/>

                        </picture>
                        <p className='text-3xl mx-3 font-bold absolute bottom-[20%] text-white z-[1000] md:hidden block '><Link href={'/search/saree'}>Best Saree</Link></p>
                       
                    </div>
                    <div  className='relative'>
                        <picture>
                            <source media='(max-width:768px)' srcSet='/shirt.jpg' />
                            {/* <source media='(max-width:769px)' srcSet='/menshirt.webp' /> */}
                        <Image src='/Ckids.webp'  alt='boy' height={500} width={1000} />
                        <div className='h-full w-full bg-black opacity-30 z-[999] absolute top-0 md:hidden block'/>
                        
                        </picture>
                        <p className='text-3xl mx-3 font-bold absolute bottom-[20%] text-white z-[1000] md:hidden block '><Link href={'/men'}>Best Shirts</Link></p>

                    </div>
                    <div  className='relative'>
                        <picture>
                            <source media='(max-width:768px)' srcSet='/kids.jpg' />
                            {/* <source media='(max-width:769px)' srcSet='/menshirt.webp' /> */}
                        <Image src='/handbags.webp'  alt='boy' height={500} width={1000} />
                        <div className='h-full w-full bg-black opacity-30 z-[999] absolute top-0 md:hidden block'/>
                        
                        </picture>
                        <p className='text-3xl mx-3 font-bold absolute bottom-[20%] text-white z-[1000] md:hidden block '><Link href={'/kids'}>Best Kids clothes</Link></p>

                    </div>
                    

                </Carousel>
            </div>
        </section>
    )
}

export default CarouselImg