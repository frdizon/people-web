import { type FC } from "react";
import Toolbar from "./subcomponents/Toolbar";
import Pagination from "./subcomponents/Pagination";
import TableComponent from "./subcomponents/TableComponent";

const PeopleTable: FC = () => {
  return (
    <div className="h-full flex flex-col px-4 py-2">
      <Toolbar />
      <TableComponent />
      <Pagination />
    </div>
  );
};

export default PeopleTable;
