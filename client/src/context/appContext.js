import React, { createContext, useContext, useState } from 'react'

const initAppContext = {
  darkMode: false,
  lang: 'ES',
  deleteModal: false,
  createEditModal: { open: false, action: 'add', tab: 'product' },
  fetchingCards: false,
}

const AppContext = createContext(initAppContext)

const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(initAppContext.darkMode)

  const languageDefault = localStorage.getItem('lang') || initAppContext.lang

  const [languageSelected, setLanguageSelected] = useState(languageDefault)

  const [deleteModal, setDeleteModal] = useState(initAppContext.deleteModal)

  const [createEditModal, setCreateEditModal] = useState(
    initAppContext.createEditModal
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

  const openAddProduct = () => {
    setCreateEditModal({
      open: !createEditModal.open,
      action: 'add',
      tab: 'product',
    })
  }
  const openAddCategory = () => {
    setCreateEditModal({
      open: !createEditModal.open,
      action: 'add',
      tab: 'category',
    })
  }

  const openEditModal = () => {
    setCreateEditModal({
      open: !createEditModal.open,
      action: 'edit',
      tab: 'product',
    })
  }

  const openDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        languageSelected,
        handleChangeLanguage,
        openAddProduct,
        openAddCategory,
        openEditModal,
        createEditModal,
        openDeleteModal,
        deleteModal,
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
