'use client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { pincodeSchema } from '@/formSchema/schema';
import { add } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import { getDataById } from '@/actions/getData';
import RelatedProducts from './RelatedProducts';
import mongoose, { mongo } from 'mongoose';


type Inputs = {
    pincode: string;
}

type Product = {
    _id: mongoose.Types.ObjectId,
    id: string,
    title: string,
    price: number,
    rating: number,
    image: string,
    category: string,
    department: string,
}

const Detail = ({ id }: any) => {
    //handling forms for pincode
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Inputs>({
        resolver: yupResolver(pincodeSchema),
        defaultValues: {
            pincode: '',
        },
    });


    //fetching data from database
    const [data, setData] = React.useState<any>([])
    const [loading, setLoading] = React.useState<boolean>(false)
    useEffect(() => {
        getDataById(id).then((res) => {
            setLoading(true)
            setData(res)
        }).then(() => {
            setLoading(false)
        })
    }, [])


    //check if pincode is available
    const checkAvailabitly = async (pincode: string) => {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        const data = await res.json()
        if (data[0].Status === 'Success') {
            return true
        }
        return false
    }

    //message state for pincode
    const [message, setMessage] = React.useState({
        message: '',
        color: ''
    })

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
    const dispatch = useDispatch();
    const addToCart = (id: string, title: string, price: number, image: string) => {
        console.log('added to cart');
        dispatch(add({ id: id, title: title, price: price, image: image }))
    }


    //if loading then show loading
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-2xl font-bold'>Loading...</h1>
            </div>
        )
    }

    return (
        <>
            {
                data?.map((product: Product) => {
                    return (
                        <>
                            <div key={product.id} className='container mx-auto p-4 m-2'>
                                <div className='flex flex-col md:flex-row gap-5'>
                                    <div className='md:w-[40%] md:h-[100%] h-auto w-[90] flex items-center justify-center mx-auto bg-gray-300 '>
                                        <Image src={product.image} alt={product.title} width={600} height={600} className='h-50' />
                                    </div>
                                    <div className='md:w-[40%]  w-full flex flex-col  mx-auto  '>
                                        <h3 className='text-2xl uppercase font-bold'>
                                            {product.title}
                                        </h3>
                                        <p className='text-gray-400 mt-2 md:text-base text-sm'>Rating : {product.rating}</p>
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
                            <RelatedProducts category={product.category} department={product.department} />
                        </>
                    )
                }
                )
            }
        </>
    )

}

export default Detail