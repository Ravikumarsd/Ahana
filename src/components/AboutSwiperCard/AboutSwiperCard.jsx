import React from 'react'
import { Card, Grid, makeStyles, Paper, useMediaQuery } from '@material-ui/core'
import SocialIcons from '../SocialIcons/SocialIcons'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'visible',
    maxWidth: 420
  },
  column: {
    display: 'flex',
    overflow: 'visible',
    flexDirection: 'column-reverse',
    height: 420
  },
  textContainer: {
    alignSelf: 'center',
    padding: theme.spacing(2)
  },
  name: {
    fontWeight: '400',
    fontFamily: 'Playfair Display, serif',
    marginBottom: '10px',
    fontSize: '20px',
    margin: '0',
    color: '#333333'
  },
  role: {
    color: '#f65d5d',
    marginBottom: '20px',
    fontSize: '14px',
    fontWeight: '600',
    margin: '0'
  },
  certificate: {
    fontSize: '12px',
    color: '#666666',
    lineHeight: '1.8'
  },
  imageContainer: {
    position: 'relative',
    textAlign: 'center',
    top: '-25px'
  }
}))
export const AboutSwiperCard = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:960px)')
  const match800 = useMediaQuery('(min-width:800px)') //row
  const match600 = useMediaQuery('(min-width:600px)') //col-reverse
  console.log('match800 ===>', match800)
  console.log('match600 ===>', match600)
  //   const getClasses = () => {
  //     if (match960) {
  //       return classes.column
  //     }
  //     //  else if (match600) {
  //     //   return classes.column
  //     // }
  //   }
  //   item xs={12} sm={6} md={4}
  return (
    <Card className={`${matches ? classes.root : classes.column}`}>
      <div className={classes.textContainer}>
        <div className={classes.name}>Lori Kenedy</div>
        <div className={classes.role}>Yoga trainer</div>
        <div className={classes.certificate}>
          Yoga & Therapy Certificate of Uttarakhand University Sanskrit
        </div>
        <div>
          <SocialIcons />
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img src='../img/trainer/1.png' alt='' />
      </div>
    </Card>
  )
}
