import { useState, useCallback, useEffect } from 'react'
import CrudApi from '../CrudApi'

function useGetCategory(id, handleFetchingCards, action) {
  const [category, setCategory] = useState([])
  const [isLoadingCategory, setIsLoadingCategory] = useState(false)

  const getCategory = useCallback(() => {
    if (id && handleFetchingCards && action !== 'add') {
      CrudApi.getCategory(id, handleFetchingCards)
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
  }, [id, handleFetchingCards, action])

  useEffect(() => {
    setIsLoadingCategory(true)
    getCategory()
  }, [getCategory, id, handleFetchingCards, action])

  return [isLoadingCategory, category]
}

export default useGetCategory
