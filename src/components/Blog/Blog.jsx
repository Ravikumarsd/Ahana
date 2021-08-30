import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import SectionTitle from '../SectionTitle/SectionTitle'

const renderBlogCards = () => {
  return (
    <Grid container spacing={1}>
      <BlogCard img={'../img/blog/1.jpg'} />
      <BlogCard img={'../img/blog/2.jpg'} />
      <BlogCard img={'../img/blog/3.jpg'} />
      <BlogCard img={'../img/blog/4.jpg'} />
      <BlogCard img={'../img/blog/5.jpg'} />
      <BlogCard img={'../img/blog/6.jpg'} />
      <BlogCard img={'../img/blog/7.jpg'} />
      <BlogCard img={'../img/blog/8.jpg'} />
      <BlogCard img={'../img/blog/9.jpg'} />
    </Grid>
  )
  // ;<BlogCard img={'../img/blog/1.jpg'} />
}
const useStyles = makeStyles(theme=>({
  blogCards:{
    margin:'100px 0',
    marginLeft:"80px"
  }
}))
const Blog = () => {
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
            title='Blog'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </div>
      </div>
      <div className={classes.blogCards}>{renderBlogCards()}</div>
    </div>
  )
}

export default Blog
