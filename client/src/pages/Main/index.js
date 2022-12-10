import React, { useContext } from 'react'
import CrudAppBar from '../../Components/AppBar'
import { Context } from '../../intl/IntlProvider'

const root = {
  height: '100vh',
  margin: 0,
  padding: 0,
  background:
    'linear-gradient(90deg, rgba(140,172,172,1) 0%, rgba(175,140,157,1) 100%)',
}

const MainPage = () => {
  const context = useContext(Context)
  const lang = context.languageSelected

  return (
    <div style={root}>
      <CrudAppBar name={'header.title'} languageSelected={lang} />
    </div>
  )
}

export default MainPage
