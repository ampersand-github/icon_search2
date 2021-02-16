import React from "react";
import { Box, createStyles, Icon, makeStyles, Paper } from "@material-ui/core";
import AppLogo from "../../atoms/AppLogo";
import { ShareMenu } from "./shareMenu";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { useRouter } from "next/router";
import SearchButton from "../../atoms/searchButton";

const useStyles = makeStyles(() => {
  return createStyles({
    headerRight: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    rightContents: {
      justifyContent: "flex-start",
    },
    centerContents: {
      justifyContent: "center",
    },
    leftContents: {
      justifyContent: "flex-end",
    },
    icon: {
      opacity: 0.54,
    },
  });
});

export const HeaderRight: React.FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.headerRight}>
      <SearchButton />
      <Box width={16} />
      <ShareMenu />
    </section>
  );
};
/*



 */
