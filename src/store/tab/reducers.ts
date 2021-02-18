import { Action, stateType } from './types'

export const reducers = (state: stateType, action: Action): stateType => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return {
        ...state,
        currentTabIndex: action.index,
      }
    case 'CHANGE_MATERIAL_CHILD_TAB':
      return {
        ...state,
        currentMaterialChildTabIndex: action.index,
      }
    case 'CHANGE_AWESOME_CHILD_TAB':
      return {
        ...state,
        currentAwesomeChildTabIndex: action.index,
      }
    default:
      return state
  }
}
