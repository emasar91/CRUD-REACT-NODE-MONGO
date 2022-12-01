'use strict'

const Card = require('../../models/Card')

module.exports = async function deleteCardById(_id) {
  const card = await Card.findOne({ _id }).lean().exec()

  if (!card) {
    const error = new Error(`Not found card with id "${_id}"`)
    error.status = 404
    throw error
  }

  await Card.deleteOne({ _id }).lean().exec()

  return {
    body: { status: 'deleted' },
    status: 200,
  }
}
