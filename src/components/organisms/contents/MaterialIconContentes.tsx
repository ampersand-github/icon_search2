import React, { useContext } from "react";
import { Box, Tab, Tabs } from "@material-ui/core";
import { TabPanel } from "../../atoms/TabPanel";
import { IconList } from "./IconList";
import { childA11yProps } from "../MyTabPanel";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { generateMaterialUrl } from "../../../utils/functions/generateMaterialIconUrl";
import { genreConstants } from "../../../constants/genreConstants";
import { TabContext } from "../../../store/tab/provider";

const useStyles = makeStyles(() => {
  return createStyles({
    tab: { textTransform: "none", minWidth: 72 },
  });
});
export const MaterialIconContents: React.FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(TabContext);
  const mUrl = generateMaterialUrl;

  const tab = () => {
    const items = [];
    for (const value of Object.values(genreConstants.material)) {
      items.push(
        <Tab
          className={classes.tab}
          label={value.name}
          key={value.name}
          {...childA11yProps(value.index)}
        />
      );
    }
    return (
      <Tabs
        value={state.currentMaterialChildTabIndex}
        onChange={(_, value) => {
          dispatch({ type: "CHANGE_MATERIAL_CHILD_TAB", index: value });
        }}
        aria-label="childTabs"
        variant="scrollable"
      >
        {items}
      </Tabs>
    );
  };
  const tabPanes = () => {
    const items = [];
    for (const value of Object.values(genreConstants.material)) {
      items.push(
        <TabPanel
          value={state.currentMaterialChildTabIndex}
          index={value.index}
          key={value.index}
        >
          <IconList iconDataList={value.list} generateUrl={mUrl} />
        </TabPanel>
      );
    }
    return <div>{items}</div>;
  };
  return (
    <Box>
      {tab()}
      {tabPanes()}
    </Box>
  );
};
