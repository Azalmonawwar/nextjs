import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Card from './Card'
import { getDataByManyCategory } from '@/actions/getData'



const Items =async () => {
    const response= await getDataByManyCategory();
    return (
        <section className='container mx-auto  '>
            <div className='p-4 m-2  flex flex-col md:flex-row gap-3 '>
                {
                    response?.map((item:any, index:number) => (
                        <Card key={index} href={`/product/${item.id}`} src={item.image} title={item.title} />
                    ))
                }
            </div>
        </section >
    )
}

export default Items