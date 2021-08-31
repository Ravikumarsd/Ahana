import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  search: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))
const Search = () => {
  const classes = useStyles()
  return (
    <div
      style={{ backgroundImage: `url(../img/pagetopbg.jpg)` }}
      className='section-top'
    >
      <div className='page-top-section'>
        <SectionTitle
          color='#fff'
          title='Contact'
        />
      </div>
    </div>
  )
}

export default Search
