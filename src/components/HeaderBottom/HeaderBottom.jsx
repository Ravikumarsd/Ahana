import { makeStyles } from '@material-ui/core'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import BrandLogo from '../BrandLogo/BrandLogo'
import { Search, Sort } from '@material-ui/icons'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  headerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    boxShadow: 'none',
    borderRadius: '0px',
    background: 'transparent',
    maxWidth: '96vw'
  },
  headerBottomRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2)
  },
  icon: {
    marginLeft: theme.spacing(2),
    color: '#fff'
  },
  sortIcon: {
    transform: 'rotate(180deg)'
  }
}))

const HeaderBottom = () => {
  const classes = useStyles()
  const [active, setActive] = React.useState(false)
  const onBrandLogoClick = () => {
    setActive(true)
    console.log('brand logo clicked', active)
  }
  return (
    <Paper className={`${classes.headerBottom}`}>
      <BrandLogo onBrandLogoClick={onBrandLogoClick} />
      <Navbar active={active} />
      {active}
      <div item className={classes.headerBottomRight}>
        <Search className={classes.icon} />
        <Sort className={`${classes.icon} ${classes.sortIcon}`} />
      </div>
    </Paper>
  )
}

export default HeaderBottom
