import { Checkbox, FormControlLabel, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { filter } from '../../data'
import InputSelect from '../InputSelect/InputSelect'
import { CheckCircle, RadioButtonUnchecked } from '@material-ui/icons'
import PopularClassesCard from '../PopularClassesCard/PopularClassesCard'
import VideoCard from '../VideoCard/VideoCard'
const useStyles = makeStyles(theme => ({
  input: {
    margin: '1rem 1rem 1rem 0'
  },
  filter: {
    marginLeft: theme.spacing(4)
  },
  popularClasses: {
    marginTop: theme.spacing(2)
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

const renderDayFilters = () => {
  return (
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
        {filter.filterByDays.slice(4, filter.filterByDays.length).map(day => {
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
  )
}

const ClassesFilter = () => {
  const classes = useStyles()
  //   const [checked, setChecked] = React.useState(true)

  //   const handleChange = event => {
  //     setChecked(event.target.checked)
  //   }

  return (
    <Grid item item xs={12} sm={4}>
      <div className={classes.filter}>
        <div>SEARCH CLASSES</div>
        {renderClassesFilters(classes)}
        <div> Filter by Day</div>
        {renderDayFilters()}
        <div className={classes.popularClasses}>
          <p>POPULAR CLASSES</p>
          <PopularClassesCard />
          <VideoCard />
        </div>
      </div>
    </Grid>
  )
}

export default ClassesFilter
