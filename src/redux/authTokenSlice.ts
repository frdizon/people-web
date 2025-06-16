import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface AuthTokenState {
  token: string;
}

const initialState: AuthTokenState = {
  token: "",
};

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clear: (state) => {
      state.token = "";
    },
  },
});

export const { set, clear } = authTokenSlice.actions;

export const selectAuthToken = (state: RootState) => state.authToken.token;

export default authTokenSlice.reducer;
