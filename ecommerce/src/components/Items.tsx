import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Card from './Card'


const data = [
    {
        href: '/product/purse',
        src: '/purse.png',
        title: `Designer Purse`,
    },
    {
        href: '/product/watch',
        src: '/watch.png',
        title: `Designer Watch`,
    },
    {
        href: '/product/shoes',
        src: '/shoes.png',
        title: `Designer Shoes`,
    },
]

const Items = () => {
    return (
        <section className='container mx-auto  '>
            <div className='p-4 m-2  flex flex-col md:flex-row gap-3 '>
                {
                    data.map((item, index) => (
                        <Card key={index} href={item.href} src={item.src} title={item.title} />
                    ))
                }
            </div>
        </section >
    )
}

export default Items