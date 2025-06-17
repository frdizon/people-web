import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TPerson } from "./getPeopleApi";
import processViewedPeopleList from "../utils/processViewedPeopleList";

export type TDoPagination = "first" | "prev" | "next" | "last";

export interface TSortingState {
  type: "asc" | "desc";
  field: string;
}

export interface TPaginationState {
  currentPage: number;
  lastPage: number;
  offset: number;
}

export interface TQueryValuesState {
  sorting?: TSortingState;
  searching?: string;
  pagination?: TPaginationState;
}

export interface TPersonsListState {
  // Persons list directly from API response
  rawPersonsList: TPerson[];
  // Persons list filtered and sorted
  filteredSortedList: TPerson[];
  // Paginated Persons list used for viewing
  viewedPersonsList: TPerson[];
  // Used for searching, sorting, and pagination states
  queryValues: TQueryValuesState;
}

const initialState: TPersonsListState = {
  rawPersonsList: [],
  filteredSortedList: [],
  viewedPersonsList: [],
  queryValues: {},
};

export const personsListSlice = createSlice({
  name: "personsList",
  initialState,
  reducers: {
    setRawPersonsList: (state, action: PayloadAction<TPerson[]>) => {
      state.rawPersonsList = action.payload;
      state.queryValues.pagination = state.queryValues.pagination ?? {
        currentPage: 0,
        lastPage: Math.ceil(action.payload.length / 5),
        offset: 5,
      };
      state.queryValues.sorting = state.queryValues.sorting ?? {
        type: "asc",
        field: "name",
      };
      state.filteredSortedList = processViewedPeopleList(
        state.rawPersonsList,
        state.queryValues
      );
      state.viewedPersonsList = state.filteredSortedList.slice(
        state.queryValues.pagination.currentPage * 5,
        state.queryValues.pagination.currentPage * 5 + 5
      );
    },
    doPagination: (state, action: PayloadAction<TDoPagination>) => {
      if (state.queryValues.pagination) {
        switch (action.payload) {
          case "first":
            state.queryValues.pagination = {
              ...state.queryValues.pagination,
              currentPage: 0,
            };
            break;
          case "prev":
            state.queryValues.pagination = {
              ...state.queryValues.pagination,
              currentPage: state.queryValues.pagination.currentPage - 1,
            };
            break;
          case "next":
            state.queryValues.pagination = {
              ...state.queryValues.pagination,
              currentPage: state.queryValues.pagination.currentPage + 1,
            };
            break;
          case "last":
            state.queryValues.pagination = {
              ...state.queryValues.pagination,
              currentPage: state.queryValues.pagination.lastPage - 1,
            };
            break;
        }
        state.viewedPersonsList = state.filteredSortedList.slice(
          state.queryValues.pagination.currentPage * 5,
          state.queryValues.pagination.currentPage * 5 + 5
        );
      } else {
        throw new Error("Pagination values has not been set yet.");
      }
    },
    doSorting: (state, action: PayloadAction<string>) => {
      // Set new sorting value
      state.queryValues.sorting = {
        field: action.payload,
        type: state.queryValues.sorting?.type === "asc" ? "desc" : "asc",
      };
      // Search and Sort List
      state.filteredSortedList = processViewedPeopleList(
        state.rawPersonsList,
        state.queryValues
      );
      // Reset Pagination
      state.queryValues.pagination = {
        currentPage: 0,
        lastPage: Math.ceil(state.filteredSortedList.length / 5),
        offset: 5,
      };
      // Generate Paginated List
      if (state.queryValues.pagination) {
        state.viewedPersonsList = state.filteredSortedList.slice(
          state.queryValues.pagination.currentPage * 5,
          state.queryValues.pagination.currentPage * 5 + 5
        );
      }
    },
    doSearching: (state, action: PayloadAction<string>) => {
      // Set search value
      state.queryValues.searching = action.payload;
      // Search and Sort List
      state.filteredSortedList = processViewedPeopleList(
        state.rawPersonsList,
        state.queryValues
      );
      // Reset Pagination
      state.queryValues.pagination = {
        currentPage: 0,
        lastPage: Math.ceil(state.filteredSortedList.length / 5),
        offset: 5,
      };
      // Generate Paginated List
      if (state.queryValues.pagination) {
        state.viewedPersonsList = state.filteredSortedList.slice(
          state.queryValues.pagination.currentPage * 5,
          state.queryValues.pagination.currentPage * 5 + 5
        );
      }
    },
  },
});

export const { setRawPersonsList, doPagination, doSorting, doSearching } =
  personsListSlice.actions;

export default personsListSlice.reducer;
