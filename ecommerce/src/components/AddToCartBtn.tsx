'use client'
import { addToCartDb } from '@/actions/cart.action';

import { Schema } from 'mongoose';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const AddToCartBtn = ({ product }: any) => {
    const router = useRouter();
    const auth = useSelector((state: any) => state.auth)
    // console.log(auth)
    //add to cart
    const dispatch = useDispatch();
    const addToCart = async (id: string, title: string, price: number, image: string, _id: Schema.Types.ObjectId) => {
        if (!auth.isAuthenticated) return router.push('/login')
        const addProductToDatabase = await addToCartDb(auth.user._id, _id)
        console.log(addProductToDatabase)
        // dispatch(add({ id: id, title: title, price: price, image: image }))
    }
    return (
        <button className='bg-black text-white rounded-lg p-2 mt-4' onClick={() => addToCart(product.id, product.title, product.price, product.image, product._id)}>ADD TO CART</button>
    )
}

export default AddToCartBtn