import { useCallback, useEffect, useState } from "react";
import {
  usePostPersonMutation,
  type TPostPersonRequestBody,
} from "../../redux/peopleApi";
import errorMessageParser from "../../utils/errorMessageParser";

const initializeBlankPerson = (): TPostPersonRequestBody => ({
  first_name: "",
  last_name: "",
  preferred_name: "",
  date_of_birth: "",
  gender: "",
  home_address: "",
  home_email: "",
  marital_status: "",
  mobile_number: "",
  office_address: "",
  office_email: "",
});

const hasEmptyFields = (personData: TPostPersonRequestBody): boolean => {
  if (
    personData.first_name === "" ||
    personData.last_name === "" ||
    personData.preferred_name === "" ||
    personData.date_of_birth === "" ||
    personData.gender === "" ||
    personData.home_address === "" ||
    personData.home_email === "" ||
    personData.marital_status === "" ||
    personData.mobile_number === "" ||
    personData.office_address === "" ||
    personData.office_email === ""
  ) {
    return true;
  }
  return false;
};

const useAddPeople = (onDialocClose: () => void) => {
  const [mutation, { error, isLoading, isSuccess }] = usePostPersonMutation();
  const [people, setPeople] = useState(initializeBlankPerson);
  const [isShownErrorMessage, setIsShowErrorMessage] = useState(false);

  const handleModifyPeople = useCallback((field: string, value: string) => {
    setPeople((prevValue) => ({ ...prevValue, [field]: value }));
  }, []);

  const handlePostMutation = useCallback(() => {
    setIsShowErrorMessage(true);
    if (!hasEmptyFields(people)) {
      mutation(people);
    }
  }, [mutation, people]);

  useEffect(() => {
    if (isSuccess) {
      onDialocClose();
    }
  }, [isSuccess, onDialocClose]);

  let errorMsg = "";
  if (isShownErrorMessage) {
    errorMsg = hasEmptyFields(people)
      ? "Fill up all the fields"
      : errorMessageParser(error);
  }

  return {
    people,
    handleModifyPeople,
    handlePostMutation,
    isLoading,
    errorMsg,
  };
};

export default useAddPeople;
