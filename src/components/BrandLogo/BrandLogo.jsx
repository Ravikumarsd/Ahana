import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  linkStyle: {
    marginLeft: theme.spacing(3)
  }
}))
const BrandLogo = ({onBrandLogoClick}) => {
  const classes = useStyles()
  return (
    <Link onClick={onBrandLogoClick} className={classes.linkStyle} to='/'>
      <img src="/../img/logo.png" alt='Ahana logo' />
    </Link>
  )
}

export default BrandLogo
