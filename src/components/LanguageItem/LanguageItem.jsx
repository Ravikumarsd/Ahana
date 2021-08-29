import React from 'react'
import { MenuItem } from '@material-ui/core'

const LanguageItem = ({id, handleClose }) => {
  return (
    <MenuItem data-my-value={id} onClick={handleClose}>
      {id}
    </MenuItem>
  )
}

export default LanguageItem
