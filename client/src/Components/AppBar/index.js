import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import LanguageSelector from '../languageSelector'
import { FormattedMessage } from 'react-intl'

const CrudAppBar = ({ name, languageSelected }) => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <FormattedMessage id={name} />
          </Typography>
          <Button color='inherit'>Login</Button>
          <LanguageSelector languageSelected={languageSelected} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

CrudAppBar.propTypes = {
  name: PropTypes.string.isRequired,
  languageSelected: PropTypes.string.isRequired,
}

export default CrudAppBar
