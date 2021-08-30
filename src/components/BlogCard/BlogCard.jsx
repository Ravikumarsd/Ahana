import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import SocialIcons from '../SocialIcons/SocialIcons'

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    marginBottom: '1rem',
    padding: 0
    
  },
  media: {
    height: 300
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
  footer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})

export default function BlogCard ({ img }) {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={img}
          title='Contemplative Reptile'
        />
        <div style={{ textAlign: 'center', padding: '0 1rem' }}>
          <div className={classes.heading}>The Perfect Dose</div>
          <div className={classes.text}>
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.text}>Health & Beauty</div>
          <div>
            <SocialIcons small={true} />
          </div>
        </div>
      </Card>
    </Grid>
  )
}
