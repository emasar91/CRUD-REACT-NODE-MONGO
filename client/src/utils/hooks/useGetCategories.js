import { useState, useCallback, useEffect } from 'react'
import CrudApi from '../CrudApi'

function useGetCategories(action) {
  const [categories, setCategories] = useState([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(false)

  const getAllCategories = useCallback(() => {
    if (action) {
      CrudApi.getAllCategories()
        .then((response) => {
          setCategories(response)
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          setIsLoadingCategories(false)
        })
    }
  }, [action])

  useEffect(() => {
    setIsLoadingCategories(true)
    getAllCategories()
  }, [getAllCategories, action])

  return [isLoadingCategories, categories]
}

export default useGetCategories
