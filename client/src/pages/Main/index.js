import React from 'react'
import PropTypes from 'prop-types'

const styles = (theme) => ({
  root: {
    zIndex: 1102,
    boxShadow: 'none',
  },
})

const MainPage = ({ message, error, classes }) => {
  return (
    <div>
      {/* <p>{message}</p> */}
      <p>Main</p>
      {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
    </div>
  )
}

MainPage.propTypes = {
  message: PropTypes.string,
  error: PropTypes.object,
}

export default MainPage
