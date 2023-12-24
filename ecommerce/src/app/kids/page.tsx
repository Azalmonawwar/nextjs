import Product from '@/components/Product'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { Rubik } from 'next/font/google'
import { getData } from '@/actions/getData'

const rubik = Rubik({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
const Kids = async () => {
    const data = await getData('shirts', 'kids');
    return (
        <Wrapper>
            <div className='my-24'>
                <h3 className={`text-2xl font-semibold mb-10 text-center md:text-left ${rubik.className}`}>KIDS SHOPPING </h3>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
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

export default Kids