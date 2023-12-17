// cart slice for redux toolkit with quantity and total price
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: { [key: string]: { id: string; title: string; price: number; quantity: number ,image:string} };
  totalPrice: number;
}

const initialState: CartState = {
  items: {},
  totalPrice: 0,
};

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
        },
        remove(state, action: PayloadAction<{ id: string; price: number }>) {
        const { id, price } = action.payload;
        if (state.items[id].quantity === 1) {
            delete state.items[id];
        } else {
            state.items[id].quantity--;
        }
        state.totalPrice -= price;
        },
    },
    
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;