import React, { ReactNode } from "react";
import { MyFooter } from "../organisms/footer";
import { MyHeader } from "../organisms/header";
import { Box } from "@material-ui/core";

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = (Props: Props) => {
  return (
    <React.Fragment>
      <MyHeader />
      {Props.children}
      <Box height={48} />
      <MyFooter />

      <Box height={48} />
    </React.Fragment>
  );
};

export default Layout;
//
