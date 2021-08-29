import React from 'react'
import { Grid, Paper, makeStyles } from '@material-ui/core'

import SiteButton from '../SiteButton/SiteButton'
import SectionTitle from '../SectionTitle/SectionTitle'

import { aboutSectionList } from '../../utils'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: 'none'
  }
}))
const renderWelcomeItems = () => {
  const noOfItems = 3
  const home = true
  return aboutSectionList(noOfItems, home)
}

const Welcome = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid className={classes.item} item xs={12}>
        <Paper className={classes.paper}>
          <SectionTitle
            logo={`../img/icons/logoicon.png`}
            title='WELCOME TO AHANA'
            description='Practice Yoga to perfect physical beauty, take care of your soul and
          enjoy life more fully!'
          />
        </Paper>
      </Grid>
      <Grid className={classes.item} item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <div>
            <img src={`../img/about.png`} alt='' />
          </div>
        </Paper>
      </Grid>
      <Grid className={classes.item} item xs={12} sm={6}>
        <Paper className={classes.paper}>
          {renderWelcomeItems()}
          <SiteButton />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Welcome
