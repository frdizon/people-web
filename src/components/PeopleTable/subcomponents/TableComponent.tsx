import { type FC } from "react";

const TableComponent: FC = () => {
  return (
    <div className="size-full my-2 bg-zinc-900">
      <table className="w-full table-fixed border-collapse border">
        <thead className="bg-zinc-700">
          <tr>
            <th className="border border-gray-500">Song</th>
            <th className="border border-gray-500">Artist</th>
            <th className="border border-gray-500">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border border-gray-500">Malcolm Lockyer</td>
            <td className="border border-gray-500">1961</td>
          </tr>
          <tr>
            <td className="border border-gray-500">Witchy Woman</td>
            <td className="border border-gray-500">The Eagles</td>
            <td className="border border-gray-500">1972</td>
          </tr>
          <tr>
            <td className="border border-gray-500">Shining Star</td>
            <td className="border border-gray-500">Earth, Wind, and Fire</td>
            <td className="border border-gray-500">1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
