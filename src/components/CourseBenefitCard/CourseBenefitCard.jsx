import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import SocialIcons from '../SocialIcons/SocialIcons'

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    margin:0,
    padding:0
  },
  media: {
    height: 300
    
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
  //   position: absolute;
  //     content: "";
  //     width: 5px;
  //     height: 5px;
  //     left: 0;
  //     top: calc( 50% - 2px);
  //     border-radius: 20px;
  //     background: #f65d5d;
})

export default function CourseBenefitCard ({img}) {
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
          <h2 component='h2'>The Perfect Dose</h2>
          <p>
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain
          </p>
        </div>
        <div className={classes.footer}>
          <div style={{ padding: '12px 0 0 12px' }}>Health & Beauty</div>
          <div>
            <SocialIcons small={true} />
          </div>
        </div>
      </Card>
    </Grid>
  )
}
