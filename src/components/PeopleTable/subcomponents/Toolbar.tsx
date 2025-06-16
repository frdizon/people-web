import { useCallback, useState, type ChangeEvent, type FC } from "react";
import CommonButton from "../../CommonButton/CommonButton";
import { useAppDispatch } from "../../../utils/reduxHooks";
import { doSearching } from "../../../redux/peopleSlice";

const Toolbar: FC = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleConfigure = useCallback(() => {
    console.log("handleConfigure");
  }, []);

  const handleDelete = useCallback(() => {
    console.log("handleDelete");
  }, []);

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
      </div>
      <div className="flex gap-1 w-fit">
        <CommonButton onClick={handleConfigure}>Configuration</CommonButton>
        <CommonButton onClick={handleDelete}>Delete</CommonButton>
      </div>
    </div>
  );
};

export default Toolbar;
