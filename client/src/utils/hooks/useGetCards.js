import { useState, useCallback, useEffect } from 'react'
import CrudApi from '../CrudApi'

function useGetCards(fetchingCards) {
  const [cards, setCards] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getAllCards = useCallback(() => {
    CrudApi.getAllCards()
      .then((response) => {
        setCards(response)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getAllCards()
  }, [getAllCards, fetchingCards])

  return [isLoading, cards, error]
}

export default useGetCards
