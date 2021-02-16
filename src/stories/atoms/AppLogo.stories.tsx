import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import AppLogo from "../../components/atoms/AppLogo";

export default {
  title: "atoms/AppLogo",
  component: AppLogo,
} as Meta;

export const AppLogo_story: React.FC = () => {
  return <AppLogo />;
};
