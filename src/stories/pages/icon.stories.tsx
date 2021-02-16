import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import IconPage from "../../../pages/[icon]";
import { withNextRouter } from "storybook-addon-next-router";
export default {
  title: "pages/icon",
  component: IconPage,
  decorators: [withNextRouter],
} as Meta;

export const iconPage: any = () => {
  return <IconPage />;
};
iconPage.story = {
  parameters: {
    nextRouter: {
      path: "/[icon]",
      asPath: "/",
      query: {
        icon: "aaaaa",
      },
    },
  },
};
