import { useCallback, type FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/reduxHooks";
import { renderSortingArrow } from "../utils";
import { doSorting } from "../../../redux/peopleSlice";
import type { TPersonFields } from "../../../utils/processViewedPeopleList";
import TableRow from "./TableRow";

const TableComponent: FC = () => {
  const dispatch = useAppDispatch();

  const viewedPersonsList = useAppSelector(
    (state) => state.personsList.viewedPersonsList
  );
  const sortingState = useAppSelector(
    (state) => state.personsList.queryValues.sorting
  );

  const handleSorting = useCallback(
    (field: TPersonFields) => () => {
      dispatch(doSorting(field));
    },
    [dispatch]
  );

  return (
    <div className="size-full my-2 bg-zinc-900 overflow-auto">
      <table className="w-full table-auto border-collapse border">
        <thead className="bg-zinc-700">
          <tr>
            <th className="border border-gray-500">
              {/* For checkbox column */}
            </th>
            <th
              className="border border-gray-500 cursor-pointer"
              onClick={handleSorting("name")}
            >
              First Name, Last Name (Preferred Name){" "}
              {renderSortingArrow(sortingState, "name")}
            </th>
            <th
              className="border border-gray-500 cursor-pointer"
              onClick={handleSorting("date_of_birth")}
            >
              Date of Birth {renderSortingArrow(sortingState, "date_of_birth")}
            </th>
            <th
              className="border border-gray-500 cursor-pointer"
              onClick={handleSorting("gender")}
            >
              Gender {renderSortingArrow(sortingState, "gender")}
            </th>
            <th
              className="border border-gray-500 cursor-pointer"
              onClick={handleSorting("marital_status")}
            >
              Marital Status{" "}
              {renderSortingArrow(sortingState, "marital_status")}
            </th>
            <th
              className="border border-gray-500 cursor-pointer"
              onClick={handleSorting("mobile_number")}
            >
              Mobile Number {renderSortingArrow(sortingState, "mobile_number")}
            </th>
            <th
              className="border border-gray-500 cursor-pointer"
              onClick={handleSorting("home_email")}
            >
              Home Email {renderSortingArrow(sortingState, "home_email")}
            </th>
            <th
              className="border border-gray-500 cursor-pointer"
              onClick={handleSorting("office_email")}
            >
              Office Email {renderSortingArrow(sortingState, "office_email")}
            </th>
            <th
              className="border border-gray-500 cursor-pointer"
              onClick={handleSorting("home_address")}
            >
              Home Address {renderSortingArrow(sortingState, "home_address")}
            </th>
            <th
              className="border border-gray-500 cursor-pointer"
              onClick={handleSorting("office_address")}
            >
              Office Address{" "}
              {renderSortingArrow(sortingState, "office_address")}
            </th>
            <th className="border border-gray-500">
              {/* For Delete button column */}
            </th>
          </tr>
        </thead>
        <tbody>
          {viewedPersonsList.map((person) => (
            <TableRow key={person.id} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
