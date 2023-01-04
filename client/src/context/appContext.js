import React, { createContext, useState } from 'react'

const initAppContext = {
  darkMode: false,
  lang: 'ES',
  deleteModal: false,
  saveModal: false,
  editModal: false,
  fetchingCards: false,
}

export const AppContext = createContext(initAppContext)

export const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(initAppContext.darkMode)

  const languageDefault = localStorage.getItem('lang') || initAppContext.lang

  const [languageSelected, setLanguageSelected] = useState(languageDefault)

  const [deleteModal, setDeleteModal] = useState(initAppContext.deleteModal)

  const [saveModal, setSaveModal] = useState(initAppContext.saveModal)

  const [editModal, setEditModal] = useState(initAppContext.editModal)

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

  const openEditModal = () => {
    setEditModal(!editModal)
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
        openEditModal,
        editModal,
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
