import { Grid } from '@material-ui/core'
import React from 'react'
import FooterBottom from '../FooterBottom/FooterBottom'
import IconTextBox from '../IconTextBox/IconTextBox'
import './Footer.css'
// const useStyles = (makeStyles = theme => ({
//   footer: {
//     ':a': {

//     }
//   }
// }))
const Footer = () => {
  //   const classes = useStyles()
  return (
    <div className='footer'>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <div className='logo'>
              <img src='../img/logo-3.png' alt='' srcset='' />
            </div>
            <div className='logo-text'>
              Lorem ipsum dolor sit amet, consec-tetur adipiscing elit sed
            </div>
            <IconTextBox text='(965) 436 3274' icon='call' />
            <IconTextBox text='ahana.yoga@gmail.com' icon='mail' />
            <IconTextBox text='184 Main Collins Street' icon='map' />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <div class='heading'>COMPANY</div>
            <div
              style={{
                paddingTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
              }}
            >
              <a>Online Education</a>
              <a>Gallery</a>
              <a>Special Issues</a>
              <a>Privacy Policy </a>
              <a>Contact Us</a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <div class='heading'>ABOUT US</div>
            <div
              style={{
                paddingTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
              }}
            >
              <a>Our Vision</a>
              <a>Our Mission</a>
              <a>Meet The Team</a>
              <a>Introduce</a>
              <a>Customer Service</a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <div class='heading'>OPEN TIME</div>
            <div
              style={{
                paddingTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
              }}
            >
              <IconTextBox icon='alarm' text='Mon - Fri: 6:30am - 07:45pm' />
              <IconTextBox icon='alarm' text='Mon - Fri: 6:30am - 07:45pm' />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="footer-bottom">
        <FooterBottom />
      </div>
    </div>
  )
}

export default Footer
