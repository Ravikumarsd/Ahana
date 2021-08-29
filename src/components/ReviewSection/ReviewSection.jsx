import { makeStyles } from '@material-ui/core'
import React from 'react'
import ReviewSlider from '../ReviewSlider/ReviewSlider'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Grid, useMediaQuery } from '@material-ui/core'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

const useStyles = makeStyles(theme => ({
  reviewSection: {}
}))

const ReviewSection = () => {
  const classes = useStyles()
  return (
    <div
      style={{
        backgroundImage: `url(../img/review-bg.jpg)`,
        paddingTop: '110px',
        paddingBottom: '105px'
      }}
      className='section-top horizontal-swiper-review'
    >
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        effect='fade'
        pagination={{
          clickable: true
        }}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true
        }}
      >
        <SwiperSlide>
          <ReviewSlider img={'../img/classes/author/1.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider img={'../img/classes/author/2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider img={'../img/classes/author/3.jpg'} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ReviewSection
