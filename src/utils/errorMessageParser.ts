import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface TApiError {
  code: string;
  message: string;
  payload: string;
}

const errorMessageParser = (
  error: FetchBaseQueryError | SerializedError | undefined
): string => {
  if (error === undefined) {
    return "";
  } else if ((error as FetchBaseQueryError).data !== undefined) {
    return (
      ((error as FetchBaseQueryError).data as TApiError).message ??
      "An error occured."
    );
  }

  return "An error occured."; // to be removed
};

export default errorMessageParser;
