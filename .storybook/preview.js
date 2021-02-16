import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import React from "react";

library.add(fas, far, fab);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  backgrounds: {
    default: "gray",
    values: [
      {
        name: "gray",
        value: "gray",
      },
    ],
  },
};
export const decorators = [
  (Story) => (
      <div style={{ backgroundColor: "white" }}>
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        <Story />
      </div>
  ),
];
