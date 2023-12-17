import Detail from '@/components/Detail';
import Wrapper from '@/components/Wrapper';
import React from 'react'
type Slug = {
    slug: string;
}
const page = ({ params }: any) => {
    const { slug } = params as Slug;

    return (
        <Wrapper>
            <div className='w-full flex items-center h-[40px]'>
                <p className='text-gray-400 text-left'>Home/Product/{slug}</p>
            </div>
            <Detail id={slug} />
        </Wrapper>
    )
}

export default page