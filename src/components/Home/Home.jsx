import React from 'react'

import { makeStyles } from '@material-ui/core'
import VerticalSwiper from '../VerticalSwiper/VerticalSwiper'
import Welcome from '../Welcome/Welcome'

const userStyles = makeStyles(themes => ({
  HomeSlider: {
    background: 'linear-gradient( 145deg, #f65d5d 0%, #fdb07d 100%)'
  }
}))
const Home = () => {
  const classes = userStyles()
  return (
    <>
      <div className={classes.HomeSlider}>
        <VerticalSwiper />
      </div>
      <Welcome />
    </>
  )
}

export default Home
