import React from "react";

export type reducerContextType = {
  state: stateType;
  dispatch: React.Dispatch<Action>;
};

export type stateType = {
  currentTabIndex: number;
  currentMaterialChildTabIndex: number;
  currentAwesomeChildTabIndex: number;
};

export type Action =
  | { type: "CHANGE_TAB"; index: number }
  | { type: "CHANGE_MATERIAL_CHILD_TAB"; index: number }
  | { type: "CHANGE_AWESOME_CHILD_TAB"; index: number };
