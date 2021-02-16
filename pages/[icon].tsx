import Layout from "../src/components/templates/Layout";
import React from "react";
import { useRouter } from "next/router";

const IconPage: React.FC = () => {
  const router = useRouter();

  return (
    <Layout>
      <section>
        <p>{router.query.icon}</p>
      </section>
    </Layout>
  );
};
export default IconPage;
