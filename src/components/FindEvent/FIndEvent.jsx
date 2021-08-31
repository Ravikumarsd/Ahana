import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { EventAvailable, Map, SearchOutlined } from '@material-ui/icons'
import SiteButton from '../SiteButton/SiteButton'
import { Card, Paper, useMediaQuery } from '@material-ui/core'

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
  findEventCard: {},
  root: {
    justifyContent: 'center',
    margin: '1rem',
    padding: '2rem 0',
    flexGrow: 1,
    position: 'absolute',
    top: '54%',
    left: '10%'
  },
  text: { marginTop: '12px', marginLeft: '5px' },
  btn: {
    marginTop: '5px',
    marginLeft: '5px'
  },
  textGrid: {
    position: 'absolute',
    left: 0,
    top: 0
  }
}))

export default function FindEvent () {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:1186px)')
  return (
    <Card className={classes.root}>
      <Grid container justifyContent={'center'}>
        <Grid item className={matches?classes.textGrid:""}>
          <div className={classes.text}>Showing 8 classes of 30 classes</div>
        </Grid>
        <Grid item >
          <Grid container >
            <Grid item xs={3}>
              <TextField
                className={classes.margin}
                id='event-date'
                type='date'
                placeholder='Event date'
                // style={{marginRight:"80px"}}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.margin}
                id='event-search'
                placeholder='Search'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <SearchOutlined />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.margin}
                id='event-location'
                placeholder='Location'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Map />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <div className={classes.btn}>
                <SiteButton text='find event' />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}
