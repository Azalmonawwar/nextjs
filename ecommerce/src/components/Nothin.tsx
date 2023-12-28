'use client'
import { getCart } from '@/actions/cart.action'
import { getDataById } from '@/actions/getData'
import { getUser } from '@/actions/user.action'
import { login } from '@/store/authSlice'
import { addItemToCart } from '@/store/cartSlice'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Nothin = () => {
    // const cart = useSelector((state: any) => state.cart)
    const [cart,setCart] = React.useState([])
    const auth = useSelector((state: any) => state.auth)
    const dispatch = useDispatch()
    React.useEffect(() => {
        getUser().then((res) => {
            dispatch(login({ fullName: res?.user?.fullName, email: res?.user?.email, _id: res?.user?._id, isAdmin: res?.user?.isAdmin }))
            getDataById('B07GZSVXM2').then((res) => {
                getCart(auth?.user?._id).then((res) => {
                    console.log(res)
                    setCart(res?.cart?.products)
                })  
            })
        })
    }, [])
    console.log(cart)
  return (
    <></>
  )
}

export default Nothin