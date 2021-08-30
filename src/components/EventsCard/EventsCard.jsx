import { Card, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'
import IconTextBox from '../IconTextBox/IconTextBox'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxHeight: 180,
    maxWidth:460
  },
  imageContainer: {
    '& img': {
      height: 180
    }
  },
  textContainer: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingRight:theme.spacing(2)
  },
  heading: {
    padding: '0 0 0.5rem 0.8rem'
  }
}))
const EventsCard = ({ image }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <div className={classes.imageContainer}>
        <img src={image} alt='' />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.heading}>Lole White Yoga Tour</div>
        <div>
          <div>
            <IconTextBox icon='person' text='Kelly Alexander' />
          </div>
          <div>
            <IconTextBox icon='eventavailabal' text='15 January, 2019' />
          </div>
          <div>
            <IconTextBox icon='map' text='184 Main Collins Street' />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default EventsCard
