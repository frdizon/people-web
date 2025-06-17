// features/api/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  doMutateMultipleDeleteState,
  doTriggerMultipleDelete,
  setRawPersonsList,
} from "./peopleSlice";
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

export type TPostPersonRequestBody = Omit<
  TRawPerson,
  "id" | "created_at" | "user_id"
>;

const PEOPLE_BASE_URL = import.meta.env.VITE_PEOPLE_BASE_URL;

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  tagTypes: ["people"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${PEOPLE_BASE_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authToken.token;
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
      providesTags: ["people"],
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
        } catch {
          // Do nothing
        }
      },
    }),
    postPerson: builder.mutation<void, TPostPersonRequestBody>({
      query: (requestBody) => ({
        url: "person",
        method: "POST",
        body: {
          ...requestBody,
          user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        },
      }),
      invalidatesTags: ["people"],
    }),
    deletePerson: builder.mutation<void, string>({
      query: (personId) => ({
        url: `person/${personId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["people"],
    }),
    deleteMultiplePerson: builder.mutation<string, string[]>({
      queryFn: async (userIds, args) => {
        try {
          await Promise.all(
            userIds.map((personId) =>
              fetch(`${PEOPLE_BASE_URL}/person/${personId}`, {
                method: "DELETE",
                headers: {
                  Authorization: (args.getState() as RootState).authToken.token,
                },
              })
            )
          );
          return { data: "success" };
        } catch {
          return { data: "failed" };
        }
      },
      invalidatesTags: ["people"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(doTriggerMultipleDelete(true));
          await queryFulfilled;
          dispatch(doTriggerMultipleDelete(false));
          dispatch(doMutateMultipleDeleteState({ type: "clear" }));
        } catch {
          // Do nothing
        }
      },
    }),
  }),
});

export const {
  useGetPersonsQuery,
  usePostPersonMutation,
  useDeletePersonMutation,
  useDeleteMultiplePersonMutation,
} = peopleApi;
