import { getDataBySearchQuery } from '@/actions/getData';
import Wrapper from '@/components/Wrapper';
import Product from '@/components/Product';
import React from 'react'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
type Search = {
    search: string;
}

type Param = {
    params: Search
}
const page =async ({params}:Param) => {
    const {search} = params as Search
    const data = await getDataBySearchQuery(search)
    return (
        <Wrapper>
            <div className='my-24'>
                <h3 className={`text-2xl font-semibold mb-10 text-center md:text-left ${rubik.className}`}>MENS SHOPPING </h3>
                <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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

export default page
