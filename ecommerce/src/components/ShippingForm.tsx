'use client'

import { createShipping } from "@/actions/shipping.action";
import { shippingAddressSchema } from "@/formSchema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { use } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";


type Inputs = {
    name: string,
    address: string,
    city: string,
    state: string,
    pincode: string,
    phone: string,
    district: string
}
const ShippingForm = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Inputs>({
        resolver: yupResolver(shippingAddressSchema),
        defaultValues: {
            pincode: '',
        },
    });

    const auth = useSelector((state: any) => state.auth)
    const id = auth?.user?._id
    console.log(id)
    //on submiting form
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response = await createShipping(data,id)
        toast.success(response.message)
        console.log(data,response)
        reset()
    }
    return (
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your Name"
                    {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                    Address
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"

                    rows={5}
                    placeholder="Enter your Address"
                    {...register("address")}
                />
                {errors.address && <p className="text-red-500 text-xs italic">{errors.address.message}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                    City
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="Enter your City"
                    {...register("city")}
                />
                {errors.city && <p className="text-red-500 text-xs italic">{errors.city.message}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                    District
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="Enter your City"
                    {...register("district")}
                />
                {errors.district && <p className="text-red-500 text-xs italic">{errors.district.message}</p>}
            </div>
            <div className='flex gap-4'>
                <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                        State
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="state"
                        type="text"
                        placeholder="Enter your State"
                        {...register("state")}
                    />{errors.state && <p className="text-red-500 text-xs italic">{errors.state.message}</p>}
                </div>
                <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">
                        Pincode
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="pincode"
                        type="text"
                        placeholder="Enter your Pincode"
                        {...register("pincode")}
                    />
                    {errors.pincode && <p className="text-red-500 text-xs italic">{errors.pincode.message}</p>}
                </div>
            </div>
            <div className="mb-4 ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">
                    Phone
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="number"
                    placeholder="Enter your Phone"
                    {...register("phone")}
                />
                {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
            </div>
            <button className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-white hover:bg-gray-900" onClick={handleSubmit(onSubmit)}>Confirm Order</button>
        </form>
    )
}

export default ShippingForm