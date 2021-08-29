import React from 'react'

const SectionTitle = ({ color, textAlign, logo, title, description }) => {
  return (
    <div style={{textAlign}}>
      <div>{logo ? <img src={logo} alt='logo' /> : null}</div>
      <h1 style={{ color, textAlign }}>{title}</h1>
      <div style={{ color, textAlign }}>{description}</div>
    </div>
  )
}

export default SectionTitle
