import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { MyHeader } from "../../components/organisms/header";

export default {
  title: "organisms/Header",
  component: MyHeader,
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Header: React.FC = () => {
  return <MyHeader />;
};
