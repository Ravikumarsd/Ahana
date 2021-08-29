import React from 'react'
import './IconTextBox.css'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  iconTextbox: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 6px'
  },
  iconTextboxIcon: {
    padding: '3px 8px 0 0'
  }
}))

const IconTextBox = ({ text, icon }) => {
  const classes = useStyles()
  return (
    <div className={classes.iconTextbox}>
      <div className={classes.iconTextboxIcon}>
        <Icon fontSize='small' style={{ color: '#f65d5d' }}>
          {icon}
        </Icon>
      </div>
      <div>{text}</div>
    </div>
  )
}

export default IconTextBox
