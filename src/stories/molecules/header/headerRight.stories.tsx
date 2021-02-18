import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { HeaderRight } from "../../../components/molecules/header/headerRight";

export default {
  title: "molecules/HeaderRight",
  component: HeaderRight,
} as Meta;

export const headerRight: React.FC = () => {
  return <HeaderRight />;
};
