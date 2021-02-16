import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { VariousIcon } from "../../components/atoms/VariousIcon";
import { gridListConstants } from "../../constants/gridListConstants";

export default {
  title: "atoms/VariousIcon",
  component: VariousIcon,
} as Meta;

const iconMaterialData = gridListConstants.materialIconData[0];
const awesomeIconData = gridListConstants.awesomeIconData[0];

export const AwesomeIcon: React.FC  = () => {
  return <VariousIcon iconData={awesomeIconData} iconSize={24} />;
};
export const MaterialDataIcon : React.FC = () => {
  return (
    <div>
      <VariousIcon iconData={iconMaterialData} iconSize={24} />
    </div>
  );
};
