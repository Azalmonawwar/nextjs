import Product from '@/components/Product'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { Rubik } from 'next/font/google'
import { getData } from '@/actions/getData'

const rubik = Rubik({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
const Accessories = async () => {
    const data = await getData('watch', 'men');
    return (
        <Wrapper>
            <div className='md:my-24 my-10'>
                <h3 className={`text-2xl font-semibold mb-10 text-center md:text-left ${rubik.className}`}>ACCESSORIES SHOPPING </h3>
                <div className='grid md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        data?.map((product: any) => {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        })
                    }
                </div>
            </div>

        </Wrapper>
    )
}

export default Accessories