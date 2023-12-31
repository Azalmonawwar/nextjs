'use client'
import CartItem from '@/components/CartItem';
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { getCart } from '@/actions/cart.action';
import { getDataById } from '@/actions/getData';
import { initCart } from '@/store/cartSlice';

const Cart = () => {
    

    const auth = useSelector((state: any) => state.auth);
    const cart = useSelector((state: any) => state.cart);
    //state to store cart data
    const [data, setData] = React.useState<any>([])
    const dispatch = useDispatch()

    React.useEffect(() => {
        //if user is authenticated then get the cart data from the server
        if (auth.isAuthenticated) {
            getDataById('B07GZSVXM2').then((res) => {
                // console.log(res)
                getCart(auth?.user?._id).then((res) => {
                    setData(res?.cart?.products)
                    dispatch(initCart(res?.cart?.products))
                })  
            })
        }

    }, [auth.isAuthenticated])

    //getting user id
    const id = auth.user._id    

    const total = cart.totalPrice;
    //calculating shipping charges
    const shipping = total > 500 ? 0 : 50;

    return (
        <Wrapper>
            <div className="h-auto bg-gray-100 pt-20">
                <h1 className="mb-10 text-2xl font-bold mx-auto max-w-5xl ">SHOPPING CART</h1>
                <div className="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3 h-auto">
                        {
                            auth.isAuthenticated && cart?.cartItems?.length >= 1 ? data.map((product: any) => {
                                return (
                                    <CartItem key={product._id} product={product.product} cartI={product} item={product.quantity} auth={id} />
                                )
                            }) :
                                <h1 className="text-2xl font-bold ">Cart is Empty</h1>
                        }
                       
                    </div>
                    {
                        data?.length >= 1 &&
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
    )
}

export default Cart