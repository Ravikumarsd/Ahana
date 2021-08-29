import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
  authorImage: {
    width: '120px',
    height: '120px',
    margin: '0 auto 45px',
    padding: '3px',
    background: '#fff',
    borderRadius: '50%',
    overflow: 'hidden'
  }
}))
const ReviewSlider = () => {
  const classes = useStyles()
  return (
    <div style={{ color: 'white', marginBottom: '1rem' }}>
      <div className={classes.authorImage}>
        <img src='../img/classes/author/1.jpg' alt='' />
      </div>

      <p>
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and
        trouble that are bound to ensue; and equal blame belongs to those who
        fail in their duty through weakness.
      </p>

      <h4>Denise Thomas</h4>

      <h6 style={{ paddingBottom: '1rem' }}>Designer</h6>
    </div>
  )
}

export default ReviewSlider
