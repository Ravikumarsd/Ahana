import React from 'react'
import { Card, CardMedia, makeStyles } from '@material-ui/core'
import IconTextBox from '../IconTextBox/IconTextBox'
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 0,
    padding: 0
  },
  media: {
    height: 200
  }
})
const PopularClassesCard = () => {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image='../img/event/1.jpg'
          title='Contemplative Reptile'
        />
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <div>Yoga Blance</div>
          <div style={{ display:'flex',flexDirection:"column",alignItems:"center",paddingTop:"1rem"}}>
            <IconTextBox text='Mon, Wed, Fri' icon='eventavailable' />
            <IconTextBox text='06:30pm - 07:45pm' icon='alarm' />
            <IconTextBox text='Carolyn Berry' icon='person' />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default PopularClassesCard
