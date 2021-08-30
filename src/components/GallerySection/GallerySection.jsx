import React from 'react'
import './GallerySection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Grid, useMediaQuery } from '@material-ui/core'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import InstagramIcon from '@material-ui/icons/Instagram'
SwiperCore.use([Autoplay, Pagination, Navigation])

const GallerySection = () => {
  const renderSlides = () => {
    return [1, 2, 3, 4, 5, 6].map(val => {
      return (
        <SwiperSlide>
          <div className='gallery-section-item'>
            <img src={`../img/gallery/${val}.jpg`} alt='' />
            <div className='gallery-section-hover'>
              <InstagramIcon fontSize='large' style={{ color: '#fff' }} />
              <p style={{ color: '#fff' }}>ahana.yoga</p>
            </div>
          </div>
        </SwiperSlide>
      )
    })
  }
  return (
    <div className='swiper-gallery'>
      <Swiper
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={0}
        loop={true}
        grabCursor={true}
        // pagination={{
        //   clickable: true
        // }}
        className='mySwiper'
      >
        {renderSlides()}
        {/* <SwiperSlide>
          <img src='../img/gallery/2.jpg' alt='' srcset='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../img/gallery/3.jpg' alt='' srcset='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../img/gallery/4.jpg' alt='' srcset='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../img/gallery/5.jpg' alt='' srcset='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../img/gallery/6.jpg' alt='' srcset='' />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default GallerySection
