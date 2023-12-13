import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Card = {
    href: string,
    title: string;
    src: string;
}
const Card = ({ href, title, src }: Card) => {
    return (
        <div className="card-container relative overflow-hidden bg-gray-300 md:w-[33%] flex items-center justify-center w-full">
            <Image src={`${src}`} alt='purse' height={300} width={300} />
            <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div className="text-white text-center">
                    <h2 className="text-2xl font-thin mb-2 uppercase tracking-[5px]">{title}</h2>
                    <Link href={`${href}`} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card