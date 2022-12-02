import React from 'react'
import PropTypes from 'prop-types'

const styles = (theme) => ({
  root: {
    zIndex: 1102,
    boxShadow: 'none',
  },
})

const ErrorPage = ({ message, error, classes }) => {
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
