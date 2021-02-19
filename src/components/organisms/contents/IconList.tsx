import React from "react";
import { Box, GridList, GridListTile } from "@material-ui/core";
import { gridListConstants } from "../../../constants/gridListConstants";
import { useWindowSize } from "../../../utils/hooks/useWindowSize";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { iconType } from "../../../types/iconType";
import { IconTile } from "../../molecules/IconTile";
import LazyLoad from "react-lazyload";

interface Props {
  generateUrl(arg0: iconType): string;
  iconDataList: iconType[];
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
export const IconList: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const config = gridListConstants;
  const width = 48;
  // todo helperへ
  const cols: number = Math.floor(
    useWindowSize().width / (config.iconSize + width * 2)
  );
  return (
    <GridList cols={cols}>
      {props.iconDataList.map((iconData, index) => (
        <GridListTile key={index}>
          <Box className={classes.root}>
            <Box width={width} />
            <LazyLoad>
              <IconTile
                iconData={iconData}
                icon={iconData.icon}
                url={props.generateUrl(iconData)}
                iconSize={config.iconSize}
                cellHeight={config.cellHeight}
              />
            </LazyLoad>
            <Box width={width} />
          </Box>
        </GridListTile>
      ))}
    </GridList>
  );
};
