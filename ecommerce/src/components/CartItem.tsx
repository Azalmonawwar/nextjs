'use client'
import { addToCartDb, getCart, removeFromCart, removeProductFromCart } from '@/actions/cart.action';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart, remove, removeItem,initCart } from '@/store/cartSlice';
import { getDataById } from '@/actions/getData';


const CartItem = ({ product,cartI, item, auth }: any) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = React.useState(item);


    //setting product title to limit the length of the title in 30 characters
    const title = product?.title?.length > 30 ? product?.title?.slice(0, 30) + '...' : product?.title;

    console.log(cartI)

    const handleIncrement = async () => {
        if (quantity === 10) return;
        setQuantity((prev: any) => prev + 1)
        const data = await addToCartDb(auth, product?._id)
        dispatch(addToCart(cartI))
        
            // getCart(auth?.user?._id).then((res) => {
            //     dispatch(initCart(res?.cart?.products))
            // })  
        
        router.refresh()
        // console.log(data)
    };


    const handleDecrement = async () => {
        setQuantity((prev: any) => prev - 1)
        const data = await removeFromCart(auth, product?._id);
        dispatch(remove(cartI))
        
            // getCart(auth?.user?._id).then((res) => {
            //     dispatch(initCart(res?.cart?.products))
            // })  
       
        router.refresh()
    };



    //function to delete item from cart   i will do this later
    const deleteItem =async () => {
        const data = await removeProductFromCart(auth,product?._id);
        dispatch(removeItem(cartI))
    }



    const handleChange = (e: any) => {
        setQuantity(e.target.value)
    }
    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <div className='flex gap-4'>
                <Link href={`/product/${product?.id}`}><Image src={product?.image} alt={product?.id} width={200} height={200} className=" rounded-lg object-cover sm:w-20 md:w-40" /></Link>
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                </div>
            </div>
            <div className="ml-auto">
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleDecrement()}> - </span>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" onChange={handleChange} value={quantity} min="1" />
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleIncrement()}> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm">₹ {product?.price * quantity}</p>
                        <svg onClick={() => deleteItem()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem