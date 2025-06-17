import { type FC, type ReactNode } from "react";

interface TCommonButtonProps {
  onClick: () => void;
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const CommonButton: FC<TCommonButtonProps> = ({
  onClick,
  isLoading = false,
  isDisabled = false,
  children,
  ...rest
}) => {
  let buttonContent = children;
  if (isLoading) {
    buttonContent = (
      <div className="relative">
        <div className="opacity-0">{buttonContent}</div>
        <div className="w-full flex justify-center items-center absolute top-0">
          <div
            className="w-7 h-7 border-4 border-t-blue-500 border-stone-800/50 rounded-full animate-spin"
            data-testid="CommonButton-loading-spinner"
          />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className="px-4 border border-blue-300 text-blue-300 bg-transparent rounded-md hover:bg-blue-500 hover:text-white transition-colors h-10 align-middle cursor-pointer disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
      {...rest}
    >
      {buttonContent}
    </button>
  );
};

export default CommonButton;
