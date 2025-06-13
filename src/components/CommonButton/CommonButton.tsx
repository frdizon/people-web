import { type FC, type ReactNode } from "react";

interface TCommonButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const CommonButton: FC<TCommonButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 border border-blue-300 text-blue-300 bg-transparent rounded-md hover:bg-blue-500 hover:text-white transition-colors h-10 align-middle"
    >
      {children}
    </button>
  );
};

export default CommonButton;
