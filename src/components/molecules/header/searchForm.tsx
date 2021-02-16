import React from 'react'
import { Box, createStyles, Icon, InputBase, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useRouter } from 'next/router'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: 480, // todo ここはレスポンシブ対応、というかthemeへ
      height: 48, // todo ここはレスポンシブ対応
    },
    icon: {
      opacity: 0.54,
    },
  })
)

const SearchForm: React.FC = () => {
  const classes = useStyles()
  const router = useRouter()

  // todo anyの撲滅
  const keyPress = (e:any) => {
    if (e.keyCode === 13) {
      console.log('value', e.target.value)
      e.preventDefault()
      router.push('/searchResult/' + e.target.value)
    }
  }
  return (
    <Paper component="form" className={classes.root}>
      <Box width={8} />
      <Icon className={classes.icon}>search</Icon>
      <Box width={8} />
      <InputBase
        placeholder="特徴を検索..."
        inputProps={{ 'aria-label': 'search characteristic' }}
        onKeyDown={keyPress}
        fullWidth={true}
      />
    </Paper>
  )
}
export default SearchForm
