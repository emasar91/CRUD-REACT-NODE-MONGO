import { useState, useCallback, useEffect } from 'react'
import CrudApi from '../CrudApi'

function useGetCategory(id) {
  const [category, setCategory] = useState([])
  const [isLoadingCategory, setIsLoadingCategory] = useState(false)

  const getCategory = useCallback(() => {
    if (id) {
      CrudApi.getCategory(id)
        .then((response) => {
          setCategory(response)
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          setIsLoadingCategory(false)
        })
    }
  }, [id])

  useEffect(() => {
    setIsLoadingCategory(true)
    getCategory()
  }, [getCategory, id])

  return [isLoadingCategory, category]
}

export default useGetCategory
