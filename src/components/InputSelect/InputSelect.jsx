import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import "./InputSelect.css"
const InputSelect = ({ data, placeholder }) => {
  const [value, setValue] = React.useState('')
  const handleChange = event => {
    setValue(event.target.value)
  }
  return (
    <div>
      <TextField
        id='text-field'
        select
        value={value}
        onChange={handleChange}
      >
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
