import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import './InputSelect.css'
const InputSelect = ({ data, label, onChange }) => {
  return (
    <div>
      <TextField id='text-field' select helperText={label} onChange={onChange}>
        {data &&
          data.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </TextField>
    </div>
  )
}

export default InputSelect
