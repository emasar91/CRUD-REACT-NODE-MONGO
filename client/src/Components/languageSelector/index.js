import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EN from '../../assets/icons/EN.png'
import ES from '../../assets/icons/ES.png'
import PT from '../../assets/icons/PT.png'
import { Context } from '../../intl/IntlProvider'

const styles = {
  flag: {
    height: '25px',
    width: '25px',
  },
  flagContainer: { lineHeight: '0', height: '25px' },
  language: {
    paddingLeft: '8px',
  },
}

const LanguageSelector = ({ languageSelected }) => {
  const context = useContext(Context)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const languagesOptions = ['ES', 'EN', 'PT']
  const languageIcons = { EN, ES, PT }

  const handleChangeLanguage = (event, lang) => {
    localStorage.setItem('lang', lang)
    context.handleChangeLanguage(lang)
    handleClose()
  }

  return (
    <div>
      <Button color='inherit' id='language-button' onClick={handleClick}>
        {languageSelected}
      </Button>
      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {languagesOptions.map((language) => {
          return (
            <MenuItem
              key={language}
              onClick={(event) => handleChangeLanguage(event, language)}
            >
              <span style={styles.flagContainer}>
                <img style={styles.flag} src={languageIcons[language]}></img>
              </span>
              <span style={styles.language}>{language}</span>
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}

LanguageSelector.propTypes = {
  languageSelected: PropTypes.string.isRequired,
}

export default LanguageSelector
