import React from 'react'
import Image from 'next/image'
import Products from './Products';

const SearchItems = () => {
    const isFilter = true;
    return (
        <section className='lg:flex lg:gap-4' >
            {/* Sort and filter button  */}
            <div className="md:hidden w-full bg-gray h-[60px] px-20 bg-white border-[1px] border-gray-200 flex items-center justify-between">
                <div className='flex   items-center justify-center'>
                    <Image src={'/sort.png'} alt='sort' width={24} height={24} />
                    <button className='px-2 py-1 text-sm font-bold'>Sort</button >
                </div>
                <div className='h-[40px] w-[1px] bg-gray-200 ' />
                <div className='flex  relative items-center justify-center'>
                    <Image src={'/filter.png'} alt='sort' width={24} height={24} />
                    <button className='px-2 py-1 text-sm font-bold'>Filter</button >
                    {
                        isFilter &&
                        <div className='w-[10px] h-[10px] absolute bg-red-600 rounded-full top-0 left-0'>
                        </div>
                    }
                </div>
            </div>

            {/* SideFilter Menu for desktop  */}
            <div className='bg-gray-300 w-[20%] p-5 h-auto md:flex flex-col m-4 rounded-lg hidden'>
                {/* for sort  */}
                <div className='mb-5'>
                    <p className='text-base mb-3 flex-center gap-2  font-semibold '>
                        <Image src={'/sort.png'} height={24} width={24} alt='sort' />
                        <span>Sort</span>
                    </p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 text-sm '>
                            <input type='radio' name="sort" id="popular" value={'popular'} className='focus:border-blue-300 border-none focus:border-[1px] active:bg-blue' />
                            <label htmlFor="popular">Popular</label>
                        </div>
                        <div className='flex gap-2 text-sm '>
                            <input type="radio" name="sort" id="high" value={'high'} className='focus:border-blue-300 border-none focus:border-[1px] active:bg-blue' />
                            <label htmlFor="popular">HIgh to Low </label>
                        </div>
                        <div className='flex gap-2 text-sm '>
                            <input type="radio" name="sort" id="low" value={'low'} className='focus:border-blue-300 border-none focus:border-[1px] active:bg-blue' />
                            <label htmlFor="popular">Low to High</label>
                        </div>
                        <div className='flex gap-2 text-sm '>
                            <input type="radio" name="sort" id="new" value={'new'} className='focus:border-blue-300 border-none focus:border-[1px] active:bg-blue' />
                            <label htmlFor="popular">Newest</label>
                        </div>
                    </div>
                </div>
                {/* for filter  */}
                <div>
                    <p className='text-base mb-3 flex-center gap-2 font-semibold '>
                        <Image src={'/filter.png'} height={24} width={24} alt='filter' />
                        <span>Filters</span>
                    </p>
                </div>
            </div>
            {/* Product View  */}
            <div className='pt-3 px-1 md:px-2 md:py-5 lg:w-[80%]'>
                <Products />
            </div>
        </section >
    )
}

export default SearchItems