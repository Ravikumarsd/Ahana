import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  aboutSection: {
    display: 'flex',
    marginBottom: theme.spacing(3)
  },
  aboutSectionIcon: {
    height: 'fit-content',
    width: '113px',
    border: '1px solid #f1f4f4',
    borderRadius: '50%',
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    // marginBottom: theme.spacing(1)
  },
  aboutSectionIconWrapper: {
    height: '90px',
    width: '90px',
    border: '1px solid #f1f4f4',
    borderRadius: '50%',
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutSectionText: {
    overflow: 'hidden',
    textAlign: 'start',
    '& h4 ': {
      fontSize: '25px',
      fontWeight: '400',
      fontFamily: 'Playfair Display, serif',
      margin: '0 15px',
      color: '#333333'
    },
    '& p': {
      color: '#666666',
      marginLeft: theme.spacing(2)
    }
  },
  aboutSectionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '70px',
    maxWidth:"960px",
    margin:theme.spacing(2)
  },
  description:{

  }
}))

const AboutSection = ({ id, description, heading, isHome }) => {
  console.log('isHome===>', isHome)
  const classes = useStyles()
  const icon = (
    <div className={classes.aboutSectionIcon}>
      <img src={`../img/icons/about${id}.png`} alt="about" />
    </div>
  )
  
  return (
    <>
      {isHome ? (
        <div className={classes.aboutSection}>
          {icon}
          <div className={classes.aboutSectionText}>
            <h4 className={classes.heading}>{heading}</h4>
            <p className={classes.description}>{description}</p>
          </div>
        </div>
      ) : null}
      {!isHome ? (
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.aboutSectionItem}>
            <div className={classes.aboutSectionIconWrapper}>
              <img src={`../img/icons/about${id}.png`} alt="about"/>
            </div>
            <h4 className={classes.heading}>{heading}</h4>
            <p style={{textAlign:"center",marginTop:0}} className={classes.description}>{description}</p>
          </div>
        </Grid>
      ) : null}
    </>
  )
}

export default AboutSection
