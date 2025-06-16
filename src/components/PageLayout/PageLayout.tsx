import { useCallback, type FC, type ReactNode } from "react";
import Appbar from "./subcomponents/Appbar";
import { useAppDispatch } from "../../utils/reduxHooks";
import { clear } from "../../redux/authTokenSlice";

interface TPageLayoutProps {
  menuButtons: string[];
  onMenuButtonClick: (clickedButton: string) => void;
  children: ReactNode;
}

const PageLayout: FC<TPageLayoutProps> = ({
  menuButtons,
  onMenuButtonClick,
  children,
}) => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(clear());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-full">
      <Appbar
        menuButtons={menuButtons}
        onMenuButtonClick={onMenuButtonClick}
        onLogout={handleLogout}
      />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default PageLayout;
