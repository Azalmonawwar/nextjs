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
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">₹ {455}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Shipping</p>
                            <p className="text-gray-700">₹ {455}</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">₹ {4555}</p>
                                <p className="text-sm text-gray-700">including Taxes</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Checkout