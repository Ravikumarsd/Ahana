import React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import IconTextBox from '../IconTextBox/IconTextBox'
import { ExpandMore } from '@material-ui/icons'
import DropDownItem from '../DropDownItem/DropDownItem'

const useStyles = makeStyles(theme => ({}))
const DropDown = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [value, seValue] = React.useState('select')
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }
    prevOpen.current = open
  }, [open])

  const handleClose = event => {
    const { myValue } =
      event && event.currentTarget && event.currentTarget.dataset
        ? event.currentTarget.dataset
        : { myValue: value }
    seValue(myValue)
    const selectedInfo = props.data.find(val => val.id == myValue)
    // console.log(selectedInfo)
    props && props.getDropDownValue && props.getDropDownValue(selectedInfo)
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }
  const renderMenuList = props => (
    <MenuList autoFocusItem={open} id='menu-list-grow'>
      {props.data.map(({ label }) => (
        <DropDownItem key={label} id={label} handleClose={handleClose} />
      ))}
    </MenuList>
  )

  return (
    <div>
      <div
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        {props.children}
      </div>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                {renderMenuList(props)}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default DropDown
