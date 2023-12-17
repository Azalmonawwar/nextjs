import Wrapper from '@/components/Wrapper'
import React from 'react'
import { shirts_mens } from '@/data'
import Product from '@/components/Product'
const Men = () => {

    return (
        <Wrapper>
            <div className='my-24'>
                <h3 className='text-2xl font-semibold mb-10'>MENS SHOPPING </h3>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        shirts_mens.map((product, index) => {
                            return (
                                <Product key={product.product_id} product={product} />
                            )
                        })
                    }
                </div>
            </div>

        </Wrapper>
    )
}

export default Men