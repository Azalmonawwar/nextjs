'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { pincodeSchema } from '@/formSchema/schema';
import React from "react";

type Inputs = {
    pincode: string;
};
const CheckPincode = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Inputs>({
        resolver: yupResolver(pincodeSchema),
        defaultValues: {
            pincode: '',
        },
    });


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
    return (
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
    )
}

export default CheckPincode