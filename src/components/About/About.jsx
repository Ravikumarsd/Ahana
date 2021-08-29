import React from 'react'

import SectionTitle from '../SectionTitle/SectionTitle'
import { aboutSectionList } from '../../utils'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import WWD from '../WWD/WWD'
import TrainerSection from '../TrainerSection/TrainerSection';
import ReviewSection from '../ReviewSection/ReviewSection'

const useStyles = makeStyles(theme => ({
  aboutSectionList: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: 'none'
  }
}))
const About = () => {
  const classes = useStyles()
  return (
    <div>
      <div
        style={{ backgroundImage: `url(../img/pagetopbg.jpg)` }}
        className='section-top'
      >
        <div className='page-top-section'>
          <SectionTitle
            color='#fff'
            title='ABOUT'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </div>
      </div>
      <div className={classes.aboutSectionList}>
        <Grid container spacing={1} justifyContent='center'>
          {aboutSectionList()}
        </Grid>
      </div>
      <WWD />
      <TrainerSection/>
      <ReviewSection/>
    </div>
  )
}

export default About
