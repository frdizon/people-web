import { type FC } from "react";
import CommonButton from "../../CommonButton/CommonButton";

const Pagination: FC = () => {
  return (
    <div className="h-12 flex items-center justify-between">
      <div className="flex-1 max-w-80">Page 1 of 2</div>
      <div className="flex gap-1 w-fit">
        <CommonButton onClick={() => {}}>First Page</CommonButton>
        <CommonButton onClick={() => {}}>Prev Page</CommonButton>
        <CommonButton onClick={() => {}}>Next Page</CommonButton>
        <CommonButton onClick={() => {}}>Last Page</CommonButton>
      </div>
    </div>
  );
};

export default Pagination;
