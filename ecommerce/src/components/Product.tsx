import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
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


        <Link key={id} href={href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    width={200}
                    height={200}
                    src={imageSrc}
                    alt={imageAlt}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    blurDataURL={imageSrc}
                    priority={true}
                    quality={100}
                    loading="eager"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />

            </div>
            <h3 className="mt-4 md:text-base text-sm  text-gray-700">{name}</h3>
            <p className="mt-2 text-xs text-gray-400 product-desc overflow-hidden text-ellipsis whitespace-nowrap"> {desc}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
        </Link>

    )
}

export default Product