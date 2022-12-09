import React, { createContext, useState } from 'react'
import { IntlProvider as I18nProvider } from 'react-intl'

// Lang sheets
import es from './messages/es'
import pt from './messages/pt'
import en from './messages/en'

const flattenMessages = (nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

const messages = {
  EN: en,
  ES: es,
  PT: pt,
}

export const Context = createContext()
const IntlProvider = ({ children }) => {
  const languageDefault = localStorage.getItem('lang') || 'ES'
  const [languageSelected, setLanguageSelected] = useState(languageDefault)

  const handleChangeLanguage = (lang) => {
    setLanguageSelected(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <Context.Provider value={{ handleChangeLanguage, languageSelected }}>
      <I18nProvider
        locale={languageSelected}
        messages={flattenMessages(messages[languageSelected])}
      >
        {children}
      </I18nProvider>
    </Context.Provider>
  )
}
export default IntlProvider
