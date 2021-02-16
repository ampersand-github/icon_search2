import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Title from '../../components/atoms/Title'

export default {
  title: 'atoms/Title',
  component: Title,
} as Meta

export const Title_story: React.FC  = () => {
  return <Title />
}
