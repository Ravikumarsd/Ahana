import React from 'react'
import ClassesCard from '../ClassesCard/ClassesCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Grid, makeStyles } from '@material-ui/core'
import ClassesFilter from '../ClassesFilter/ClassesFilter'

const useStyles = makeStyles(theme => ({
  classesSection: {
    margin: '5rem 0 5rem 10rem'
  }
}))

const renderClassesCards = () => {
  return (
    <Grid item xs={12} sm={8}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ClassesCard />
          <ClassesCard />
          <ClassesCard />
          <ClassesCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ClassesCard />
          <ClassesCard />
          <ClassesCard />
          <ClassesCard />
        </Grid>
      </Grid>
    </Grid>
  )
}
const renderClassesSection = () => {
  return (
    <Grid container spacing={1}>
      {renderClassesCards()}
      <ClassesFilter />
    </Grid>
  )
}

const Classes = () => {
  const classes = useStyles()
  return (
    <div>
      <div
        style={{ backgroundImage: `url(../img/pagetopbg.jpg)` }}
        className='section-top'
      >
        <div className='page-top-section'>
          <SectionTitle
            color='#fff'
            title='Classes'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </div>
      </div>
      <div className={classes.classesSection}>{renderClassesSection()}</div>
    </div>
  )
}

export default Classes
