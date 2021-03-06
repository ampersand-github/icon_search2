import React, { useContext } from "react";
import { Box, Tab, Tabs } from "@material-ui/core";
import { TabPanel } from "../../atoms/TabPanel";
import { IconList } from "./IconList";
import { childA11yProps } from "../MyTabPanel";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { genreConstants } from "../../../constants/genreConstants";
import { generateFontAwesomeUrl } from "../../../utils/functions/generateFontAwesomeIconUrl";
import { TabContext } from "../../../store/tab/provider";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
const useStyles = makeStyles(() => {
  return createStyles({
    tab: { textTransform: "none", minWidth: 72 },
  });
});
export const FontAwesomeContents: React.FC = () => {
  const classes = useStyles();
  const mUrl = generateFontAwesomeUrl;
  const { state, dispatch } = useContext(TabContext);

  const tab = () => {
    const items = [];
    for (const value of Object.values(genreConstants.fontAwesome)) {
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
        value={state.currentAwesomeChildTabIndex}
        onChange={(_, value) => {
          dispatch({ type: "CHANGE_AWESOME_CHILD_TAB", index: value });
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
    for (const value of Object.values(genreConstants.fontAwesome)) {
      items.push(
        <TabPanel
          value={state.currentAwesomeChildTabIndex}
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
      <Box height={32} />
      {tabPanes()}
    </Box>
  );
};
