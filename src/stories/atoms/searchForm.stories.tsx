import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SearchForm from "../../components/atoms/searchForm";

export default {
  title: "atoms/SearchForm",
  component: SearchForm,
} as Meta;

export const searchForm: React.FC = () => {
  return <SearchForm />;
};
