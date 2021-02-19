import React from "react";
import Layout from "../../src/components/templates/Layout";
import { Box } from "@material-ui/core";

const SearchPage: React.FC = () => {
  return (
    <Layout>
      <section>入力フォーム</section>
      <Box height={48} />
      <section>結果一覧</section>
    </Layout>
  );
};
export default SearchPage;
