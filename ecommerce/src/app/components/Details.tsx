import Image from 'next/image';
import React from 'react'
import Wrapper from './Wrapper';

const product: Product =
{
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    rating: 4,
    desc: 'Hello world'

}


type Product = {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
    rating: number;
    desc: string;
}

const Details = () => {
    return (

        <Wrapper>
            <div className='overflow-hidden flex flex-col  h-screen'>

            </div>
        </Wrapper >

    )

}

export default Details