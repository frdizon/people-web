import { useCallback, type FC } from "react";
import CommonButton from "../../CommonButton/CommonButton";

export interface TAppbarProps {
  menuButtons: string[];
  onMenuButtonClick: (clickedButton: string) => void;
  onLogout: () => void;
}

const Appbar: FC<TAppbarProps> = ({
  menuButtons,
  onMenuButtonClick,
  onLogout,
}) => {
  const handleButtonClick = useCallback(
    (buttonName: string) => () => {
      onMenuButtonClick(buttonName);
    },
    [onMenuButtonClick]
  );

  return (
    <div className="w-full bg-stone-800 h-16 flex justify-between items-center px-4 border-b border-black">
      <div>
        {menuButtons.map((buttonName) => (
          <CommonButton onClick={handleButtonClick(buttonName)}>
            {buttonName}
          </CommonButton>
        ))}
      </div>
      <div>
        <CommonButton onClick={onLogout}>Logout</CommonButton>
      </div>
    </div>
  );
};

export default Appbar;
