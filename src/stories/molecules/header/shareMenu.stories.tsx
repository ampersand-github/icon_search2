import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { ShareMenu } from "../../../components/molecules/header/shareMenu";

export default {
  title: "molecules/shareMenu",
  component: ShareMenu,
} as Meta;

export const shareMenu: React.FC = () => {
  return <ShareMenu />;
};
