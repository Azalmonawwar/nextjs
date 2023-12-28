'use client';
import React, { useState } from 'react'
import CartItem from './CartItem';
import Link from 'next/link';

const Cart = ({data,total,id}:any) => {
    const [cart,setCart] = useState<any>([])
    React.useEffect(() => {
        setCart(data)
    },[data])
    const shipping = total > 500 ? 0 : 50;
  return (
    <div className="h-auto bg-gray-100 pt-20">
                <h1 className="mb-10 text-2xl font-bold mx-auto max-w-5xl ">SHOPPING CART</h1>
                <div className="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3 h-auto">
                        {
                            id && cart?.length >= 1 ? cart.map((product: any) => {
                                return (
                                    <CartItem key={product._id} product={product.product} item={product.quantity} auth={id} />
                                )
                            }) :
                                <h1 className="text-2xl font-bold h-[400px]">Cart is Empty</h1>
                        }
                        {
                            !id &&
                            <div className="flex gap-4 items-center">
                                <h1 className="text-2xl font-bold">Login to see your cart</h1>
                                <Link className="px-2 py-2 md:px-4 md:py-2 md:text-base text-sm  bg-black text-white rounded-md " href={"/login"}>Login</Link>
                            </div>

                        }
                    </div>
                    {
                        cart?.length >= 1 &&
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">₹ {total}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-gray-700">₹ {shipping}</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">₹ {total + shipping}</p>
                                    <p className="text-sm text-gray-700">including Taxes</p>
                                </div>
                            </div>
                            <button className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-white hover:bg-gray-900">Check out</button>
                        </div>
                    }
                </div>
            </div>
    
  )
}

export default Cart