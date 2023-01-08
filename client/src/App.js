import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import IntlProvider from './intl/IntlProvider'
import useHookTheme from './utils/hooks/useHookTheme'
import CrudRoutes from './routes'
import { useAppContext } from './context/appContext'
import './App.css'

function App() {
  const { darkMode } = useAppContext()
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
