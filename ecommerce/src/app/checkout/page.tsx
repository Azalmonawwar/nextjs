import { getShipping } from '@/actions/shipping.action'
import { getUser } from '@/actions/user.action'
import CheckoutBill from '@/components/CheckoutBill'
import ShippingForm from '@/components/ShippingForm'
import UserShipping from '@/components/UserShipping'
import Wrapper from '@/components/Wrapper'
import React from 'react'


const Checkout =async () => {
    const user = await getUser();
    const id = user?.user?._id
    // console.log(id)
    const{data} = await getShipping(id) 
    // console.log(data.data[0].name)
    return (
        <Wrapper>
            <div className="h-auto bg-gray-100 pt-20">
                <h1 className="mb-10 text-2xl font-bold mx-auto max-w-5xl  ml-5 ">CHECKOUT</h1>
                <div className="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3 h-auto">
                        <h3 className='text-xl font-semibold mb-10'>Shipping Details </h3>
                        <UserShipping data={data} id={id}/>
                        <ShippingForm />
                    </div>
                    <CheckoutBill />
                </div>
            </div>
        </Wrapper>
    )
}

export default Checkout