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
const Product = ({ id, href, imageAlt, imageSrc, name, price, desc }: Product) => {
    return (


        <a key={id} href={href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-2 text-xs text-gray-300 product-desc overflow-hidden text-ellipsis whitespace-nowrap"> {desc}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
        </a>

    )
}

export default Product