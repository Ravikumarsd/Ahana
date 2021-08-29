import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  socialIcons: {
    display: 'flex',
    justifyContent: ''
  }
}))
const SocialIcons = () => {
  const socialIcon = {
    borderRadius: '50%',
    color: '#333333',
    backgroundColor: '#f2f4f5',
    padding: '8px',
    margin: '5px'
  }
  const classes = useStyles()
  return (
    <div className={classes.socialIcons}>
      <FacebookIcon fontSize='large' style={socialIcon} />
      <InstagramIcon fontSize='large' style={socialIcon} />
      <LinkedInIcon fontSize='large' style={socialIcon} />
      <TwitterIcon fontSize='large' style={socialIcon} />
    </div>
  )
}

export default SocialIcons
