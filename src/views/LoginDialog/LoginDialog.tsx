import {
  useCallback,
  useState,
  type ChangeEvent,
  type FC,
  type ReactNode,
} from "react";
import CommonDialog from "../../components/CommonDialog/CommonDialog";
import CommonButton from "../../components/CommonButton/CommonButton";

interface TLoginDialogProps {}

const LoginDialog: FC<TLoginDialogProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    console.log(username, password);
  }, [username, password]);

  const handleChangeUsername = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    []
  );

  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <CommonDialog>
      <div className="text-2xl mb-5">Sign in</div>
      <div>
        Username
        <input
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="text"
          onChange={handleChangeUsername}
        />
        Password
        <input
          onChange={handleChangePassword}
          className="w-full px-4 py-2 bg-zinc-900 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 mb-4"
          type="password"
        />
        <div className="flex justify-end">
          <CommonButton onClick={handleLogin}>Login</CommonButton>
        </div>
      </div>
    </CommonDialog>
  );
};

export default LoginDialog;
