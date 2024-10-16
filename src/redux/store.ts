import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, apiSliceWithoutReauth } from "./services/apiSlice";
import authReducer from "./features/authSlice";
export const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      [apiSliceWithoutReauth.reducerPath]: apiSliceWithoutReauth.reducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(apiSlice.middleware)
        .concat(apiSliceWithoutReauth.middleware),
    devTools: import.meta.env.VITE_APP_DEBUG,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
