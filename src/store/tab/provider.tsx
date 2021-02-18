import React, { useReducer } from 'react'
import { reducers } from './reducers'
import { initialState } from './initialState'
import { reducerContextType } from './types'

interface Props {
  children?: React.ReactNode
}

export const TabContext = React.createContext({} as reducerContextType)

export const TabProvider: React.FC<Props> = (props: Props) => {
  const [state, dispatch] = useReducer(reducers, initialState)
  return (
    <TabContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TabContext.Provider>
  )
}
