import { selectAuthToken } from "../redux/authTokenSlice";
import { useAppSelector } from "./reduxHooks";

const useUserAuth = () => {
  const authToken = useAppSelector(selectAuthToken);

  const isLoggedIn = authToken !== "";

  return {
    isLoggedIn,
    authToken,
  };
};

export default useUserAuth;
