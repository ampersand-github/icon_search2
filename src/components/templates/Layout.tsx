import React, { ReactNode } from "react";
import { MyFooter } from "../organisms/footer";
import { MyHeader } from "../organisms/header";

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = (Props: Props) => {
  return (
    <React.Fragment>
      <MyHeader />
      {Props.children}
      <MyFooter />
    </React.Fragment>
  );
};

export default Layout;
//
