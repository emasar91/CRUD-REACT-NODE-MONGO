import React, { useContext } from 'react'
import CrudAppBar from '../../Components/AppBar'
import { AppContext } from '../../context/appContext'
import Paper from '@mui/material/Paper'

const style = (theme) => ({
  height: '100vh',
  margin: 0,
  padding: 0,
  background: theme.palette.background.app,
})

const MainPage = () => {
  const { languageSelected: lang } = useContext(AppContext)

  return (
    <Paper sx={(theme) => style(theme)}>
      <CrudAppBar name={'header.title'} languageSelected={lang} />
    </Paper>
  )
}

export default MainPage
