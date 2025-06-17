// This function processess the raw peoples list (from GET /people)
//  to a list that undergoes filtering and sorting

import type { TPerson } from "../redux/peopleApi";
import type { TQueryValuesState } from "../redux/peopleSlice";

export type TPersonFields =
  | "name"
  | "date_of_birth"
  | "gender"
  | "marital_status"
  | "mobile_number"
  | "home_email"
  | "office_email"
  | "home_address"
  | "office_address";

//  which is viewed on the PeopleTable component
const processViewedPeopleList = (
  rawPersonsList: TPerson[],
  queryValues: TQueryValuesState
): TPerson[] => {
  // For Deep copy
  let viewedPersonsList: TPerson[] = rawPersonsList.map((el) => el);

  // Filter by searchValue
  if (queryValues.searching) {
    viewedPersonsList = viewedPersonsList.filter(
      (person) =>
        queryValues.searching &&
        (person.name
          .toLowerCase()
          .includes(queryValues.searching.toLowerCase()) ||
          person.date_of_birth
            .toLowerCase()
            .includes(queryValues.searching.toLowerCase()) ||
          person.gender
            .toLowerCase()
            .includes(queryValues.searching.toLowerCase()) ||
          person.home_address
            .toLowerCase()
            .includes(queryValues.searching.toLowerCase()) ||
          person.home_email
            .toLowerCase()
            .includes(queryValues.searching.toLowerCase()) ||
          person.marital_status
            .toLowerCase()
            .includes(queryValues.searching.toLowerCase()) ||
          person.mobile_number
            .toLowerCase()
            .includes(queryValues.searching.toLowerCase()) ||
          person.office_address
            .toLowerCase()
            .includes(queryValues.searching.toLowerCase()) ||
          person.office_email
            .toLowerCase()
            .includes(queryValues.searching.toLowerCase()))
    );
  }

  // Implement Sorting
  if (queryValues.sorting?.field && queryValues.sorting?.type === "asc") {
    viewedPersonsList.sort((a, b) =>
      a[queryValues.sorting?.field as TPersonFields].localeCompare(
        b[queryValues.sorting?.field as TPersonFields],
        undefined,
        {
          sensitivity: "base",
        }
      )
    );
  } else if (queryValues.sorting?.type === "desc") {
    viewedPersonsList.sort((a, b) =>
      b[queryValues.sorting?.field as TPersonFields].localeCompare(
        a[queryValues.sorting?.field as TPersonFields],
        undefined,
        { sensitivity: "base" }
      )
    );
  }

  return viewedPersonsList;
};

export default processViewedPeopleList;
