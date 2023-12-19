'use client'
import { add, remove } from '@/store/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';
const CartItem = ({ product }: any) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = React.useState(product.quantity);
    console.log(product.quantity)
    //setting product title to limit the length of the title in 30 characters
    const title = product.title.length > 30 ? product.title.slice(0, 30) + '...' : product.title;

    const handleIncrement = (id: string, title: string, price: number, image: string) => {
        if (quantity === 10) return;
        setQuantity((prev: any) => prev + 1)
        dispatch(add({ id: id, title: title, price: price, image: image }))
    };

    const handleDecrement = (id: string, price: number) => {
        if (quantity === 1) return;
        setQuantity((prev: any) => prev - 1)
        dispatch(remove({ id: id, price: price }))
    };

    const deleteItem = (id: string, price: number) => {
        dispatch(remove({ id: id, price: price }))
    }



    const handleChange = (e: any) => {
        setQuantity(e.target.value)
    }
    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <div className='flex gap-4'>
                <Link href={`/product/${product.id}`}><Image src={product.image} alt={product.id} width={200} height={200} className=" rounded-lg object-cover sm:w-20 md:w-40" /></Link>
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                </div>
            </div>
            <div className="ml-auto">
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleDecrement(product.id, product.price)}> - </span>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" onChange={handleChange} value={quantity} min="1" />
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleIncrement(product.id, product.title, product.price, product.image)}> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm">$ {product.price * quantity}</p>
                        <svg onClick={() => deleteItem(product.id, product.price)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CartItem