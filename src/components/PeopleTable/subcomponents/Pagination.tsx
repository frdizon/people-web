import { useCallback, type FC } from "react";
import CommonButton from "../../CommonButton/CommonButton";
import { useAppDispatch, useAppSelector } from "../../../utils/reduxHooks";
import { doPagination, type TDoPagination } from "../../../redux/peopleSlice";

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const paginationValue = useAppSelector(
    (state) => state.personsList.queryValues.pagination
  );

  const handlePaginationChange = useCallback(
    (paginationType: TDoPagination) => () => {
      dispatch(doPagination(paginationType));
    },
    [dispatch]
  );

  // Early return/render when pagination is not yet set.
  if (!paginationValue) {
    return <div />;
  }

  const isFirstPage = paginationValue.currentPage === 0;
  const isLastPage =
    paginationValue.currentPage + 1 === paginationValue.lastPage;

  return (
    <div className="h-12 flex items-center justify-between">
      <div className="flex-1 max-w-80">
        Page {paginationValue.currentPage + 1} of {paginationValue.lastPage}
      </div>
      <div className="flex gap-1 w-fit">
        <CommonButton
          onClick={handlePaginationChange("first")}
          isDisabled={isFirstPage}
        >
          First Page
        </CommonButton>
        <CommonButton
          onClick={handlePaginationChange("prev")}
          isDisabled={isFirstPage}
        >
          Prev Page
        </CommonButton>
        <CommonButton
          onClick={handlePaginationChange("next")}
          isDisabled={isLastPage}
        >
          Next Page
        </CommonButton>
        <CommonButton
          onClick={handlePaginationChange("last")}
          isDisabled={isLastPage}
        >
          Last Page
        </CommonButton>
      </div>
    </div>
  );
};

export default Pagination;
