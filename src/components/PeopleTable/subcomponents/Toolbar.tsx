import { useCallback, useState, type ChangeEvent, type FC } from "react";
import CommonButton from "../../CommonButton/CommonButton";
import { useAppDispatch, useAppSelector } from "../../../utils/reduxHooks";
import { doSearching } from "../../../redux/peopleSlice";
import {
  useDeleteMultiplePersonMutation,
  useGetPersonsQuery,
} from "../../../redux/peopleApi";

const Toolbar: FC = () => {
  const dispatch = useAppDispatch();
  const [multipleDeleteMutation, { isLoading: isDeleteLoading }] =
    useDeleteMultiplePersonMutation();
  const deleteIdsArr = useAppSelector(
    (state) => state.personsList.deleteIdsArr
  );

  const { isFetching } = useGetPersonsQuery();
  const [searchValue, setSearchValue] = useState("");

  const handleMultiDelete = useCallback(() => {
    multipleDeleteMutation(deleteIdsArr);
  }, [deleteIdsArr, multipleDeleteMutation]);

  const handleChangeSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const handleSearch = useCallback(() => {
    dispatch(doSearching(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="h-12 flex items-center justify-between">
      <div className="flex-1 max-w-120 flex gap-1">
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={searchValue}
          onChange={handleChangeSearchValue}
          placeholder="Search"
        />
        <CommonButton onClick={handleSearch}>Search</CommonButton>
        <div className="w-[1px] bg-zinc-200/50 my-1 mx-1" />
        <CommonButton onClick={handleMultiDelete}>MultiDelete</CommonButton>
      </div>
      <div className="flex gap-1 w-fit">
        {isFetching && (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-4 border-t-blue-500 border-stone-800/50 rounded-full animate-spin" />
            <div>Syncing (Refetching)</div>
          </div>
        )}
        {isDeleteLoading && (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-4 border-t-blue-500 border-stone-800/50 rounded-full animate-spin" />
            <div>Deleting</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
