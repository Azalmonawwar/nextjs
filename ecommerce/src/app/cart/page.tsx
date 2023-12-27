'use client'
import CartItem from '@/components/CartItem';
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { getCart } from '@/actions/cart.action';

type Data = {
    _id: string,
    product: {
        id: string,
        _id: string,
        title: string,
        price: number,
        image: string
    },
    quantity: number
}
type Datas = Data[]
const Cart = () => {
    const auth = useSelector((state: any) => state.auth);

    //state to store cart data
    const [data, setData] = React.useState<Datas>([
        {
            _id: '',
            product: {
                id: '',
                _id: '',
                title: '',
                price: 0,
                image: ''
            },
            quantity: 0
        }
    ])


    React.useEffect(() => {
        //if user is authenticated then get the cart data from the server
        if (auth.isAuthenticated) {
            getCart(auth.user._id).then((res) => {
                setData(res?.cart?.products)
            })
        }

    }, [auth.isAuthenticated, data[0]?._id])

    //getting user id
    const id = auth.user._id

    //function to calculate total price 
    const totalPrice = () => {
        let total = 0;
        data?.forEach((item: any) => {
            total += item.product.price * item.quantity;
        });
        return total;
    };
    const total = totalPrice();

    //calculating shipping charges
    const shipping = total > 500 ? 0 : 50;

    return (
        <Wrapper>
            <div className="h-auto bg-gray-100 pt-20">
                <h1 className="mb-10 text-2xl font-bold mx-auto max-w-5xl ">SHOPPING CART</h1>
                <div className="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3 h-auto">
                        {
                            auth.isAuthenticated && data.length >= 1 ? data.map((product: any) => {
                                return (
                                    <CartItem key={product._id} product={product.product} item={product.quantity} auth={id} />
                                )
                            }) :
                                <h1 className="text-2xl font-bold h-[400px]">Cart is Empty</h1>
                        }
                        {
                            !auth.isAuthenticated &&
                            <div className="flex gap-4 items-center">
                                <h1 className="text-2xl font-bold">Login to see your cart</h1>
                                <Link className="px-2 py-2 md:px-4 md:py-2 md:text-base text-sm  bg-black text-white rounded-md " href={"/login"}>Login</Link>
                            </div>

                        }
                    </div>
                    {
                        data.length >= 1 &&
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
        </Wrapper>
    )
}

export default Cart