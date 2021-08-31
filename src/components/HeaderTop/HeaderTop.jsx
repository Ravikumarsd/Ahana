import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import IconTextBox from '../IconTextBox/IconTextBox'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import './HeaderTop.css'
import DropDown from '../DropDown/DropDown'
import { ExpandMore } from '@material-ui/icons'
import { languageInfo } from '../../data'

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
  }
}))

const dropDownValue = myValue => {
  console.log('selected language ==>>', myValue)
}
const HeaderTop = () => {
  const classes = useStyles()
  return (
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
  )
}

export default HeaderTop
