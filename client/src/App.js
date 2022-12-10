import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import IntlProvider from './intl/IntlProvider'
import useHookTheme from './utils/hooks/useHookTheme'
import CrudRoutes from './routes'
import { AppContext } from './context/appContext'
import './App.css'

function App() {
  const appContext = useContext(AppContext)
  const { darkMode } = appContext
  const theme = useHookTheme(darkMode)

  return (
    <div className='App'>
      <Router>
        <IntlProvider>
          <ThemeProvider theme={theme}>
            <CrudRoutes />
          </ThemeProvider>
        </IntlProvider>
      </Router>
    </div>
  )
}

export default App
