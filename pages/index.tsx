import Layout from "../src/components/templates/Layout";
import React, { useReducer } from "react";
import { MyTabPanel } from "../src/components/organisms/MyTabPanel";
import { TabContext } from "../src/store/tab/provider";
import { initialState } from "../src/store/tab/initialState";
import { reducers } from "../src/store/tab/reducers";
import { MyTabs } from "../src/components/molecules/MyTabs";
import { Box, Container } from "@material-ui/core";

const IndexPage: React.FC = () => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <TabContext.Provider value={{ state, dispatch }}>
      <section>
        <Layout>
          <Container maxWidth={"lg"}>
            <MyTabs />
          </Container>
          <div style={{ backgroundColor: "#E6F2FF" }}>
            <Container maxWidth={"lg"}>
              <Box height={8} />
              <MyTabPanel />
            </Container>
          </div>
        </Layout>
      </section>
    </TabContext.Provider>
  );
};

export default IndexPage;
