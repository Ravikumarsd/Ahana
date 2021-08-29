import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'

const Contact = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(../img/pagetopbg.jpg)` }}
        className='section-top'
      >
        <div className='page-top-section'>
          <SectionTitle
            color='#fff'
            title='Contact'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
