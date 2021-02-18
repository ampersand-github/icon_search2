import React, { useContext } from 'react'
import { TabPanel } from '../atoms/TabPanel'
import { Box } from '@material-ui/core'

import { useWindowSize } from '../../utils/hooks/useWindowSize'
import { tabIndexConstants } from '../../constants/tabIndexConstants'
import { TabContext } from '../../store/tab/provider'
import { MaterialIconContents } from './contents/MaterialIconContentes'
import { FontAwesomeContents } from './contents/FontAwesomeContents'

// todo 外へ
export const childA11yProps = (index: number) => ({
  id: `child-tab-${index}`,
  'aria-controls': `child-tabPanel-${index}`,
})

export const MyTabPanel: React.FC = () => {
  const { state } = useContext(TabContext)
  console.log(state)
  return (
    <div>
      <Box width={useWindowSize().width}>
        <TabPanel
          value={state.currentTabIndex}
          index={tabIndexConstants.material.index}
        >
          <MaterialIconContents />
        </TabPanel>
        <TabPanel
          value={state.currentTabIndex}
          index={tabIndexConstants.fontAwesome.index}
        >
          <FontAwesomeContents />
        </TabPanel>
      </Box>
    </div>
  )
}
