import React from 'react'
import { Card, CardMedia, Grid, makeStyles } from '@material-ui/core'
import IconTextBox from '../IconTextBox/IconTextBox'
import SiteButton from '../SiteButton/SiteButton'
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 320,
    margin: '2rem 0'
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    '& img': {
      maxHeight: '240px',
      borderRadius: '50%'
    }
  },
  cardContent: {
    textAlign: 'center'
  },
  iconTextBox: {
    display: 'flex',
    justifyContent: 'center'
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontWeight: '400',
    margin: '15px 0',
    fontSize: '20px'
  },
  text: {
    fontSize: '14px',
    color: '#666666',
    margin: '15px 0'
  },
  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between'

    // imageContainer: {},

    // button: {}
  },
  cardBottomImageText: {
    display: 'flex',
    justifyContent: 'space-between',
    '& img': {
      width: '40px',
      height: '40px',
      borderRadius: '50%'
    }
  },
  textContainer: {
    marginTop: '6px'
  },
  name: {
    fontWeight: '400',
    fontFamily: 'Playfair Display, serif',
    // marginBottom: '10px',
    fontSize: '12px',
    margin: '0',
    color: '#333333'
  },
  role: {
    color: '#f65d5d',
    // marginBottom: '20px',
    fontSize: '10px',
    fontWeight: '600'
    // margin: '0'
  },
  button: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardBottomContainer: {
    padding: '0.5rem 1rem'
  }
}))
const ClassesCard = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <div className={classes.media}>
        <img src='../img/classes/1.jpg' alt='' />
      </div>
      <div className={classes.cardContent}>
        <div className={classes.heading}>Traditional Hatha</div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <div className={classes.iconTextBox}>
              <IconTextBox text='Mon, Wed, Fri' icon='eventavailable' />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.iconTextBox}>
              <IconTextBox text='06:30pm - 07:45pm' icon='alarm' />
            </div>
          </Grid>
        </Grid>
        <div className={classes.text}>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        </div>
      </div>
      <div className={classes.cardBottomContainer}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <div className={classes.cardBottom}>
              <div className={classes.cardBottomImageText}>
                <div className={classes.imageContainer}>
                  <img src='../img/classes/author/1.jpg' alt='' />
                </div>
                <div className={classes.textContainer}>
                  <div className={classes.name}>Victoria Webb</div>
                  <div className={classes.role}>Yoga Trainer</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.button}>
              <SiteButton text='book now' />
            </div>
          </Grid>
        </Grid>
      </div>
    </Card>
  )
}

export default ClassesCard
