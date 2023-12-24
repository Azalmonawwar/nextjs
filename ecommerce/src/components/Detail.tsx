'use client'
import Image from 'next/image';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { pincodeSchema } from '@/formSchema/schema';
import { add } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


type Inputs = {
    pincode: string;
}


const Detail = ({ id }: any) => {
    //handling forms
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Inputs>({
        resolver: yupResolver(pincodeSchema),
        defaultValues: {
            pincode: '',
        },
    });

    const dispatch = useDispatch();

    //message state for pincode
    const [message, setMessage] = React.useState({
        message: '',
        color: ''
    })

    //fetching product
    const fetchProduct = async () => {
        const res = await axios.get(`/api/products/get?id=${id}`)
        return res.data
    }

    const { isPending, error, data } = useQuery({
        queryKey: ['product'],
        queryFn: fetchProduct,

    })

    //check if pincode is available
    const checkAvailabitly = async (id: string) => {
        const res = await fetch(`https://api.postalpincode.in/pincode/${id}`)
        const data = await res.json()
        if (data[0].Status === 'Success') {
            return true
        }
        return false
    }

    //on submiting form
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await checkAvailabitly(data.pincode)
        if (res) {
            setMessage({
                message: 'Delivery Available',
                color: 'text-green-400'
            })
        }
        else {
            setMessage({
                message: 'Not Available',
                color: 'text-red-400'
            })
        }
        reset()
    }

    //add to cart
    const addToCart = (id: string, title: string, price: number, image: string) => {
        console.log('added to cart');
        dispatch(add({ id: id, title: title, price: price, image: image }))
    }

    if (!isPending) {
        return (
            <>
                {
                    data.products.map((product: any) => {
                        return (
                            <div className='container mx-auto p-4 m-2'>
                                <div className='flex flex-col md:flex-row gap-5'>
                                    <div className='md:w-[40%] md:h-[100%] h-auto w-[90] flex items-center justify-center mx-auto bg-gray-300 '>
                                        <Image src={product.image} alt={product.title} width={600} height={600} className='h-50' />
                                    </div>
                                    <div className='md:w-[40%]  w-full flex flex-col  mx-auto  '>
                                        <h3 className='text-2xl uppercase font-bold'>
                                            {product.title}
                                        </h3>
                                        <p className='text-gray-400 mt-2 md:text-base text-sm'>Rating : {product.rating}</p>
                                        {/* <p className='text-gray-400 mt-2 md:text-base text-sm'>{product.product_description.slice(0, 300)}</p> */}
                                        <p className='mt-4 text-2xl font-semibold'>₹ {product.price}</p>
                                        <span className='text-green-500 font-semibold md:text-base text-sm' >inclusive of all taxes</span>
                                        <hr className='mt-4' />

                                        <button className='bg-black text-white rounded-lg p-2 mt-4' onClick={() => addToCart(product.id, product.title, product.price, product.image)}>ADD TO CART</button>
                                        <hr className='mt-5' />
                                        <div className='flex flex-col '>
                                            <h3 className='text-base font-bold mt-4 tracking-tight'>DELIVERY OPTIONS</h3>
                                            <div className='flex flex-col gap-1 justify-between '>
                                                <div className='flex md:flex-row items-center gap-2'>
                                                    <input type="text" id="pincode" {...register("pincode")} placeholder='Enter Pincode' className='my-4 py-2 px-4 w-[75%] md:w-full outline-none border-[1px] border-gray-100 bg-gray-200 focus:bg-white transition rounded-md' />
                                                    <button onClick={handleSubmit(onSubmit)} className='md:mr-auto bg-black text-white py-2 px-4 rounded-md  '>Check</button>
                                                </div>
                                                {
                                                    (errors?.pincode) &&
                                                    <p className='text-red-500 text-sm'>
                                                        {errors?.pincode?.message}
                                                    </p>
                                                }
                                                {
                                                    //only available if pincode is checked
                                                    message &&
                                                    <div className='flex  gap-2'>
                                                        <p className={`${message.color} text-sm `}>{message?.message}</p>
                                                    </div>
                                                }
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
                    )
                }

            </>
        )
    }
}

export default Detail