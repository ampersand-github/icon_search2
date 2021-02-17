import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { MyFooter } from "../../components/organisms/footer";

export default {
  title: "organisms/Footer",
  component: MyFooter,
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Footer: React.FC = () => {
  return <MyFooter />;
};
