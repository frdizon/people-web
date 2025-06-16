import type { FC } from "react";
import PeopleView from "./views/PeopleView/PeopleView";
import LoginDialog from "./views/LoginDialog/LoginDialog";
import useUserAuth from "./utils/useUserAuth";

// Normally, routing is handled by routing libraries/framework, like react-router.
//  But since we only have a login page and a people page, will just handle routing here.
const Routing: FC = () => {
  const { isLoggedIn } = useUserAuth();

  if (!isLoggedIn) {
    return <LoginDialog />;
  }
  return <PeopleView />;
};

export default Routing;
