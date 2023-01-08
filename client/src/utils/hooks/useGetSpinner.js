import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function useGetSpinner(isLoading) {
  const [showSpinner, setShowSpinner] = useState(true)

  const getSpinner = useCallback(() => {
    setTimeout(() => {
      if (!isLoading) {
        setShowSpinner(false)
      }
    }, '1000')
  }, [isLoading])

  useEffect(() => {
    getSpinner()
  }, [isLoading, getSpinner])

  return showSpinner
}

useGetSpinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default useGetSpinner
