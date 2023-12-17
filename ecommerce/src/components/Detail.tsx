'use client'
import Image from 'next/image';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { add } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import { active_wear_for_women, hoodie, jeans, kurtas, leggins, shirts_mens, top_womens, shoes, watch, women_shirts } from '@/data';

// merge all elements of array into one array
const products = [...active_wear_for_women, ...hoodie, ...jeans, ...kurtas, ...leggins, ...shirts_mens, ...top_womens, ...shoes, ...watch, ...women_shirts]


type Inputs = {
    pincode: number;
}

const Detail = ({ id }: any) => {
    const dispatch = useDispatch();
    const product: any = products.find((e: any) => e.product_id === id);

    if (!product) {
        return <div>loading</div>
    }

    //if price range is not available, set it to 0 and get first price in array
    if (!product?.price_range) {
        product.price_range = [300]
    }

    //handling forms
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    //check if pincode is available
    const checkAvailabitly = async () => {
        // console.log('checking')
    }

    //on submiting form
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await checkAvailabitly()
        console.log(data);
    }

    //add to cart
    const addToCart = (id: string, title: string, price: number, image: string) => {
        console.log('added to cart');
        dispatch(add({ id: id, title: title, price: price, image: image }))
    }


    return (

        <div className='container mx-auto p-4 m-2'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='md:w-[40%] md:h-[100%] h-auto w-[90] flex items-center justify-center mx-auto bg-gray-300 '>
                    <Image src={product.product_photos[0]} alt={product.product_title} width={600} height={600} className='h-50' />
                </div>
                <div className='md:w-[40%]  w-full flex flex-col  mx-auto  '>
                    <h3 className='text-2xl uppercase font-bold'>
                        {product.product_title}
                    </h3>
                    <p className='text-gray-400 mt-2 md:text-base text-sm'>{product.product_description}</p>
                    <p className='mt-4 text-2xl font-semibold'>₹ {product.price_range[0]}</p>
                    <span className='text-green-500 font-semibold md:text-base text-sm' >inclusive of all taxes</span>
                    <hr className='mt-4' />
                    {product?.product_attributes.size &&
                        <div className='flex md:flex-col justify-between md:justify-start mt-4'>
                            <p className='md:text-xl text-base mb-2'>SELECT SIZE</p>
                            <select className='md:w-[20%] bg-gray-200 outline-none border-[1px] border-gray-100 focus:bg-white rounded-lg md:p-2 px-2 py-1'>
                                {
                                    product?.product_attributes.size.map((e: any) => {
                                        return <option key={e}>{e}</option>
                                    })
                                }
                            </select>
                        </div>
                    }

                    <button className='bg-black text-white rounded-lg p-2 mt-4' onClick={() => addToCart(product.product_id, product.product_title, product.price_range[0], product.product_photos[0])}>ADD TO CART</button>
                    <hr className='mt-5' />
                    <div className='flex flex-col '>
                        <h3 className='text-base font-bold mt-4 tracking-tight'>DELIVERY OPTIONS</h3>
                        <div className='flex flex-col gap-1 justify-between '>
                            <div className='flex md:flex-row items-center gap-2'>
                                <input type="number" id="pincode" {...register("pincode")} placeholder='Enter Pincode' className='my-4 py-2 px-4 w-[75%] md:w-full outline-none border-[1px] border-gray-100 bg-gray-200 focus:bg-white transition rounded-md' />
                                <button onClick={handleSubmit(onSubmit)} className='md:mr-auto bg-black text-white py-2 px-4 rounded-md  '>Check</button>
                            </div>
                            <p className='md:text-sm text-xs text-gray-400'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                        </div>
                        <div className='md:text-sm text-xs text-gray-500 mt-4 flex flex-col gap-2'>
                            <p>100% Original Products</p>
                            <p>Pay on delivery might be available</p>
                            <p>Easy 14 days returns and exchanges</p>
                            <p>Try & Buy might be available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Detail