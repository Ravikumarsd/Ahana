import { Checkbox, FormControlLabel, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { filter } from '../../data'
import InputSelect from '../InputSelect/InputSelect'
import { CheckCircle, RadioButtonUnchecked } from '@material-ui/icons'
import PopularClassesCard from '../PopularClassesCard/PopularClassesCard'
import VideoCard from '../VideoCard/VideoCard'
import SiteButton from '../SiteButton/SiteButton'
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

const ClassesFilter = () => {
  const classes = useStyles()
  const [category, setCategory] = useState('')
  const [level, setLevel] = useState('')
  const [trainer, setTrainer] = useState('')
  const [days, setDays] = useState([])
  const onFilterBtnClick = () => {
    alert(`category ${category} level ${level} tainer ${trainer} `)
    // alert(`days: ${JSON.stringify(days)}`)
  }
  const renderDayFilters = () => {
    const days = filter.filterByDays
    let selectedDays = []
    const handleCheckBox = e => {
      // console.log('days ===>', days)
      const value = e.target.id
      // console.log('value', value)
      const isChecked = e.target.checked
      // console.log('isChecked', isChecked)
      if (isChecked) {
        selectedDays.push(days.find((day, i) => day.id == value))
      } else {
        const filteredDays = selectedDays.filter(day => day.id != value)
        selectedDays = filteredDays
      }
      setDays(selectedDays)
      console.log('selectedDays ===>', selectedDays)
    }
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div>
            {days.slice(0, 4).map(day => {
              return (
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id={day.id}
                        onChange={handleCheckBox}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={day.day}
                  />
                </div>
              )
            })}
          </div>
        </Grid>
        <Grid item sx={12} sm={6}>
          {days.slice(4, days.length - 1).map(day => {
            return (
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id={day.id}
                      onChange={handleCheckBox}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={day.day}
                />
              </div>
            )
          })}
        </Grid>
      </Grid>
    )
  }

  const renderClassesFilters = classes => {
    return (
      <Grid item sx={12} sm={6}>
        <div className={classes.input}>
          <InputSelect
            data={filter.filterByCategory}
            onChange={e => setCategory(e.target.value)}
            label='select category'
          />
        </div>
        <div className={classes.input}>
          <InputSelect
            data={filter.filterByLevel}
            onChange={e => setLevel(e.target.value)}
            label='select level'
          />
        </div>
        <div className={classes.input}>
          <InputSelect
            data={filter.filterByTrainer}
            onChange={e => setTrainer(e.target.value)}
            label='select trainer'
          />
        </div>
      </Grid>
    )
  }

  return (
    <Grid item item xs={12} sm={4}>
      <div className={classes.filter}>
        <div>SEARCH CLASSES</div>
        {renderClassesFilters(classes)}
        <div> Filter by Day</div>
        {renderDayFilters()}
        <SiteButton onClick={onFilterBtnClick} text='filter now' />
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
