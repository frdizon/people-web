import type { FC } from "react";
import PeopleView from "./views/PeopleView/PeopleView";
import LoginDialog from "./views/LoginDialog/LoginDialog";

// Normally, routing is handled by routing libraries/framework, like react-router.
//  But since we only have a login page and a people page, will just handle routing here.
const Routing: FC = () => {
  // return <LoginDialog />;
  return <PeopleView />;
};

export default Routing;
