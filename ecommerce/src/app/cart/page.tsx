
import CartItem from '@/components/CartItem';
import Wrapper from '@/components/Wrapper'
import React from 'react'
import Link from 'next/link';
import { getCart } from '@/actions/cart.action';
import { getDataById } from '@/actions/getData';
import {getUser} from '@/actions/user.action'

const Cart = async() => {
    const user = await getUser();
    const id = user?.user?._id;
    const signle = await getDataById('B095WQXSWQ');
    const  data  = await getCart(id);
    const cart = data?.cart?.products;

    const total = cart?.reduce((acc: any, item: any) => acc + item.product.price * item.quantity, 0);
    //calculating shipping charges
    const shipping = total > 500 ? 0 : 50;

    return (
        <Wrapper>
            <div className="h-auto bg-gray-100 pt-20">
                <h1 className="mb-10 text-2xl font-bold mx-auto max-w-5xl ">SHOPPING CART</h1>
                <div className="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3 h-auto">
                        {
                             cart?.map((product: any) => {
                                return (
                                    <CartItem key={product._id} product={product.product} cartI={product} item={product.quantity} auth={id} />
                                )
                            }) 
                        }
                       
                    </div>
                    {
                        cart?.length >= 1 &&
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 flex flex-col">
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
                            <Link href={'/checkout'} className="mt-6 w-full rounded-md text-center py-2 bg-black  font-medium text-white hover:bg-gray-900">Check out</Link>
                        </div>
                    }
                </div>
            </div>
        </Wrapper>
        // <>hh</>
    )
}

export default Cart