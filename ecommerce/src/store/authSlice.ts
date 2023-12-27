// auth slice for redux toolkit
"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    fullName: string;
    email: string;
    _id: string;
  };
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    fullName: "",
    email: "",
    _id: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ fullName: string; email: string; _id: string }>
    ) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = {
        fullName: "",
        email: "",
        _id: "",
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
