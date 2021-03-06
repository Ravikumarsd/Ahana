import React from 'react'
import './HorizontalSwiper.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Grid, useMediaQuery } from '@material-ui/core'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import { TrainingCard } from '../TrainingCard/TrainingCard'


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])
const HorizontalSwiper = () => {
  const matches = useMediaQuery('(max-width:860px)')
  return (
    <div className='horizontal-swiper-trainer'>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        effect='fade'
        // pagination={{
        //   clickable: true
        // }}
        slidesPerView={matches ? 1 : 2}
        loop={true}
        // pagination={{
        //   clickable: true
        // }}
        className='horizontal-swiper-trainer'
      >
        <SwiperSlide>
          <TrainingCard image={'../img/trainer/1.png'} />
        </SwiperSlide>
        <SwiperSlide>
          <TrainingCard image={'../img/trainer/2.png'} />
        </SwiperSlide>
        <SwiperSlide>
          <TrainingCard image={'../img/trainer/3.png'} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HorizontalSwiper
