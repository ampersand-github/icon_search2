import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { HeaderLeft } from "../molecules/header/headerLeft";
import { HeaderRight } from "../molecules/header/headerRight";

const useStyles = makeStyles(() => {
  return createStyles({
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 80,
      width: "100%",
    },
    rightHeader: {
      justifyContent: "flex-start",
    },
    centerHeader: {
      justifyContent: "center",
      flexGrow: 1,
    },
    leftHeader: {
      justifyContent: "flex-end",
    },
  });
});

export const MyHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.leftHeader}>
        <HeaderLeft />
      </div>
      <div className={classes.centerHeader} />
      <div className={classes.rightHeader}>
        <HeaderRight />
      </div>
    </header>
  );
};
//
//
