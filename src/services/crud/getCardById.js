'use-strict'

const Card = require('../../models/Card')

module.exports = async function getCardById(_id) {
  const card = await Card.findOne({ _id }).populate('category').lean().exec()

  if (card) {
    return {
      body: card,
      status: 200,
    }
  }
  return {
    status: 404,
  }
}
