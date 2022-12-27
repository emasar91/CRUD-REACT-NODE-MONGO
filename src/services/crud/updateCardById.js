'use strict'

const Card = require('../../models/Card')

module.exports = async function updateCardById(_id, data) {
  const card = await Card.findOne({ _id }).lean().exec()
  if (card) {
    await Card.updateOne({ _id }, { $set: data }).lean()
    return {
      status: 200,
      body: { status: 'updated' },
    }
  }

  throw new Error('the card does not exist')
}
