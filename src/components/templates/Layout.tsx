import React, { ReactNode } from "react";
import { MyFooter } from "../organisms/footer";
import { MyHeader } from "../organisms/header";
import { Box, Container } from "@material-ui/core";

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = (Props: Props) => {
  return (
    <React.Fragment>
      <Container maxWidth={"lg"}>
        <MyHeader />
      </Container>

      {Props.children}

      <Container maxWidth={"lg"}>
        <Box height={48} />
        <MyFooter />
        <Box height={48} />
      </Container>
    </React.Fragment>
  );
};

export default Layout;
//
