import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { TabPanel } from '../../components/atoms/TabPanel'

export default {
  title: 'atoms/TabPanel',
  component: TabPanel,
} as Meta

export const TabPanel_見える: React.FC  = () => {
  return (
    <TabPanel index={0} value={0}>
      <div>indexが0でvalueが0なのでこれは見えるTAB</div>
    </TabPanel>
  )
}
export const TabPanel_見えない: React.FC  = () => {
  return (
    <TabPanel index={0} value={1}>
      <div>indexが0でvalueが0なのでこれは見えるTAB</div>
    </TabPanel>
  )
}
