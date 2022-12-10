import { createTheme } from '@mui/material/styles'

const useHookTheme = (darkMode) => {
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#009688',
      },
      secondary: {
        main: '#ffff00',
      },
      background: {
        app: darkMode
          ? 'linear-gradient(90deg, #380036 0%, #0CBABA 100%)'
          : 'linear-gradient(90deg, #0D324D 0%, #7F5A83 100%)',
      },
      success: {
        main: '#ff00ff',
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
  return theme
}

export default useHookTheme
