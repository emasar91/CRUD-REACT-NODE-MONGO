import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import EN from '../../assets/icons/EN.png'
import ES from '../../assets/icons/ES.png'
import PT from '../../assets/icons/PT.png'
import { AppContext } from '../../context/appContext'
import { FormattedMessage } from 'react-intl'

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
  const { handleChangeLanguage: contextHandleChangeLanguage } =
    useContext(AppContext)

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

  const handleChangeLanguage = (lang) => {
    localStorage.setItem('lang', lang)
    contextHandleChangeLanguage(lang)
    handleClose()
  }

  return (
    <div>
      <Tooltip
        title={<FormattedMessage id={`header.lang.${languageSelected}`} />}
      >
        <Button color='inherit' id='language-button' onClick={handleClick}>
          {languageSelected}
        </Button>
      </Tooltip>
      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {languagesOptions.map((language) => {
          return (
            <Tooltip
              title={<FormattedMessage id={`header.lang.${language}`} />}
              placement='left'
              arrow
            >
              <MenuItem
                key={language}
                onClick={() => handleChangeLanguage(language)}
              >
                <span style={styles.flagContainer}>
                  <img
                    style={styles.flag}
                    src={languageIcons[language]}
                    alt={language}
                  ></img>
                </span>
                <span style={styles.language}>{language}</span>
              </MenuItem>
            </Tooltip>
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
