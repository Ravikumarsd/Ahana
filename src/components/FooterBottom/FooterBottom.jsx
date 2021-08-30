import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'
import { Grid, makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  
  footerBottomText: {
    fontSize: '11px',
    color: 'color:#666666',
    marginTop: theme.spacing(2),
    textAlign: 'center',
    justifyContent: 'center'
  }
}))
const FooterBottom = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={1}>
      <Grid item sx={12} sm={6}>
        <div >
          <SocialIcons small={true} />
        </div>
      </Grid>
      <Grid item sx={12} sm={6}>
        <div className={classes.footerBottomText}>
          Copyright ©2021 All rights reserved | This template is made with by
          Colorlib
        </div>
      </Grid>
    </Grid>
  )
}

export default FooterBottom
