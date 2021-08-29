import React from 'react'
import { Grid, Paper, makeStyles } from '@material-ui/core'
import SectionTitle from '../SectionTitle/SectionTitle'

import LinearProgressBar from '../LinearProgressBar/LinearProgressBar'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    backgroundColor: 'transparent',
    padding: theme.spacing(2),
    margin: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: 'none'
  },
  wwd: {
    backgroundColor: '#f9f2f0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    paddingBottom: '55px'
  },
  sectionTitle: {
    marginBottom: theme.spacing(2)
  }
}))

const WWD = () => {
  const matches = useMediaQuery('(min-width:600px)')

  const classes = useStyles()
  return (
    <div
      style={{
        backgroundImage: matches == true ? `url(../img/wwd-bg.jpg)` : ''
      }}
      className={classes.wwd}
    >
      <Grid container spacing={3}>
        <Grid className={classes.item} item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {/* <div>
              <img src={`../img/wwd-bg.jpg`} alt='' />
            </div> */}
          </Paper>
        </Grid>
        <Grid className={classes.item} item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className={classes.sectionTitle}>
              <SectionTitle
                textAlign='left'
                title='WHAT WE DO'
                description='To be invited to the nearest Cali center and get free physical advice to learn more about the program.'
              />
            </div>
            <LinearProgressBar fillPercent={84} label='Breathing' />
            <LinearProgressBar fillPercent={75} label='Metabolism' />
            <LinearProgressBar fillPercent={90} label='Flexibility' />
            <LinearProgressBar fillPercent={78} label='Strongness' />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default WWD
