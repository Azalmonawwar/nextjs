import Product from '@/components/Product'
import Wrapper from '@/components/Wrapper'
import { hoodie } from '@/data'
import React from 'react'

const Kids = () => {
    return (
        <Wrapper>
            <div className='my-24'>
                <h3 className='text-2xl font-semibold mb-10'>MENS SHOPPING </h3>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        hoodie.map((product, index) => {
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

export default Kids