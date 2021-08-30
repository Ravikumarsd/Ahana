import { Checkbox, FormControlLabel, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { filter } from '../../data'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import InputSelect from '../InputSelect/InputSelect'
import {
  CheckCircle,
  CheckCircleOutlineOutlined,
  CheckCircleRounded,
  FiberManualRecord,
  FiberManualRecordOutlined,
  RadioButtonChecked,
  RadioButtonUnchecked
} from '@material-ui/icons'
const useStyles = makeStyles(theme => ({
  input: {
    margin: '1rem 1rem 1rem 0'
  },
  filter: {
    marginLeft: theme.spacing(4)
  }
}))
const renderClassesFilters = classes => {
  return (
    <Grid item sx={12} sm={6}>
      <div className={classes.input}>
        <InputSelect
          data={filter.filterByCategory}
          placeholder='select category'
        />
      </div>
      <div className={classes.input}>
        <InputSelect data={filter.filterByLevel} placeholder='select level' />
      </div>
      <div className={classes.input}>
        <InputSelect
          data={filter.filterByTrainer}
          placeholder='select trainer'
        />
      </div>
    </Grid>
  )
}
const ClassesFilter = () => {
  const classes = useStyles()
  //   const [checked, setChecked] = React.useState(true)

  //   const handleChange = event => {
  //     setChecked(event.target.checked)
  //   }

  return (
    <div className={classes.filter}>
      <div>SEARCH CLASSES</div>
      {renderClassesFilters(classes)}
      <div> Filter by Day</div>
      <Grid item >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div>
              {filter.filterByDays.slice(0, 4).map(day => {
                return (
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={day}
                    />
                  </div>
                )
              })}
            </div>
          </Grid>
          <Grid item sx={12} sm={6}>
            {filter.filterByDays
              .slice(4, filter.filterByDays.length)
              .map(day => {
                return (
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={day}
                    />
                  </div>
                )
              })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ClassesFilter
