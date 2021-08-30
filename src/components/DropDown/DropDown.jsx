import React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import IconTextBox from '../IconTextBox/IconTextBox'
import { ExpandMore } from '@material-ui/icons'
import LanguageItem from '../DropDownItem/DropDownItem'
import languageInfo from './LanguageInfo'

const useStyles = makeStyles(theme => ({
  languageButton: {
    display: 'flex'
  }
}))
const DropDown = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [language, setLanguage] = React.useState('Language')
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
        : { myValue: language }
    setLanguage(myValue)
    console.log('selected language ==>>', myValue)
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }
  const renderMenuList = () => (
    <MenuList autoFocusItem={open} id='menu-list-grow'>
      {languageInfo.map(language => (
        <LanguageItem id={language} handleClose={handleClose} />
      ))}
    </MenuList>
  )

  return (
    <div>
      <div
        className={classes.languageButton}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        <IconTextBox icon='language' text='Language' languageDropdown />
        <ExpandMore />
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
                {renderMenuList()}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default DropDown
