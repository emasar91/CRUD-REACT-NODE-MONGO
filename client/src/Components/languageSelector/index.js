import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import EN from '../../assets/icons/EN.png'
import ES from '../../assets/icons/ES.png'
import PT from '../../assets/icons/PT.png'
import { useAppContext } from '../../context/appContext'
import { FormattedMessage } from 'react-intl'
import { Typography } from '@mui/material'

const styles = {
  flag: {
    height: '25px',
    width: '25px',
  },
  flagContainer: { lineHeight: '0', height: '25px' },
  language: {
    paddingLeft: '8px',
  },
  buttonContainer: { display: 'flex', alignItems: 'center' },
  buttonLanguage: {
    width: '50px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}

const LanguageSelector = ({ languageSelected }) => {
  const { handleChangeLanguage: contextHandleChangeLanguage } = useAppContext()

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

  /**
   * saves the selected language to translate the application
   * @param lang language selected globally
   */
  const handleChangeLanguage = (lang) => {
    localStorage.setItem('lang', lang)
    contextHandleChangeLanguage(lang)
    handleClose()
  }

  return (
    <Box>
      <Box sx={styles.buttonContainer}>
        <Tooltip
          title={<FormattedMessage id={`header.lang.${languageSelected}`} />}
        >
          <Button
            color='inherit'
            id='language-button'
            onClick={handleClick}
            sx={styles.buttonLanguage}
          >
            {languageSelected}
            <Typography sx={styles.flagContainer}>
              <img
                style={styles.flag}
                src={languageIcons[languageSelected]}
                alt={languageSelected}
              />
            </Typography>
          </Button>
        </Tooltip>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {languagesOptions.map((language) => {
          return (
            <Tooltip
              title={<FormattedMessage id={`header.lang.${language}`} />}
              key={language}
              placement='left'
              arrow
            >
              <MenuItem
                key={language}
                onClick={() => handleChangeLanguage(language)}
              >
                <Typography sx={styles.flagContainer}>
                  <img
                    style={styles.flag}
                    src={languageIcons[language]}
                    alt={language}
                  />
                </Typography>
                <Typography sx={styles.language}>{language}</Typography>
              </MenuItem>
            </Tooltip>
          )
        })}
      </Menu>
    </Box>
  )
}

LanguageSelector.propTypes = {
  languageSelected: PropTypes.string.isRequired,
}

export default LanguageSelector
