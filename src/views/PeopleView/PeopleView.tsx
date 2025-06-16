import { useCallback, useState, type FC } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import { APPBAR_MENU_BUTTONS } from "./constants";
import PeopleTable from "../../components/PeopleTable/PeopleTable";
import AddPeopleDialog from "../../components/AddPeopleDialog/AddPeopleDialog";
import { useGetPersonsQuery } from "../../redux/getPeopleApi";

const PeopleView: FC = () => {
  const [isAddDialogShown, setIsAddDialogShown] = useState(false);

  const { isLoading } = useGetPersonsQuery();

  const handleMenuButtonClick = useCallback(() => {
    setIsAddDialogShown(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setIsAddDialogShown(false);
  }, []);

  return (
    <PageLayout
      menuButtons={APPBAR_MENU_BUTTONS}
      onMenuButtonClick={handleMenuButtonClick}
    >
      <PeopleTable isLoading={isLoading} />
      {isAddDialogShown && (
        <AddPeopleDialog onDialocClose={handleDialogClose} />
      )}
    </PageLayout>
  );
};

export default PeopleView;
