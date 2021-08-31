import React from 'react'
import './VerticalSwiper.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Grid } from '@material-ui/core'

// Import Swiper styles

import 'swiper/swiper-bundle.css'
 
//  
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

export default function VerticalSwiper () {
  return (
    <div className="vertical-swiper-home">
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        direction='vertical'
        effect='fade'
        pagination={{
          clickable: true
        }}
        noSwiping={true}
        noSwipingClass="mySwiper"
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
    </div>
  )
}
