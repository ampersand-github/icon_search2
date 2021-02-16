import React from "react";
import { Box, Icon } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { makePrefix } from "../../utils/functions/MakePrefix";
import { iconType } from "../../types/iconType";

interface props {
  iconData: iconType;
  iconSize: number;
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  });
});
export const VariousIcon: React.FC<props> = (props) => {
  const classes = useStyles();
  if (props.iconData.name === "awesome") {
    return (
      <Box className={classes.root} width={props.iconSize}>
        {/* // todo 3xのレスポンシブ対応 */}
        <FontAwesomeIcon
          size={"3x"}
          icon={[
            makePrefix(props.iconData.genre) as IconPrefix,
            props.iconData.icon as IconName,
          ]}
        />
      </Box>
    );
  } else if (props.iconData.name === "material") {
    return (
      <Icon style={{ fontSize: props.iconSize }}>{props.iconData.icon}</Icon>
    );
  } else {
    return <Box />;
  }
};
