import React from "react";
import { Box, createStyles,  makeStyles } from "@material-ui/core";
import { ShareMenu } from "./shareMenu";
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
