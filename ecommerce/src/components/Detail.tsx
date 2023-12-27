
import Image from 'next/image';
import { getDataById } from '@/actions/getData';
import RelatedProducts from './RelatedProducts';
import CheckPincode from './CheckPincode';
import AddToCartBtn from './AddToCartBtn';


const Detail = async ({ id }: any) => {

    const data = await getDataById(id)

    return (
        <>
            {
                data?.map((product: any, index) => {
                    return (
                        <div key={index}>
                            <div className='container mx-auto p-4 m-2'>
                                <div className='flex flex-col md:flex-row gap-5'>
                                    <div className='md:w-[40%] md:h-[100%] h-auto w-[90] flex items-center justify-center mx-auto bg-gray-300 '>
                                        <Image src={product.image} alt={product.title} width={600} height={600} className='h-50' />
                                    </div>
                                    <div className='md:w-[40%]  w-full flex flex-col  mx-auto  '>
                                        <h3 className='text-2xl uppercase font-bold'>
                                            {product.title}
                                        </h3>
                                        <p className='text-gray-400 mt-2 md:text-base text-sm'>Rating : {product.rating}</p>
                                        <p className='mt-4 text-2xl font-semibold'>₹ {product.price}</p>
                                        <span className='text-green-500 font-semibold md:text-base text-sm' >inclusive of all taxes</span>
                                        <hr className='mt-4' />

                                        <AddToCartBtn product={product} />
                                        <hr className='mt-5' />
                                        <CheckPincode />
                                    </div>
                                </div>
                            </div>
                            <RelatedProducts category={product.category} department={product.department} />
                        </div>
                    )
                }
                )
            }
        </>
    )

}

export default Detail