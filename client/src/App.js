import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import IntlProvider from './intl/IntlProvider'
import theme from './theme'
import CrudRoutes from './routes'
import './App.css'

function App() {
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
