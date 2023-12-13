import Image from 'next/image';
import React from 'react'

const product: Product =
{
    id: 1,
    name: 'Earthen Bottle',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    rating: 4,
    category: 'household',
    desc: 'Made from high-quality, locally-sourced clay, our Earthen Pot boasts durability and a natural aesthetic that adds warmth to any home. Its rustic charm and earthy tones make it a perfect addition to both traditional and contemporary spaces, creating a harmonious balance between old-world charm and modern style.'

}


type Product = {
    id: number;
    name: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
    rating: number;
    desc: string;
    category: string;
}

const Detail = () => {
    return (

        <section className='container mx-auto p-5'>
            <div className='flex flex-col md:flex-row  '>
                <div className='md:w-1/2 w-full'>
                    <Image src={product.imageSrc} alt={product.imageAlt} width={500} height={500} />
                </div>
                <div className='md:w-1/2 w-full px-7 flex flex-col '>
                    <h3 className='md:text-3xl text-xl  font-bold text-gray-900 tracking-lighter  '>
                        {product.name}
                    </h3>
                    <p className='text-gray-400 capitalize flex my-2 '>
                        {product.category} |&nbsp; <span className={` text-white text-sm px-2 rounded-md  flex items-center justify-center ${product.rating > 3 ? 'bg-green-900' : 'bg-orange-700'}`}> {product.rating}.0 ★</span>
                    </p>
                    <p className='text-xl font-semibold md:my-3 my-2'>
                        {product.price}.00
                    </p>

                    <p className='flex flex-col text-sm text-gray-500 leading-6 md:leading-8 md:w-[80%] my-2 md:my-3'>
                        <span className='text-xl text-gray-800 font-semibold my-3' >Description</span>
                        {product.desc}
                    </p>
                    <div className='flex gap-4 mt-8 text-sm md:text-base'>
                        <button className='px-2 w-1/2 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-500  text-white rounded-md'>Add to Cart</button>
                        <button className='px-2 w-1/2 py-2 md:px-4 md:py-2 bg-blue-700 hover:bg-blue-400 text-white rounded-md'>Buy Now</button>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default Detail