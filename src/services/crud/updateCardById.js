'use strict'

const Card = require('../../models/Card')

module.exports = async function updateCardById(_id, data) {
  try {
    await Card.updateOne({ _id }, { $set: data }).lean()
    return {
      status: 200,
      body: { status: 'updated' },
    }
  } catch (e) {
    const error = new Error(`Error ${e}`)
    error.status = 400
    throw error
  }
}
