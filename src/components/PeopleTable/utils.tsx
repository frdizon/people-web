import type { ReactNode } from "react";
import type { TSortingState } from "../../redux/peopleSlice";

export const renderSortingArrow = (
  paginationValue: TSortingState | undefined,
  fieldName: string
): ReactNode => {
  if (paginationValue && paginationValue.field === fieldName) {
    return paginationValue.type === "asc" ? <>&uarr;</> : <>&darr;</>;
  }
  return <></>;
};
