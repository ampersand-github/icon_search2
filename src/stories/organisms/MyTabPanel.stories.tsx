import React, { useReducer } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { initialState } from "../../store/tab/initialState";
import { TabContext } from "../../store/tab/provider";
import { Action, stateType } from "../../store/tab/types";

export default {
  title: "organisms/MyTabPanel",
  component: MyTabPanel,
} as Meta;

const storiesReducers = (state: stateType, action: Action): stateType => {
  switch (action.type) {
    case "CHANGE_TAB":
      return {
        ...state,
        currentTabIndex: action.index,
      };
    case "CHANGE_MATERIAL_CHILD_TAB":
      return {
        ...state,
        currentMaterialChildTabIndex: action.index,
      };
    case "CHANGE_AWESOME_CHILD_TAB":
      return {
        ...state,
        currentAwesomeChildTabIndex: action.index,
      };
    default:
      return state;
  }
};

export const MaterialMyTabPanel_story = () => {
  const StoriesInitialState = initialState;
  const [state, dispatch] = useReducer(storiesReducers, StoriesInitialState);
  return (
    <TabContext.Provider value={{ state, dispatch }}>
      <MyTabPanel />
    </TabContext.Provider>
  );
};
export const AwesomeMyTabPanel_story = () => {
  const StoriesInitialState = {
    ...initialState,
    currentTabIndex: 1,
  };
  const [state, dispatch] = useReducer(storiesReducers, StoriesInitialState);
  return (
    <TabContext.Provider value={{ state, dispatch }}>
      <MyTabPanel />
    </TabContext.Provider>
  );
};
