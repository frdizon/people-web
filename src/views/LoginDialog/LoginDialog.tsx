import { useCallback, useState, type ChangeEvent, type FC } from "react";
import CommonDialog from "../../components/CommonDialog/CommonDialog";
import CommonButton from "../../components/CommonButton/CommonButton";
import { useLazyLoginQuery } from "../../redux/loginApi";
import errorMessageParser from "../../utils/errorMessageParser";

const LoginDialog: FC = () => {
  const [login, { error, isFetching }] = useLazyLoginQuery();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    console.log(email, password);
    login({ email, password });
  }, [email, login, password]);

  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const errorMsg = errorMessageParser(error);

  return (
    <CommonDialog>
      <div className="text-2xl mb-5">Sign in</div>
      <div>
        <div className="text-red-500">{errorMsg}</div>
        Email
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          value={email}
          onChange={handleChangeEmail}
          disabled={isFetching}
        />
        Password
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="password"
          value={password}
          onChange={handleChangePassword}
          disabled={isFetching}
        />
        <div className="flex justify-end">
          <CommonButton onClick={handleLogin} isLoading={isFetching}>
            Login
          </CommonButton>
        </div>
      </div>
    </CommonDialog>
  );
};

export default LoginDialog;
