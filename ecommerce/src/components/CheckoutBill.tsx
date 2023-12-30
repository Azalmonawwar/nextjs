'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const CheckoutBill = () => {
    const cart = useSelector((state: any) => state.cart)
    const totalPrice = cart.totalPrice;
    const shipping = totalPrice > 1000 ? 0 : 50;
    console.log(totalPrice)
  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">₹ {totalPrice}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Shipping</p>
                            <p className="text-gray-700">₹ {shipping}</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">₹ {totalPrice+shipping}</p>
                                <p className="text-sm text-gray-700">including Taxes</p>
                            </div>
                        </div>

                    </div>
    
  )
}

export default CheckoutBill