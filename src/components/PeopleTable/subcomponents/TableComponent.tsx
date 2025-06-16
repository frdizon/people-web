import { useCallback, type FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/reduxHooks";
import { renderSortingArrow } from "../utils";
import { doSorting } from "../../../redux/peopleSlice";
import type { TPersonFields } from "../../../utils/processViewedPeopleList";

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
    <div className="size-full my-2 bg-zinc-900">
      <table className="w-full table-fixed border-collapse border">
        <thead className="bg-zinc-700">
          <tr>
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
          </tr>
        </thead>
        <tbody>
          {viewedPersonsList.map((person) => (
            <tr key={person.id}>
              <td className="border border-gray-500">{person.name}</td>
              <td className="border border-gray-500">{person.date_of_birth}</td>
              <td className="border border-gray-500">{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
