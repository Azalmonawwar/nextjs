import Link from 'next/link';
import React from 'react'

type Product = {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
    desc: string;
}
const Product02 = ({ id, href, imageAlt, imageSrc, name, price, desc }: Product) => {
    return (
        <Link href={href}>

            <div className="aspect-w-1 aspect-h-1 w-full relative overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <div className="absolute h-full w-full bg-gradient-to-t from-black to-white opacity-[0.5] hover:opacity-0 transition bottom-0   " >
                    <p className="text-lg font-medium absolute  bottom-0 p-5  text-white hover:text-black">{price}</p>
                </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-900 font-bold">{name}</h3>
            <h3 className='mt-2 text-sm text-gray-700'>{desc}</h3>

            <button className='px-[32px] py-[8px] w-full  mt-5 flex items-center justify-center rounded-md mx-auto bg-gray-200 text-gray-700 hover:bg-gray-300 transition'>Add to Bag</button>
        </Link>
    )
}

export default Product02    