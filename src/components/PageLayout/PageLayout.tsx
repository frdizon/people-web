import type { FC, ReactNode } from "react";
import Appbar from "./subcomponents/Appbar";

interface TPageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<TPageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Appbar />
      <div className="border-solid border-1 flex-1">{children}</div>
    </div>
  );
};

export default PageLayout;
