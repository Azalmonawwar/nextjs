import { getDataBySearchQuery, getLengthOfSearchQuery } from '@/actions/getData';
import Wrapper from '@/components/Wrapper';
import Product from '@/components/Product';
import React from 'react'
import { Rubik } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';
// import Pagination from '@mui/material/Pagination';

const rubik = Rubik({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
type Search = {
    search: string;
}


const page = async ({ params, searchParams }) => {
    const page = parseInt(searchParams.page)
    const { search } = params as Search
    const length = await getLengthOfSearchQuery(search)
    const data = await getDataBySearchQuery(search, page, 20)
    const NoOfPage = Math.ceil(length[0]?.count / 20)
    let arr: number[] = []
    if(NoOfPage){
        for (let i = page; i <= page+3; i++) {
            if (i > NoOfPage) {
                break
            }
            arr.push(i)
        }
    }
    return (
        <Wrapper>
            <div className='my-24'>
                <h3 className={`text-2xl font-semibold mb-10 text-center md:text-left ${rubik.className}`}>Showing results of {search} </h3>
                <div className='grid md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        data.length !== 0 ? data?.map((product: any) => {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        }): <h3 className='text-2xl font-semibold mb-10 text-center md:text-left'>No results found</h3>
                    }
                </div>
                <div className='flex justify-center mt-10'>

                    {

                        page > 1 && <Link href={`/search/${search}?page=${page - 1}`} ><Image src='/next.png' alt='next' height={24} width={24} className='transform scale-[-1] mr-10'/></Link>
                    }
                    {
                        arr.map((item, index) => {
                            return (
                                <Link key={index} href={`/search/${search}?page=${item}`} className={`mx-2 px-2 py-0 rounded-full ${item == page ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-700 hover:text-white`}>{item}</Link>
                            )
                        }

                        )
                    }
                    {
                        page < NoOfPage && <Link href={`/search/${search}?page=${page +1 }`} ><Image src='/next.png' alt='next' height={24} width={24} className='ml-10'/></Link>
                        
                    }
                </div>
            </div>

        </Wrapper>
    )
}

export default page
