// features/api/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { clear, set } from "./authTokenSlice";

interface TLoginResponseBody {
  authToken: string;
}

interface TLoginRequestBody {
  email: string;
  password: string;
}

const AUTENTHICATION_BASE_URL = import.meta.env.VITE_AUTENTHICATION_BASE_URL;

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${AUTENTHICATION_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    login: builder.query<TLoginResponseBody, TLoginRequestBody>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(set(data.authToken));
        } catch {
          dispatch(clear());
        }
      },
    }),
  }),
});

export const { useLazyLoginQuery } = loginApi;
