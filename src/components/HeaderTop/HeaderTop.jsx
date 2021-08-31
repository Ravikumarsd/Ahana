import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import IconTextBox from '../IconTextBox/IconTextBox'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import './HeaderTop.css'
import DropDown from '../DropDown/DropDown'
import { ExpandMore, Menu } from '@material-ui/icons'
import { languageInfo } from '../../data'
import { useMediaQuery } from '@material-ui/core'
import navBarInfo from '../Navbar/navBarInfo'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    textAlign: 'center',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    borderRadius: '0px'
  },
  headerTopLeft: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  headerTopRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  headerMobile:{
    justifyContent:'space-between',
    padding:'0.5rem'
  }
}))

const dropDownValue = myValue => {
  console.log('selected language ==>>', myValue)
}
const HeaderTop = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:620px)')
  let history = useHistory()

  const getDropDownValue = info => {
    // console.log(info)
    if (info && info.to) {
      history.push(info.to)
    }
  }
  return (
    <>
      {!matches ? (
        <Paper className={classes.header}>
          <Grid container className={classes.headerTopLeft}>
            <IconTextBox icon='map' text='184 Main Collins Street' />
            <IconTextBox icon='phone' text='(965) 436 3274' />
          </Grid>
          <Grid container className={classes.headerTopRight}>
            <IconTextBox icon='alarmon' text='Mon - Fri: 6:30am - 07:45pm' />
            <DropDown data={languageInfo} getDropDownValue={dropDownValue}>
              <div style={{ display: 'flex' }}>
                <IconTextBox icon='language' text='Language' />
                <ExpandMore />
              </div>
            </DropDown>
          </Grid>
        </Paper>
      ) : (
        <Paper>
          <Grid container className={classes.headerMobile} >
            <Grid item>
              <DropDown data={languageInfo} getDropDownValue={dropDownValue}>
                <div style={{ display: 'flex' }}>
                  <IconTextBox icon='language' text='Language' />
                  <ExpandMore />
                </div>
              </DropDown>
            </Grid>
            <Grid item>
              <DropDown data={navBarInfo} getDropDownValue={getDropDownValue}>
                <Menu />
              </DropDown>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  )
}

export default HeaderTop
