import { iconType } from "../../types/iconType";

export const generateFontAwesomeUrl = (iconData: iconType) => {
  return `https://fontawesome.com/icons/${iconData.icon}?style=${iconData.genre}`;
};
