import { withNextRouter } from "storybook-addon-next-router";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import IndexPage from "../../../pages";
import SearchPage from "../../../pages/search";

export default {
  title: "pages/index",
  component: IndexPage,
  decorators: [withNextRouter],
} as Meta;

export const indexPage: React.FC = () => {
  return <SearchPage />;
};
