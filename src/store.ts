import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./redux/loginApi";
import authTokenReducer from "./redux/authTokenSlice";
import { getPeopleApi } from "./redux/getPeopleApi";
import personsListReducer from "./redux/peopleSlice";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    authToken: authTokenReducer,
    [getPeopleApi.reducerPath]: getPeopleApi.reducer,
    personsList: personsListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      loginApi.middleware,
      getPeopleApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
