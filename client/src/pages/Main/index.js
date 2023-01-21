import React from 'react'
import { useAppContext } from '../../context/appContext'

//component
import CrudAppBar from '../../Components/AppBar'
import Cards from '../../Components/Cards'
import Paper from '@mui/material/Paper'
import { FormattedMessage } from 'react-intl'
import { Typography } from '@mui/material'

//hooks
import useGetCards from '../../utils/hooks/useGetCards'
import useWindowSize from '../../utils/hooks/useWindowsSize'

import NOT_SUPPORTED_FOR_MOBILE from '../../assets/NOT_SUPPORTED_FOR_MOBILE.png'

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

const MainPage = () => {
  const { languageSelected: lang, fetchingCards } = useAppContext()
  const [isLoading, cards] = useGetCards(fetchingCards)

  const [height, width] = useWindowSize()

  return (
    <Paper sx={(theme) => style(theme).root}>
      {width > 1024 ? (
        <>
          <CrudAppBar name={'header.title'} languageSelected={lang} />
          <Cards data={cards} isLoading={isLoading} />
        </>
      ) : (
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
            <FormattedMessage id='body.notSupported' />
          </Typography>

          <img
            style={{ maxWidth: '800px' }}
            src={NOT_SUPPORTED_FOR_MOBILE}
            alt='Error Page'
          />
        </div>
      )}
    </Paper>
  )
}

export default MainPage
