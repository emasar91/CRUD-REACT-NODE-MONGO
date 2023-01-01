import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

const Spinner = () => {
  return (
    <Box
      style={{
        width: '970px',
        height: '480px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CircularProgress />
      <Typography>
        <FormattedMessage id={`body.spinner.loading`} />
      </Typography>
    </Box>
  )
}

export default Spinner
