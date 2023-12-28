
import { getCart } from '@/actions/cart.action'
import { getDataById } from '@/actions/getData'
import { getUser } from '@/actions/user.action'
import Cart from '@/components/Cart'
import Wrapper from '@/components/Wrapper'
import React from 'react'


type Data = {
    _id: string,
    product: {
        id: string,
        _id: string,
        title: string,
        price: number,
        image: string,

    },
    quantity: number
}
type Datas = Data[]
const CartPage =async () => {
    const user = await getUser()
    const id = user?.user?._id
    const item = await getDataById('B08R5ZM4FS') // this is only for testing purpose might be removed later
    const cart = await getCart(id);
    const data = cart?.cart?.products
    

    //function to calculate total price 
    const totalPrice = () => {
        let total = 0;
        data?.forEach((item: any) => {
            total += item?.product?.price * item.quantity;
        });
        return total;
    };
    const total = totalPrice();
    // console.log(total)

    

    return (
        <Wrapper>
            <Cart data={data} total={total} id={id} />
        </Wrapper>
    )
}

export default CartPage