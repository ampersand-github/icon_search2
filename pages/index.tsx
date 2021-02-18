import Layout from "../src/components/templates/Layout";
import React, { useReducer } from "react";
import { MyTabPanel } from "../src/components/organisms/MyTabPanel";
import { TabContext } from "../src/store/tab/provider";
import { initialState } from "../src/store/tab/initialState";
import { reducers } from "../src/store/tab/reducers";
import { MyTabs } from "../src/components/molecules/MyTabs";

const IndexPage: React.FC = () => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <TabContext.Provider value={{ state, dispatch }}>
      <Layout>
        <MyTabs />
        <MyTabPanel />
      </Layout>
    </TabContext.Provider>
  );
};

export default IndexPage;
/*
     <MyTabs />
        <MyTabPanel />
 */
