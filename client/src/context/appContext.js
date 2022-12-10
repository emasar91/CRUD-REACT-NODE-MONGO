import React, { createContext, useState } from 'react'

const initAppContext = {
  darkMode: false,
  lang: 'ES',
}

export const AppContext = createContext(initAppContext)

export const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(initAppContext.darkMode)

  const languageDefault = localStorage.getItem('lang') || initAppContext.lang
  const [languageSelected, setLanguageSelected] = useState(languageDefault)

  const handleChangeLanguage = (lang) => {
    setLanguageSelected(lang)
    localStorage.setItem('lang', lang)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        languageSelected,
        handleChangeLanguage,
      }}
      {...props}
    />
  )
}
