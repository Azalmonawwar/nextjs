import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Product = ({ product }: any) => {
    //if price range is not available, set it to 0 and get first price in array
    if (!product?.price_range) {
        product.price_range = [300]
    }


    //set title to limit to 30 characters
    if (product.product_title.length > 25) {
        product.product_title = product.product_title.substring(0, 30) + '...'
    }

    return (


        <Link href={`/product/${product.product_id}`} className="flex flex-col border-[1px] border-gray-300  items-center">
            <div key={product.product_id} className=" aspect-h-1 aspect-w-1  overflow-hidden md:h-[250px] md:w-[200px] lg:h-[300px] lg:w-[250px] bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    width={300}
                    height={300}
                    src={product.product_photos[0]}
                    alt={product.product_title}
                    className=" h-full w-full object-cover hover:scale-110 transition-all duration-500 ease-in-out "
                />
            </div>


            <h3 className="mt-4 pl-3 md:text-base text-sm  text-gray-700 font-semibold md:mr-auto">{product.product_title}</h3>
            <p className="mt-2 pl-3 text-xs text-gray-400 product-desc overflow-hidden text-ellipsis whitespace-nowrap md:mr-auto"> {product.product_description}</p>
            <p className="mt-1 pl-3 text-lg font-medium text-gray-900 md:mr-auto">₹ {product.price_range[0]}</p>
        </Link>

    )
}

export default Product