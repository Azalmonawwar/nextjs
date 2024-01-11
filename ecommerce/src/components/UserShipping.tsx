'use client';
import { generateOrder } from '@/actions/order.action';
import React from 'react'
import { useSelector } from 'react-redux';
const UserShipping = ({data,id}:any) => {
    const {cartItems,totalPrice} = useSelector((state:any) => state.cart)
    let product:any = []

    cartItems.map((item:any) => {
        product.push(item?.product?._id)
    })

    
        
    // const submit =async (addressId:any) => {
    //     const order = {
    //         user:id,
    //         orderItems:product,
    //         shippingAddress:addressId,
    //         paymentMethod:'COD',
    //         itemsPrice:totalPrice,
    //         isPaid:false,
    //         isDelivered:false
    //     }
    //     const response = await generateOrder(order);
    //     console.log(response)
    // }
  return (
    <>
        {
                            data.map((item:any) => {
                                return (
                                    <div key={item._id}> 
                                        <div className="border-[1px] border-gray-300 p-5 m-1 hover:scale-110 transition hover:bg-gray-200 rounded-md cursor-pointer">
                                            <p className='text-lg font-bold capitalize'>{item.name}</p>
                                            <p className='text-sm '>{item.address}</p>
                                            <p className='text-sm '>{item.phone}</p>
                                            <p className='text-sm '>{item.city}</p>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        }
    </>
  )
}

export default UserShipping