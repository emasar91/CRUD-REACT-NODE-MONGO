import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ErrorPage from '../pages/Error'
import MainPage from '../pages/Main'

export default function CrudRoutes() {
  return (
    <Routes>
      <Route element={<MainPage />} path='/' />
      <Route element={<ErrorPage />} path='*' />
    </Routes>
  )
}
