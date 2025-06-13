import type { FC, ReactNode } from "react";
import Appbar, { type TAppbarProps } from "./subcomponents/Appbar";

interface TPageLayoutProps extends TAppbarProps {
  children: ReactNode;
}

const PageLayout: FC<TPageLayoutProps> = ({
  menuButtons,
  onMenuButtonClick,
  onLogout,
  children,
}) => {
  return (
    <div className="flex flex-col h-full">
      <Appbar
        menuButtons={menuButtons}
        onMenuButtonClick={onMenuButtonClick}
        onLogout={onLogout}
      />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default PageLayout;
