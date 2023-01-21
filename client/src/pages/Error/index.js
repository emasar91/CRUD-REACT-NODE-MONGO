import React from 'react'
import { useAppContext } from '../../context/appContext'

//component
import Paper from '@mui/material/Paper'
import { FormattedMessage } from 'react-intl'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import ERROR_IMAGE from '../../assets/ERROR.png'
import NOT_SUPPORTED_FOR_MOBILE from '../../assets/NOT_SUPPORTED_FOR_MOBILE.png'

import useWindowSize from '../../utils/hooks/useWindowsSize'

const style = (theme) => ({
  root: {
    height: '100vh',
    display: 'grid',
    alignItems: 'start',
    margin: 0,
    padding: 0,
    background: theme.palette.app.background,
  },
  text: {
    color: 'white',
    backgroundColor: theme.palette.success.main,
    maxWidth: 400,
    border: 'white solid 1px',
    borderRadius: '8px',
    padding: '8px',
    textAlign: 'center',
  },
})

const ErrorPage = () => {
  const [height, width] = useWindowSize()

  return (
    <Paper sx={(theme) => style(theme).root}>
      {width > 1024 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: ' -webkit-fill-available',
            rowGap: '25px',
          }}
        >
          <Typography sx={(theme) => style(theme).text}>
            <FormattedMessage id='body.errorPage' />
          </Typography>
          <Button size='medium' color='success' variant='contained' href='/'>
            <FormattedMessage id='body.home' />
          </Button>
          <img
            style={{ maxWidth: '800px' }}
            src={ERROR_IMAGE}
            alt='Error Page'
          />
        </div>
      ) : (
        <div
          style={{
            background: `url(${NOT_SUPPORTED_FOR_MOBILE})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: 600,
            marginTop: 250,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <div
            style={{
              marginTop: -100,
            }}
          >
            <Typography sx={(theme) => style(theme).text}>
              <FormattedMessage id='body.notSupported' />
            </Typography>
          </div>
        </div>
      )}
    </Paper>
  )
}

export default ErrorPage
