import { makeStyles, useMediaQuery } from '@material-ui/core'
import React from 'react'
import './Navbar.css'
import navBarInfo from './navBarInfo'
import NavLink from '../NavLink/NavLink'
import { Menu, MenuBook } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  listStyleType: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2)
  }
}))

//478px for all other comps
//840px height for  home

const Navbar = ({ activeHome }) => {
  
  const [active, setActive] = React.useState('')
  const setNavActive = event => {
    const id = event.target.id
    console.log(id)
    setActive(id)
  }
  //todo: optimise the rerendering due to styling applied to nav buttons
  const classes = useStyles()
  
  const renderNavLinkList = () => {
    if (activeHome) {
      navBarInfo = navBarInfo.filter(info => info.id === 'home')
      console.log(navBarInfo)
    }
    return navBarInfo.map(({ id, ...otherInfo }) => (
      <NavLink
        key={id}
        id={id}
        {...otherInfo}
        active={id === active ? true : false}
        setNavActive={setNavActive}
      />
    ))
  }
  
  const matches = useMediaQuery('(max-width:800px)')
  return (
    <div item className={`${classes.listStyleType} navbar`}>
      {matches ? null : renderNavLinkList()}
    </div>
  )
}

export default Navbar
