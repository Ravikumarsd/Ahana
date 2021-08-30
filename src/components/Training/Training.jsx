import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { TrainingCard } from '../TrainingCard/TrainingCard'
const useStyles = makeStyles(theme => ({
  trainingCard: {
    maxWidth: '75%',
    margin: theme.spacing(6)
  }
}))
const renderTrainingCards = classes => {
  return (
    <Grid container spacing={2}>
      <Grid sx={12} sm={6}>
        <div className={classes.trainingCard}>
          <TrainingCard image='../img/trainer/1.png' />
        </div>
        <div className={classes.trainingCard}>
          <TrainingCard image='../img/trainer/2.png' />
        </div>
        <div className={classes.trainingCard}>
          <TrainingCard image='../img/trainer/3.png' />
        </div>
      </Grid>
      <Grid sx={12} sm={6}>
        <div className={classes.trainingCard}>
          <TrainingCard image='../img/trainer/4.png' />
        </div>
        <div className={classes.trainingCard}>
          <TrainingCard image='../img/trainer/5.png' />
        </div>
        <div className={classes.trainingCard}>
          <TrainingCard image='../img/trainer/6.png' />
        </div>
      </Grid>
    </Grid>
  )
}
const Training = () => {
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
            title='Training'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </div>
      </div>
      <div>{renderTrainingCards(classes)}</div>
    </div>
  )
}

export default Training
