import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  listStyleType: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '400',
    textTransform: 'uppercase'
  },
  navActive: {
    borderBottom: '2px solid #fff'
  }
}))

const NavLink = ({ id, label, to, active, setNavActive }) => {
  const classes = useStyles()
  return (
    <Link
      id={id}
      className={`${classes.linkStyle} ${
        active === true ? classes.navActive : ''
      }`}
      onClick={setNavActive}
      to={to}
    >
      {label}
    </Link>
  )
}

export default NavLink
