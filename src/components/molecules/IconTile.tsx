import React from "react";
import { Box, Typography } from "@material-ui/core";
import { VariousIcon } from "../atoms/VariousIcon";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import LazyLoad from "react-lazyload";
import { iconType } from "../../types/iconType";

interface Props {
  icon: string;
  url: string;
  iconSize: number;
  cellHeight: number;
  iconData: iconType;
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    typo: {
      display: "flex",
      justifyContent: "center",
    },
  });
});
export const IconTile: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const iconName: string = props.icon.replace("_", "-"); // _じゃ折返してくれないので
  return (
    <div>
      <a
        style={{ textDecoration: "none", color: "black" }}
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        <Box className={classes.root}>
          <LazyLoad>
            <VariousIcon iconData={props.iconData} iconSize={props.iconSize} />
          </LazyLoad>
          <Box height={8} />
          <Box width={props.iconSize + 24} className={classes.typo}>
            <Typography
              variant="caption"
              align="center"
              style={{ wordWrap: "break-word" }}
              component={"span"}
            >
              {iconName}
            </Typography>
          </Box>
        </Box>
      </a>
    </div>
  );
};
