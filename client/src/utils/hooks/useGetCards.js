import { useState, useCallback, useEffect } from 'react'
import CrudApi from '../CrudApi'

function useGetCards(fetchingCards) {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllCards = useCallback(() => {
    CrudApi.getAllCards()
      .then((response) => {
        setCards(response)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getAllCards()
  }, [getAllCards, fetchingCards])

  return [isLoading, cards]
}

export default useGetCards
