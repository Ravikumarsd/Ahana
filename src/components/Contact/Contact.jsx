import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import {
  Grid,
  makeStyles,
  TextareaAutosize,
  TextField
} from '@material-ui/core'
import IconTextBox from '../IconTextBox/IconTextBox'
import SocialIcons from '../SocialIcons/SocialIcons'
import SiteButton from '../SiteButton/SiteButton'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    padding: '0 0.8rem',
    borderRadius: '41px',
    border: '1px solid #e6e6e6',
    background: '#fafafa',
    fontSize: '14px',
    color: '#999999'
  },
  textArea: {
    margin: theme.spacing(1),
    border: '1px solid #e6e6e6',
    background: '#fafafa',
    fontSize: '14px',
    padding: '0 0.8rem',
    borderRadius: '4px',
    width: '25rem'
  },
  heading: {
    margin: '5px 8px'
  },
  map: {
    position: 'relative',
    height: '550px',
    background: '#ddd',
    borderRadius: '13px',
    marginBottom: '65px',
    overflow: 'hidden',
    boxShadow: '0px 12px 32px rgba(72, 105, 114, 0.15)',
    '& iframe': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0'
    }
  }
}))

const Contact = () => {
  const classes = useStyles()
  const renderContactInfo = classes => {
    return (
      <Grid item xs={12} sm={6}>
        <div>
          <div className={classes.heading}>Visit the Yoga Ahana</div>
          <div>
            <IconTextBox icon='map' text='184 Main Collins Street' />
          </div>
        </div>
        <div>
          <div className={classes.heading}>Message Us</div>
          <div>
            <IconTextBox icon='map' text='(965) 436 3274' />
            <IconTextBox icon='map' text='mapahana.yoga@gmail.com' />
          </div>
        </div>
        <div>
          <div className={classes.heading}>Opening Hours</div>
          <div>
            <IconTextBox icon='map' text='Fri: 6:30am - 07:45pm' />
            <IconTextBox icon='map' text='Sun: 8:30am - 05:45pm' />
          </div>
        </div>
        <div style={{ margin: '1rem 0' }}>
          <SocialIcons />
        </div>
      </Grid>
    )
  }
  const renderSendMessage = classes => {
    return (
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                className={classes.margin}
                id='first-name'
                placeholder='First Name'
                onChange={e => {
                  setFirstName(e.target.value)
                }}
              />
            </div>
            <div>
              <TextField
                className={classes.margin}
                id='second-name'
                placeholder='Second Name'
                onChange={e => {
                  setSecondName(e.target.value)
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                className={classes.margin}
                id='email'
                placeholder='Email'
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div>
              <TextField
                className={classes.margin}
                id='phone'
                placeholder='Phone'
                onChange={e => {
                  setPhone(e.target.value)
                }}
              />
            </div>
          </Grid>
          <Grid item sx={12}>
            <TextareaAutosize
              className={classes.textArea}
              aria-label='minimum height'
              minRows={8}
              placeholder='Message'
              onChange={e => {
                setMessage(e.target.value)
              }}
            />
            <SiteButton onClick={onSendMessageClick} text='send  Message' />
          </Grid>
        </Grid>
      </Grid>
    )
  }
  const onSendMessageClick = () => {
    alert(
      `firstName: ${firstName},secondName: ${secondName}, email: ${email}, phone:${phone}, message:${message}`
    )
  }
  const [firstName, setFirstName] = React.useState('')
  const [secondName, setSecondName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')

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
      <div style={{ padding: '5rem 5rem 0 5rem' }}>
        <div className={classes.map}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd'
            style={{ border: '0' }}
            allowFullScreen=''
          ></iframe>
        </div>
      </div>
      <div style={{ margin: '5rem 0 5rem 3rem' }}>
        <Grid container>
          {renderContactInfo(classes)}
          {renderSendMessage(classes)}
        </Grid>
      </div>
    </div>
  )
}

export default Contact
