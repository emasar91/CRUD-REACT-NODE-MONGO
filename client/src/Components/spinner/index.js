import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

const style = (width, height) => ({
  container: {
    width: width,
    height: height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'inherit',
  },
})

const Spinner = ({ width, height }) => {
  return (
    <Box sx={() => style(width, height).container}>
      <CircularProgress color='success' />
      <Typography sx={{ color: 'text.main' }}>
        <FormattedMessage id={`body.spinner.loading`} />
      </Typography>
    </Box>
  )
}

export default Spinner
