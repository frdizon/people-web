import { type FC } from "react";
import Toolbar from "./subcomponents/Toolbar";
import Pagination from "./subcomponents/Pagination";
import TableComponent from "./subcomponents/TableComponent";

interface TPeopleTableProps {
  isLoading: boolean;
}

const PeopleTable: FC<TPeopleTableProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center">
        <div className="w-18 h-18 border-4 border-t-blue-500 border-stone-800/50 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col px-4 py-2">
      <Toolbar />
      <TableComponent />
      <Pagination />
    </div>
  );
};

export default PeopleTable;
