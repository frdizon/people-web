// features/api/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setRawPersonsList } from "./peopleSlice";
import type { RootState } from "../store";

export interface TRawPerson {
  id: string;
  created_at: Date;
  first_name: string;
  last_name: string;
  preferred_name: string;
  date_of_birth: string;
  gender: string;
  marital_status: string;
  mobile_number: string;
  home_email: string;
  office_email: string;
  home_address: string;
  office_address: string;
  user_id: string;
}

export interface TPerson
  extends Omit<TRawPerson, "first_name" | "last_name" | "preferred_name"> {
  name: string;
}

const PEOPLE_BASE_URL = import.meta.env.VITE_PEOPLE_BASE_URL;

export const getPeopleApi = createApi({
  reducerPath: "getPeopleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${PEOPLE_BASE_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authToken.token; // adjust based on your store structure
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPersons: builder.query<TRawPerson[], void>({
      query: () => ({
        url: "person",
        method: "GET",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setRawPersonsList(
              data.map((rawPerson) => ({
                ...rawPerson,
                name: `${rawPerson.first_name} ${rawPerson.last_name} (${rawPerson.preferred_name})`,
              }))
            )
          );
        } catch (_) {
          //
        }
      },
    }),
  }),
});

export const { useGetPersonsQuery } = getPeopleApi;
