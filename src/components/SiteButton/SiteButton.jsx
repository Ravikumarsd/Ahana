import React from 'react'
import './SiteButton.css'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  siteButtonDiv: {
    display: 'flex',
    marginTop:'60px',
    borderRadius:"50px"
  }
}))
const SiteButton = () => {
  const classes = useStyles()
  return (
    <div className={classes.siteButtonDiv}>
      <Button className='site-btn'>Overrides CSS</Button>
    </div>
  )
}

export default SiteButton
