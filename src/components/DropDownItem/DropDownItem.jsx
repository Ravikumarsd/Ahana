import React from 'react'
import { MenuItem } from '@material-ui/core'

const DropDownItem = ({id, handleClose }) => {
  return (
    <MenuItem data-my-value={id} onClick={handleClose}>
      <div style={{textTransform:"uppercase"}}>{id}</div>
    </MenuItem>
  )
}

export default DropDownItem
