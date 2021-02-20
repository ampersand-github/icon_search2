import Layout from "../src/components/templates/Layout";
import React, { useReducer } from "react";
import { MyTabPanel } from "../src/components/organisms/MyTabPanel";
import { TabContext } from "../src/store/tab/provider";
import { initialState } from "../src/store/tab/initialState";
import { reducers } from "../src/store/tab/reducers";
import { MyTabs } from "../src/components/molecules/MyTabs";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  })
);
const IndexPage: React.FC = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <TabContext.Provider value={{ state, dispatch }}>
      <section className={classes.root}>
        <Layout>
          <MyTabs />
          <MyTabPanel />
        </Layout>
      </section>
    </TabContext.Provider>
  );
};

export default IndexPage;
