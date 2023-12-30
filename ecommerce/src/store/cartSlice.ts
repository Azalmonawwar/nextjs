import CartItem from "@/components/CartItem";
import {createSlice} from "@reduxjs/toolkit";



type InitialState = {
  cartItems: any[];
  totalPrice: number;
};



const initialState:InitialState = {
  cartItems: [],
  totalPrice : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initCart(state, action) {
      state.cartItems = action.payload;
      state.totalPrice = state.cartItems?.reduce((acc, item:any) => acc + item.product?.price * item.quantity, 0);
    },
    addToCart(state, action:any) {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product.id === item.product.id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          {
            if (x.product.id === existItem.product.id) {
              return {...x, quantity: x.quantity + 1}
            } else {
              return x;
            }
          }
        )
      } else {
        state.cartItems.push(item);
      }
      state.totalPrice = state.cartItems?.reduce((acc, item:any) => acc + item?.product?.price * item?.quantity, 0);
    },
    remove(state, action) {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product.id === item.product.id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          {
            if (x.product.id === existItem.product.id) {
              if(x.quantity === 1){
                return null
              }
              return {...x, quantity: x.quantity - 1}
            } else {
              return x;
            }
          }
        ).filter((x) => x !== null)
      } else {
        state.cartItems.push(item);
      }
      state.totalPrice = state.cartItems.reduce((acc, item:any) => acc + item?.product?.price * item?.quantity, 0);
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (x) => x.product.id !== action.payload.product.id
      );
      state.totalPrice = state.cartItems.reduce((acc, item) => acc + item.product?.price * item.quantity, 0);
    },
  },
});

export const { addToCart, removeItem ,initCart,remove} = cartSlice.actions;
export default cartSlice.reducer;