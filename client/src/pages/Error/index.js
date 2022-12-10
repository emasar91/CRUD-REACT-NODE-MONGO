import React from 'react'
import PropTypes from 'prop-types'

const ErrorPage = ({ message, error }) => {
  return (
    <div>
      <p>{message}</p>
      <p>Error</p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  )
}

ErrorPage.propTypes = {
  message: PropTypes.string,
  error: PropTypes.object,
}

export default ErrorPage
