import { useCallback, useState, type FC } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import { APPBAR_MENU_BUTTONS } from "./constants";
import PeopleTable from "../../components/PeopleTable/PeopleTable";
import AddPeopleDialog from "../../components/AddPeopleDialog/AddPeopleDialog";

const PeopleView: FC = () => {
  const [isAddDialogShown, setIsAddDialogShown] = useState(false);

  const handleMenuButtonClick = useCallback(() => {
    setIsAddDialogShown(true);
  }, []);

  const handleLogout = useCallback(() => {
    console.log("Logout");
  }, []);

  const handleDialogClose = useCallback(() => {
    setIsAddDialogShown(false);
  }, []);

  return (
    <PageLayout
      menuButtons={APPBAR_MENU_BUTTONS}
      onMenuButtonClick={handleMenuButtonClick}
      onLogout={handleLogout}
    >
      <PeopleTable />
      {isAddDialogShown && (
        <AddPeopleDialog onDialocClose={handleDialogClose} />
      )}
    </PageLayout>
  );
};

export default PeopleView;
