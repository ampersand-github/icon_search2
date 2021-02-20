import React from "react";
import { Box, GridList, GridListTile } from "@material-ui/core";
import { gridListConstants } from "../../../constants/gridListConstants";
import { useWindowSize } from "../../../utils/hooks/useWindowSize";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { iconType } from "../../../types/iconType";
import { IconTile } from "../../molecules/IconTile";
import LazyLoad from "react-lazyload";
import { breakpointsConstraints } from "../../../constants/breakPointConstants";

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
  const { width } = useWindowSize();
  const tablet = breakpointsConstraints.tablet;
  const padding = width <= tablet ? 24 : 48;
  const iconSize = width <= tablet ? config.iconSizeMobile : config.iconSize;
  const height = width <= tablet ? config.cellHeightMobile : config.cellHeight;
  // todo helperへ
  const cols: number = Math.floor(
    useWindowSize().width / (iconSize + padding * 2)
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
                iconSize={iconSize}
                cellHeight={height}
              />
            </LazyLoad>
            <Box width={width} />
          </Box>
        </GridListTile>
      ))}
    </GridList>
  );
};
