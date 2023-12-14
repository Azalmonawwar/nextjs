'use client'
import Wrapper from '@/components/Wrapper';
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams();

    return (
        <Wrapper>
            {params.slug}
        </Wrapper>
    )
}

export default page