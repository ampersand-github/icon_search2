import { iconType } from "../../types/iconType";

export const generateMaterialUrl = (iconData: iconType):string => {
  return `https://material.io/resources/icons/?icon=${iconData.icon}&style=baseline`;
};
