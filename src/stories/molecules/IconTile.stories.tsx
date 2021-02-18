import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { IconTile } from "../../components/molecules/IconTile";
import { gridListConstants } from "../../constants/gridListConstants";

export default {
  title: "molecules/IconTile",
  component: IconTile,
} as Meta;

const iconMaterialData = gridListConstants.materialIconData[0];
const iconAwesomeData = gridListConstants.awesomeIconData[0];

export const AwesomeIconTile_story: React.FC = () => {
  return (
    <IconTile
      icon={iconAwesomeData.icon}
      url={"https://google.com"}
      iconSize={gridListConstants.iconSize}
      cellHeight={gridListConstants.cellHeight}
      iconData={iconAwesomeData}
    />
  );
};
export const MaterialIconTile_story: React.FC = () => {
  return (
    <IconTile
      icon={iconMaterialData.icon}
      url={"https://google.com"}
      iconSize={gridListConstants.iconSize}
      cellHeight={gridListConstants.cellHeight}
      iconData={iconMaterialData}
    />
  );
};
