import React from 'react'
import Typography from '@material-ui/core/Typography'
import { appConstants } from '../../constants/appConstants'

const Title: React.FC = () => {
  return (
    <Typography variant="h6" noWrap style={{ fontWeight: 'bold' }}>
      {appConstants.applicationTitle}
    </Typography>
  )
}
export default Title
