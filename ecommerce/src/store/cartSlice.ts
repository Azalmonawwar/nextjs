// cart slice for redux toolkit with quantity and total price
"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: { [key: string]: { id: string; title: string; price: number; quantity: number ,image:string} };
  totalPrice: number;
}


const cart = localStorage.getItem('cart');
const initialState:CartState = cart ? JSON.parse(cart) : { items: {}, totalPrice: 0 };




const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action: PayloadAction<{ id: string; title: string; price: number;image:string; }>) {

            const { id, title, price,image } = action.payload;
            if (state.items[id]) {
                state.items[id].quantity++;
            } else {
                state.items[id] = { id, title, price, quantity: 1 ,image};
            }
            state.totalPrice += price;

            //also add this to local storage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        remove(state, action: PayloadAction<{ id: string; price: number }>) {
        const { id, price } = action.payload;
        if (state.items[id].quantity === 1) {
            delete state.items[id];
        } else {
            state.items[id].quantity--;
        }
        state.totalPrice -= price;
        //also remove this from local storage
        localStorage.setItem('cart', JSON.stringify(state));
        }
        
        
    },
    
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;