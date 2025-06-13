import { useCallback, type FC } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import { APPBAR_MENU_BUTTONS } from "./constants";

const PeopleView: FC = () => {
  const handleMenuButtonClick = useCallback((clickedButton: string) => {
    console.log("clicked", clickedButton);
  }, []);

  const handleLogout = useCallback(() => {
    console.log("Logout");
  }, []);

  return (
    <PageLayout
      menuButtons={APPBAR_MENU_BUTTONS}
      onMenuButtonClick={handleMenuButtonClick}
      onLogout={handleLogout}
    >
      <div>People View</div>
    </PageLayout>
  );
};

export default PeopleView;
