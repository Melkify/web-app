import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}
const initialState = {
  isAuthenticated: false,
  isLoading: true,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      // Clear cookies
      Cookies.remove("access", { path: "/" });
      Cookies.remove("refresh", { path: "/" });

      // Clear local storage
      localStorage.clear();

      // Clear session storage
      sessionStorage.clear();
      state.isAuthenticated = false;
    },
    finishInitialLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setAuth, logout, finishInitialLoading } = authSlice.actions;
export default authSlice.reducer;
