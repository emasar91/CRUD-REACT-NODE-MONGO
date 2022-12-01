'use strict'

const Card = require('../../models/Card')

module.exports = async function deleteAllCards() {
  try {
    await Card.remove()
    return {
      status: 200,
      body: { status: 'deleted' },
    }
  } catch (e) {
    const error = new Error(`Error ${e}`)
    error.status = 400
    throw error
  }
}
