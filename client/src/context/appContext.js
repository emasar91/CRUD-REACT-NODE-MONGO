import React, { createContext, useContext, useState } from 'react'

const initAppContext = {
  darkMode: false,
  lang: 'ES',
  deleteModal: false,
  saveModal: false,
  crateEditModal: false,
  fetchingCards: false,
}

const AppContext = createContext(initAppContext)

const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(initAppContext.darkMode)

  const languageDefault = localStorage.getItem('lang') || initAppContext.lang

  const [languageSelected, setLanguageSelected] = useState(languageDefault)

  const [deleteModal, setDeleteModal] = useState(initAppContext.deleteModal)

  const [saveModal, setSaveModal] = useState(initAppContext.saveModal)

  const [crateEditModal, setCreateEditModal] = useState(
    initAppContext.crateEditModal
  )

  const [fetchingCards, setFetchingCards] = useState(
    initAppContext.fetchingCards
  )

  const handleChangeLanguage = (lang) => {
    setLanguageSelected(lang)
    localStorage.setItem('lang', lang)
  }

  const handleFetchingCards = () => {
    setFetchingCards(!fetchingCards)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const openCreateEditModal = () => {
    setCreateEditModal(!crateEditModal)
  }

  const openDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const openSaveModal = () => {
    setSaveModal(!saveModal)
  }

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        languageSelected,
        handleChangeLanguage,
        openCreateEditModal,
        crateEditModal,
        openDeleteModal,
        deleteModal,
        openSaveModal,
        saveModal,
        fetchingCards,
        handleFetchingCards,
      }}
      {...props}
    />
  )
}

export default AppContextProvider

export function useAppContext() {
  return useContext(AppContext)
}
