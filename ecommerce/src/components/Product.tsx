import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Stars from './Stars';

const Product = ({ product }: any) => {

    if (product.title.length > 30) {
        product.title = product.title.slice(0, 30) + '...'
    }

    return (

        <Link href={`/product/${product.id}`} className="flex flex-col border-[1px] border-gray-300  items-center">
            <div key={product.id} className=" aspect-h-1 aspect-w-1  overflow-hidden md:h-[250px] md:w-[200px] lg:h-[300px] lg:w-[250px] bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    width={300}
                    height={300}
                    src={product.image}
                    alt={product.title}
                    className=" h-full w-full object-cover hover:scale-110 transition-all duration-500 ease-in-out "
                />
            </div>


            <h3 className="mt-4 pl-3 md:text-base text-sm  text-gray-700 font-semibold md:mr-auto">{product.title}</h3>
            <p className="mt-1 pl-3 text-sm flex font-light text-gray-900 mr-auto gap-2">
                <span>{product.rating} </span>
                <Stars  rating={product.rating} />
                </p>
            <p className="mt-1 pl-3 md:text-lg  text-base font-medium text-gray-900 mr-auto">₹ {product.price}</p>
        </Link>

    )
}

export default Product