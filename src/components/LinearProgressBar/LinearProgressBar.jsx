import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
const useStyles = makeStyles(theme=>({
  root: {
    width: '100%',
    height: '50px'
  },
  label:{
    textAlign:"left",
    marginTop:theme.spacing(1),
    marginBottom:theme.spacing(1)
  }
}))
const LinearProgressBar = ({ label, fillPercent = 95 }) => {
  const classes = useStyles()
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        const diff = Math.random() * 5
        return Math.min(oldProgress + diff, fillPercent)
      })
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div className={classes.root}>
      <div className={classes.label}>{label}</div>
      <LinearProgress
        className={classes.barColorPrimary}
        variant='determinate'
        value={progress}
      />
    </div>
  )
}

export default LinearProgressBar
