'use client'
import Detail from '@/components/Detail';
import Wrapper from '@/components/Wrapper';
import { useParams, } from 'next/navigation'
import React from 'react'
type Slug = {
    slug: string;
}
const page = () => {
    const param: Slug = useParams();
    console.log(param.slug);

    return (
        <Wrapper>
            <div className='w-full flex items-center h-[40px]'>
                <p className='text-gray-400 text-left'>Home/Product/{param.slug.split("-")[0]}</p>
            </div>
            <Detail title={param.slug} />
        </Wrapper>
    )
}

export default page