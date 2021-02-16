import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Layout from "../../components/templates/Layout";

export default {
  title: "templates/layout",
  component: Layout,
} as Meta;

export const layout: React.FC = () => {
  return <Layout />;
};
