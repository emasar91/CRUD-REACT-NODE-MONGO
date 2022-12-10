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
