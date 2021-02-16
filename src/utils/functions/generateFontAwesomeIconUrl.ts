import { iconType } from "../../types/iconType";

export const generateFontAwesomeUrl = (iconData: iconType):string => {
  return `https://fontawesome.com/icons/${iconData.icon}?style=${iconData.genre}`;
};
