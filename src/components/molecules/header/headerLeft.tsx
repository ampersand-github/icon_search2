import React from "react";
import Link from "next/link";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppLogo from "../../atoms/AppLogo";
import Title from "../../atoms/Title";
import { Description } from "../../atoms/Desctiption";
import { breakpointsConstraints } from "../../../constants/breakPointConstants";
import { useWindowSize } from "../../../utils/hooks/useWindowSize";

const useStyles = makeStyles(() =>
  createStyles({
    headerTitleColumn: {
      flexDirection: "column",
      alignItems: "center",
    },
    headerTitleRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
    },
    description: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export const HeaderLeft: React.FC = () => {
  const classes = useStyles();
  const { width } = useWindowSize();
  return (
    <Link href="/">
      <Box className={classes.headerTitleRow}>
        {width <= breakpointsConstraints.tablet ? <div /> : <AppLogo />}
        {width <= breakpointsConstraints.tablet ? <div /> : <Box width={16} />}
        <Box className={classes.headerTitleColumn}>
          <Title />
          <Box className={classes.description}>
            <Description />
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
