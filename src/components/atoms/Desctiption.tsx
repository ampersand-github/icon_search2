import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { appConstants } from "../../constants/appConstants";
import { breakpointsConstraints } from "../../constants/breakPointConstants";
import { useWindowSize } from "../../utils/hooks/useWindowSize";

const useStyles = makeStyles(() =>
  createStyles({
    description: {
      opacity: 0.6,
    },
  })
);
export const Description: React.FC = () => {
  const classes = useStyles();
  const { width } = useWindowSize();
  const variant =
    width <= breakpointsConstraints.tablet ? "overline" : "caption";
  return (
    <Typography variant={variant} noWrap>
      <Box className={classes.description} fontWeight={"fontWeightBold"}>
        {appConstants.applicationDescription}
      </Box>
    </Typography>
  );
};
