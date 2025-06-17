import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./redux/loginApi";
import authTokenReducer from "./redux/authTokenSlice";
import { peopleApi } from "./redux/peopleApi";
import personsListReducer from "./redux/peopleSlice";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    authToken: authTokenReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
    personsList: personsListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([loginApi.middleware, peopleApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
