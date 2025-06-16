import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./redux/loginApi";
import authTokenReducer from "./redux/authTokenSlice";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    authToken: authTokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
