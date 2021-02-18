import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { HeaderLeft } from "../../../components/molecules/header/headerLeft";

export default {
  title: "molecules/HeaderLeft",
  component: HeaderLeft,
} as Meta;

export const headerLeft: React.FC = () => {
  return <HeaderLeft />;
};
