import type { FC } from "react";
import LoginDialog from "./components/LoginDialog/LoginDialog";
import PageLayout from "./components/PageLayout/PageLayout";

// Normally, routing is handled by routing libraries/framework, like react-router.
//  But since we only have a login page and a people page, will just handle routing here.
const Routing: FC = () => {
  // return <LoginDialog>LoginDialog</LoginDialog>;
  return (
    <PageLayout>
      <div>Page Layout</div>
    </PageLayout>
  );
};

export default Routing;
