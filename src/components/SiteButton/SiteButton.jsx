import React from 'react'
import './SiteButton.css'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  siteButtonDiv: {
    display: 'flex',
  }
}))
const SiteButton = ({text}) => {
  const classes = useStyles()
  return (
    <div className={classes.siteButtonDiv}>
      <Button className='site-btn'>{text}</Button>
    </div>
  )
}

export default SiteButton
