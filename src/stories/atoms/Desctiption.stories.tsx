import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import {Description} from "@material-ui/icons";


export default {
  title: 'atoms/Description',
  component: Description,
} as Meta

export const description:React.FC = () => {
  return <Description />
}
