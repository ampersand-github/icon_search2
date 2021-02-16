import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Description from '../../components/atoms/Desctiption'

export default {
  title: 'atoms/Description',
  component: Description,
} as Meta

export const Description_story = () => {
  return <Description />
}
