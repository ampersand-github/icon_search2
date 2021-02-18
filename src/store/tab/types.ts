import React from 'react'

/*
interface ContextType {
  currentTabIndex: number
  //handleTabChange: (_event: React.ChangeEvent<HTMLInputElement>, value: number) => void
  handleTabChange: (_event: React.ChangeEvent<any>, value: number) => void
}

interface ContextType {
  currentChildTabIndex: number
  //handleChildTabChange: (_event: React.ChangeEvent<HTMLInputElement>, value: number) => void
  handleChildTabChange: (_event: React.ChangeEvent<any>, value: number) => void
}

 */
export type reducerContextType = {
  state: stateType
  dispatch: React.Dispatch<Action>
}

export type stateType = {
  currentTabIndex: number
  currentMaterialChildTabIndex: number
  currentAwesomeChildTabIndex: number
}

export type Action =
  | { type: 'CHANGE_TAB'; index: number }
  | { type: 'CHANGE_MATERIAL_CHILD_TAB'; index: number }
  | { type: 'CHANGE_AWESOME_CHILD_TAB'; index: number }
