import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { MyContents } from "../../components/organisms/contents";

export default {
  title: "organisms/Contents",
  component: MyContents,
} as Meta;

export const Contents: React.FC = () => {
  return <MyContents />;
};
