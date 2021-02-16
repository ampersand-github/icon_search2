import { iconType } from "../../types/iconType";

export const generateMaterialUrl = (iconData: iconType) => {
  return `https://material.io/resources/icons/?icon=${iconData.icon}&style=baseline`;
};
