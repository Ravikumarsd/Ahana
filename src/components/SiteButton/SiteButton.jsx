import React from 'react'
import './SiteButton.css'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  siteButtonDiv: {
    display: 'flex',
    // minWidth:"80px",
    height:"fit-content"
  }
}))
const SiteButton = ({text,onClick}) => {
  const classes = useStyles()
  return (
    <div className={classes.siteButtonDiv}>
      <Button onClick ={onClick} className='site-btn'>{text}</Button>
    </div>
  )
}

export default SiteButton
