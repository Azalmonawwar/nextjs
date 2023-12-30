import CheckoutBill from '@/components/CheckoutBill'
import ShippingForm from '@/components/ShippingForm'
import Wrapper from '@/components/Wrapper'
import React from 'react'


const Checkout = () => {
    
    return (
        <Wrapper>
            <div className="h-auto bg-gray-100 pt-20">
                <h1 className="mb-10 text-2xl font-bold mx-auto max-w-5xl  ml-5 ">CHECKOUT</h1>
                <div className="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3 h-auto">
                        <h3 className='text-xl font-semibold mb-10'>Shipping Details</h3>
                        <ShippingForm />
                    </div>
                    <CheckoutBill />
                </div>
            </div>
        </Wrapper>
    )
}

export default Checkout