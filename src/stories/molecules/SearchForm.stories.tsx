import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import SearchForm from '../../components/molecules/header/SearchForm'

export default {
  title: 'molecules/SearchForm',
  component: SearchForm,
} as Meta

export const SearchForm_story = () => {
  return <SearchForm />
}
