import React, { useContext } from 'react'
import CrudAppBar from '../../Components/AppBar'
import { AppContext } from '../../context/appContext'

const root = {
  height: '100vh',
  margin: 0,
  padding: 0,
  background:
    'linear-gradient(90deg, rgba(140,172,172,1) 0%, rgba(175,140,157,1) 100%)',
}

const MainPage = () => {
  const { languageSelected: lang } = useContext(AppContext)

  return (
    <div style={root}>
      <CrudAppBar name={'header.title'} languageSelected={lang} />
    </div>
  )
}

export default MainPage
