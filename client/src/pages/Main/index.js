import React from 'react'
import { useAppContext } from '../../context/appContext'

//component
import CrudAppBar from '../../Components/AppBar'
import Cards from '../../Components/Cards'
import Paper from '@mui/material/Paper'

//hooks
import useGetCards from '../../utils/hooks/useGetCards'

const style = (theme) => ({
  height: '100vh',
  display: 'grid',
  alignItems: 'start',
  margin: 0,
  padding: 0,
  background: theme.palette.background.app,
})

const MainPage = () => {
  const { languageSelected: lang, fetchingCards } = useAppContext()
  const [isLoading, cards] = useGetCards(fetchingCards)

  return (
    <Paper sx={(theme) => style(theme)}>
      <CrudAppBar name={'header.title'} languageSelected={lang} />
      <Cards data={cards} isLoading={isLoading} />
    </Paper>
  )
}

export default MainPage
