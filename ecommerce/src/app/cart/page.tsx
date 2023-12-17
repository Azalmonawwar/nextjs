'use client'
import CartItem from '@/components/CartItem';
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state: any) => state.cart);
    const { items } = cart;
    const shipping = cart.totalPrice > 300 ? 40 : 0;
    const length = Object.keys(items).length;
    return (
        <Wrapper>
            <div className="h-auto bg-gray-100 pt-20">
                <h1 className="mb-10 text-2xl font-bold mx-auto max-w-5xl ">SHOPPING CART</h1>
                <div className="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3 h-auto">
                        {length > 0 ?
                            Object.keys(items).map((product) => (
                                <CartItem key={product} product={items[product]} />
                            )) :
                            <p className="text-center text-2xl">No product in cart</p>
                        }
                    </div>
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">₹ {cart.totalPrice}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Shipping</p>
                            <p className="text-gray-700">₹ {shipping}</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">₹ {cart.totalPrice + shipping}</p>
                                <p className="text-sm text-gray-700">including Taxes</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Cart