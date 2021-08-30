import { Grid } from '@material-ui/core'
import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import SectionTitle from '../SectionTitle/SectionTitle'

const CourseBenefit = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <SectionTitle
        textAlign='center'
        logo='../img/icons/logoicon.png'
        title='COURSE BENEFITS'
        description='Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!'
      />
      <div style={{margin:'4rem'}}>
        <Grid container spacing={1} >
          <BlogCard img={'../img/blog/1.jpg'} />
          <BlogCard img={'../img/blog/2.jpg'} />
          <BlogCard img={'../img/blog/3.jpg'} />
        </Grid>
      </div>
    </div>
  )
}

export default CourseBenefit
