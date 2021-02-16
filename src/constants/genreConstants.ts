import { materialIconData } from "./icons/materialIconData";
import { iconType } from "../types/iconType";
import { fontAwesomeIconData } from "./icons/fontAwesomeIconData";

// todo 別ファイルへ
export type materialGenre =
  | "action"
  | "hardware"
  | "av"
  | "communication"
  | "content"
  | "device"
  | "editor"
  | "file"
  | "image"
  | "maps"
  | "navigation"
  | "notification"
  | "places"
  | "social"
  | "toggle";

const filteredList = (genre: materialGenre) =>
  materialIconData.filter((value: iconType) => genreFilter(genre, value));

// todo テスト書く 別ファイルへ
function genreFilter(genre: materialGenre, value: iconType) {
  if (value.genre === genre) {
    return value;
  }
  return null;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// todo ここの汚い命名をどうにかする
export type fontAwesomeGenre = "regular" | "solid" | "brands";

const fontAwesomeFilteredList = (genre: fontAwesomeGenre) =>
  fontAwesomeIconData.filter((value: iconType) =>
    fontAwesomeGenreFilter(genre, value)
  );

// todo テスト書く 別ファイルへ
function fontAwesomeGenreFilter(genre: fontAwesomeGenre, value: iconType) {
  if (value.genre === genre) {
    return value;
  }
  return null;
}

export const genreConstants = {
  material: {
    action: { index: 0, name: "action", list: filteredList("action") },
    hardware: { index: 1, name: "hardware", list: filteredList("hardware") },
    av: { index: 2, name: "av", list: filteredList("av") },
    communication: {
      index: 3,
      name: "communication",
      list: filteredList("communication"),
    },
    content: { index: 4, name: "content", list: filteredList("content") },
    device: { index: 5, name: "device", list: filteredList("device") },
    editor: { index: 6, name: "editor", list: filteredList("editor") },
    file: { index: 7, name: "file", list: filteredList("file") },
    image: { index: 8, name: "image", list: filteredList("image") },
    maps: { index: 9, name: "maps", list: filteredList("maps") },
    navigation: {
      index: 10,
      name: "navigation",
      list: filteredList("navigation"),
    },
    notification: {
      index: 11,
      name: "notification",
      list: filteredList("notification"),
    },
    places: { index: 12, name: "places", list: filteredList("places") },
    social: { index: 13, name: "social", list: filteredList("social") },
    toggle: { index: 14, name: "toggle", list: filteredList("toggle") },
  },
  fontAwesome: {
    regular: {
      index: 0,
      name: "regular",
      list: fontAwesomeFilteredList("regular"),
    },
    solid: { index: 1, name: "solid", list: fontAwesomeFilteredList("solid") },
    brands: {
      index: 2,
      name: "brands",
      list: fontAwesomeFilteredList("brands"),
    },
  },
};
