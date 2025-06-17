import { useCallback, type ChangeEvent, type FC } from "react";
import CommonDialog from "../CommonDialog/CommonDialog";
import CommonButton from "../CommonButton/CommonButton";
import useAddPeople from "./useAddPeople";

interface TAddPeopleDialogProps {
  onDialocClose: () => void;
}

const AddPeopleDialog: FC<TAddPeopleDialogProps> = ({ onDialocClose }) => {
  const {
    handleModifyPeople,
    handlePostMutation,
    isLoading,
    people,
    errorMsg,
  } = useAddPeople(onDialocClose);

  const handleChange = useCallback(
    (fieldName: string) => (e: ChangeEvent<HTMLInputElement>) => {
      handleModifyPeople(fieldName, e.target.value);
    },
    [handleModifyPeople]
  );

  return (
    <CommonDialog>
      <div className="text-2xl mb-5">Add people</div>
      <div className="text-red-500">{errorMsg}</div>
      <div className="h-100 overflow-y-scroll px-1">
        First name
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.first_name}
          onChange={handleChange("first_name")}
        />
        Last name
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.last_name}
          onChange={handleChange("last_name")}
        />
        Preferred name
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.preferred_name}
          onChange={handleChange("preferred_name")}
        />
        Date of Birth
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.date_of_birth}
          onChange={handleChange("date_of_birth")}
        />
        Gender
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.gender}
          onChange={handleChange("gender")}
        />
        Marital status
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.marital_status}
          onChange={handleChange("marital_status")}
        />
        Mobile name
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.mobile_number}
          onChange={handleChange("mobile_number")}
        />
        Home email
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.home_email}
          onChange={handleChange("home_email")}
        />
        Office email
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.office_email}
          onChange={handleChange("office_email")}
        />
        Home address
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.home_address}
          onChange={handleChange("home_address")}
        />
        Office address
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={people.office_address}
          onChange={handleChange("office_address")}
        />
      </div>
      <div className="flex justify-end gap-1 mt-2">
        <CommonButton onClick={onDialocClose} isDisabled={isLoading}>
          Cancel
        </CommonButton>
        <CommonButton onClick={handlePostMutation} isLoading={isLoading}>
          Add
        </CommonButton>
      </div>
    </CommonDialog>
  );
};

export default AddPeopleDialog;
