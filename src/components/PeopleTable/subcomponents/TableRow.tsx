import { useCallback, useMemo, type ChangeEvent, type FC } from "react";
import {
  useDeletePersonMutation,
  type TPerson,
} from "../../../redux/peopleApi";
import CommonButton from "../../CommonButton/CommonButton";
import { useAppDispatch, useAppSelector } from "../../../utils/reduxHooks";
import { doMutateMultipleDeleteState } from "../../../redux/peopleSlice";

interface TTableRowProps {
  person: TPerson;
}

const TableRow: FC<TTableRowProps> = ({ person }) => {
  const dispatch = useAppDispatch();
  const deleteIdsArr = useAppSelector(
    (state) => state.personsList.deleteIdsArr
  );
  const isMultipleDeleteOngoing = useAppSelector(
    (state) => state.personsList.isMultipleDeleteOngoing
  );

  const [deleteMutation, { isLoading: isDeleteLoading }] =
    useDeletePersonMutation();

  const handleSingleDelete = useCallback(
    (personId: string) => () => {
      deleteMutation(personId);
    },
    [deleteMutation]
  );

  const handleTickCheckbox = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.checked);
      dispatch(
        doMutateMultipleDeleteState({
          type: e.target.checked ? "add" : "remove",
          payload: person.id,
        })
      );
    },
    [dispatch, person]
  );

  const isChecked = useMemo(
    () => deleteIdsArr.some((id) => id === person.id),
    [deleteIdsArr, person.id]
  );

  // Disabling during loading states
  const isDisabled = isMultipleDeleteOngoing || isDeleteLoading;

  return (
    <tr key={person.id}>
      <td className="border border-gray-500 min-w-[50px]">
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleTickCheckbox}
            disabled={isDisabled}
          />
        </div>
      </td>
      <td className="border border-gray-500 min-w-[150px] px-2">
        {person.name}
      </td>
      <td className="border border-gray-500 min-w-[150px] px-2">
        {person.date_of_birth}
      </td>
      <td className="border border-gray-500 min-w-[150px] px-2">
        {person.gender}
      </td>
      <td className="border border-gray-500 min-w-[150px] px-2">
        {person.marital_status}
      </td>
      <td className="border border-gray-500 min-w-[150px] px-2">
        {person.mobile_number}
      </td>
      <td className="border border-gray-500 min-w-[150px] px-2">
        {person.home_email}
      </td>
      <td className="border border-gray-500 min-w-[150px] px-2">
        {person.office_email}
      </td>
      <td className="border border-gray-500 min-w-[150px] px-2">
        {person.home_address}
      </td>
      <td className="border border-gray-500 min-w-[150px] px-2">
        {person.office_address}
      </td>
      <td className="border border-gray-500  min-w-[150px]">
        <div className="min-h-[75px] flex items-center justify-center">
          <CommonButton
            onClick={handleSingleDelete(person.id)}
            isLoading={isDeleteLoading}
            isDisabled={isDisabled}
          >
            Delete
          </CommonButton>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
