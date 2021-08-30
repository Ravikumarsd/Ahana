import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 210,
    marginTop: '5rem'
  },
  media: {
    height: 230
  },
  videoLink: {
    '& img': {
      margin: '0 auto',
      padding: '4rem',
      position: 'relative'
    }
  }
})
const VideoCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='../img/video.jpg'>
        <a
          href='https://www.youtube.com/watch?v=vgv-hzTl5FA'
          className={classes.videoLink}
        >
          <img src='../img/icons/play.png' alt='' />
        </a>
      </CardMedia>
    </Card>
  )
}

export default VideoCard
