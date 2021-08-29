import React from 'react'
import './HorizontalSwiper.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Grid } from '@material-ui/core'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import { AboutSwiperCard } from '../AboutSwiperCard/AboutSwiperCard'
// slidesPerView={3}
//         spaceBetween={30}

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])
const HorizontalSwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      // centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      // direction='vertical'
      effect='fade'
      pagination={{
        clickable: true
      }}
      // navigation={true}
      className='mySwiper'
    >
      <SwiperSlide>
        <Grid>
          <img
            className='vs-img-one'
            src='../img/hero-slider/first.png'
            alt='first'
          />
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid>
          <img
            className='vs-img-two'
            src='../img/hero-slider/second.png'
            alt='second'
          />
        </Grid>
      </SwiperSlide>
      <Grid>
        <SwiperSlide className='vs-img-three'>
          <img className='' src='../img/hero-slider/third.png' alt='third' />
        </SwiperSlide>
      </Grid>
    </Swiper>
  )
}

export default HorizontalSwiper
