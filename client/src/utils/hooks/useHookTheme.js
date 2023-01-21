import { createTheme } from '@mui/material/styles'

const useHookTheme = (darkMode) => {
  const themeLight = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#009688',
      },
      secondary: {
        main: '#ffff00',
      },
      app: {
        background: 'linear-gradient(90deg, #014f5c 0%, #01ddf1 100%)',
      },
      searchBar: {
        background: '#066178',
      },
      paper: '#FFFF',
      text: { main: '#1E1E1E' },
      appBar: {
        background: '#02293d',
      },
      success: {
        main: '#066178',
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
  const themeDark = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#009688',
      },
      secondary: {
        main: '#ffff00',
      },
      app: {
        background: 'linear-gradient(90deg, #014f5c 0%, #01ddf1 100%)',
      },
      searchBar: {
        background: '#066178',
      },
      paper: '#1E1E1E',
      text: { main: '#FFFF' },
      appBar: {
        background: '#02293d',
      },
      success: {
        main: '#066178',
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
  return !darkMode ? themeLight : themeDark
}

export default useHookTheme
