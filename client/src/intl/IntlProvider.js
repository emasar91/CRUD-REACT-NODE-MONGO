import React from 'react'
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
  en: en,
  es: es,
  pt: pt,
}
const IntlProvider = ({ children }) => {
  const language = localStorage.getItem('lang') || 'es'

  return (
    <I18nProvider
      locale={language}
      messages={flattenMessages(messages[language])}
    >
      {children}
    </I18nProvider>
  )
}
export default IntlProvider
