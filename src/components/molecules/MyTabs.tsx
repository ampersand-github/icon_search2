import React, { useContext } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { tabIndexConstants } from "../../constants/tabIndexConstants";
import { TabContext } from "../../store/tab/provider";

export const a11yProps = (
  index: number
): { id: string; "aria-controls": string } => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabPanel-${index}`,
  };
};

const useStyles = makeStyles(() => {
  return createStyles({
    tab: {
      fontWeight: "bold",
      textTransform: "none",
    },
  });
});

export const MyTabs: React.FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(TabContext);

  return (
    <Tabs
      value={state.currentTabIndex}
      aria-label="tabs"
      onChange={(_, value) => {
        dispatch({ type: "CHANGE_TAB", index: value });
      }}
    >
      <Tab
        className={classes.tab}
        label={tabIndexConstants.material.name}
        {...a11yProps(tabIndexConstants.material.index)}
      />
      <Tab
        className={classes.tab}
        label={tabIndexConstants.fontAwesome.name}
        {...a11yProps(tabIndexConstants.fontAwesome.index)}
      />
    </Tabs>
  );
};
