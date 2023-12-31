import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const SmallCard = ({ product }: any) => {
    product.title = product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title
    return (
        <Link href={`/product/${product.id}`} className="border-[1px] border-gray-300 p-2">
            <div key={product.id} className=" aspect-h-1 aspect-w-1  overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    width={300}
                    height={300}
                    src={product.image}
                    alt={product.title}
                    className=" h-full w-full obj hover:scale-110 transition-all duration-500 ease-in-out "
                />
            </div>


            <h3 className="mt-4 md:text-base text-sm  text-gray-700 font-semibold">{product.title.slice(0, 30)}</h3>

            <p className="mt-1 text-lg font-medium text-gray-900">₹ {product.price}</p>
        </Link>
    )
}

export default SmallCard