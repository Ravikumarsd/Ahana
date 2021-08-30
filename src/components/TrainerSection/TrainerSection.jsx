import React from 'react'
import HorizontalSwiper from '../HorizontalSwiper/HorizontalSwiper'
import SectionTitle from '../SectionTitle/SectionTitle'

const TrainerSection = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <SectionTitle
        textAlign='center'
        logo='../img/icons/logoicon.png'
        title='OUR TRAINER YOGA'
        description='Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!'
      />
      <div>
        <HorizontalSwiper />
      </div>
    </div>
  )
}

export default TrainerSection
