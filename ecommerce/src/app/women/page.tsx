import { getData } from '@/actions/getData'
import Product from '@/components/Product'
import Wrapper from '@/components/Wrapper'
import { Rubik } from 'next/font/google'
const rubik = Rubik({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })



const Women = async () => {

    const data = await getData('shirt', 'women');
    return (
        <Wrapper>
            <div className='md:my-24 my-10'>
                <h3 className={`text-2xl font-semibold mb-10 text-center md:text-left ${rubik.className}`}>WOMENS SHOPPING </h3>
                <div className='grid md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        data?.map((product: any) => {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        })
                    }
                </div>
            </div>

        </Wrapper>
    )
}

export default Women