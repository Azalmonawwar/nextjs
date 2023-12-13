'use client'
import Image from 'next/image'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
                    centerMode={true}
                >
                    <div>
                        <Image src="/boy.jpg" alt='boy' height={400} width={900} />

                    </div>
                    <div>
                        <Image src="/girl.jpg" alt='girl' height={400} width={800} />


                    </div>

                </Carousel>
            </div>
        </section>
    )
}

export default CarouselImg