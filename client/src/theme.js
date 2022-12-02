import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    button: {
      main: 'FFFFF',
      dark: '00000',
    },
  },
  typography: {
    fontSize: 13,
    useNextVariants: true,
    fontFamily: [
      'NunitoSans',
      'Roboto',
      '"Helvetica Neue"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  zIndex: {
    snackbar: 1600,
  },
})

export default theme
