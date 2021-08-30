import { Grid, makeStyles,useMediaQuery } from '@material-ui/core'
import React from 'react'
import EventsCard from '../EventsCard/EventsCard'
import SectionTitle from '../SectionTitle/SectionTitle'


const renderEventsCard = classes => {
  return (
    <Grid container spacing={2}>
      <Grid sx={12} md={6}>
        <div className={classes.eventsCard}>
          <EventsCard image='../img/event/1.jpg' />
        </div>
        <div className={classes.eventsCard}>
          <EventsCard image='../img/event/2.jpg' />
        </div>
        <div className={classes.eventsCard}>
          <EventsCard image='../img/event/3.jpg' />
        </div>
        <div className={classes.eventsCard}>
          <EventsCard image='../img/event/4.jpg' />
        </div>
      </Grid>
      <Grid sx={12} md={6}>
        <div className={classes.eventsCard}>
          <EventsCard image='../img/event/5.jpg' />
        </div>
        <div className={classes.eventsCard}>
          <EventsCard image='../img/event/6.jpg' />
        </div>
        <div className={classes.eventsCard}>
          <EventsCard image='../img/event/7.jpg' />
        </div>
        <div className={classes.eventsCard}>
          <EventsCard image='../img/event/8.jpg' />
        </div>
      </Grid>
    </Grid>
  )
}
const useStyles = makeStyles(theme => ({
  cardsContainer: {
    marginLeft: '8rem',
    marginRight: '4rem',
    marginTop: '100px',
    marginBottom: '100px'
  },
  eventsCard: {
    margin: '1rem'
  },
  cardsContainer500:{
    justifyContent:'center',
    marginTop: '100px',
    marginBottom: '100px'
  }
}))
const Events = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:500px)')
  return (
    <div>
      <div
        style={{ backgroundImage: `url(../img/pagetopbg.jpg)` }}
        className='section-top'
      >
        <div className='page-top-section'>
          <SectionTitle
            color='#fff'
            title='Events'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </div>
      </div>
      <div className={matches?classes.cardsContainer500:classes.cardsContainer}>{renderEventsCard(classes)}</div>
    </div>
  )
}
export default Events
