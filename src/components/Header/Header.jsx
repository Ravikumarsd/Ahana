import React from 'react'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import HeaderTop from '../HeaderTop/HeaderTop'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  header: {
    position: 'absolute',
    width: '100%',
    top: '0',
    left: '0',
    zIndex: '99'
  }
}))
const Header = ({}) => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <HeaderTop />
      <HeaderBottom />
    </div>
  )
}

export default Header
