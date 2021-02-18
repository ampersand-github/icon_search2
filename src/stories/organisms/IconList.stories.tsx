import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { IconList } from "../../components/organisms/contents/IconList";
import { gridListConstants } from "../../constants/gridListConstants";
import { generateFontAwesomeUrl } from "../../utils/functions/generateFontAwesomeIconUrl";
import { generateMaterialUrl } from "../../utils/functions/generateMaterialIconUrl";

export default {
  title: "organisms/IconList",
  component: IconList,
} as Meta;

const iconMaterialData = gridListConstants.materialIconData.splice(0, 1000);
const awesomeIconData = gridListConstants.awesomeIconData.splice(0, 10);

export const AwesomeIconList_story: React.FC = () => {
  return (
    <IconList
      generateUrl={generateFontAwesomeUrl}
      iconDataList={awesomeIconData}
    />
  );
};
export const MaterialIconList_story: React.FC = () => {
  return (
    <IconList
      generateUrl={generateMaterialUrl}
      iconDataList={iconMaterialData}
    />
  );
};
